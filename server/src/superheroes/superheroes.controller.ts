import {Body, Controller, Delete, Get, Param, Post, Put, Query, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {ApiOperation, ApiQuery} from "@nestjs/swagger";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {SuperheroesService} from "./superheroes.service";
import {CreateSuperheroDto} from "./dto/create-superhero.dto";
import {DeleteImageDto} from "./dto/delete-image.dto";

@Controller('superheroes')
export class SuperheroesController {
    constructor(private superheroesService: SuperheroesService) {
    }

    @ApiOperation({summary: 'Create superhero'})
    @Post()
    @UseInterceptors(FileFieldsInterceptor([{name: 'images', maxCount: 10}]))
    create(@Body() dto: CreateSuperheroDto,
           @UploadedFiles() file: { images?: Express.Multer.File[] }) {
        return this.superheroesService.createSuperhero(dto, file.images)
    }

    @ApiOperation({summary: 'Get superhero'})
    @Get(':id')
    async getById(@Param('id') id: number) {
        return this.superheroesService.getSuperheroById(id)
    }

    @ApiOperation({summary: 'Get all superheroes'})
    @Get()
    async getAll(@Query('offset') offset?: number,
                 @Query('count') count?: number) {
        console.log(offset)
        return this.superheroesService.getAllSuperheroes(count, offset)
    }

    @ApiOperation({summary: 'update superhero'})
    @Put(':id')
    async update(@Param('id') id: number,
                 @Body() dto: CreateSuperheroDto) {
        return this.superheroesService.updateSuperhero(id, dto)
    }

    @ApiOperation({summary: "add superhero's images"})
    @Put('add-image/:superheroId')
    @UseInterceptors(FileFieldsInterceptor([{name: 'images', maxCount: 10}]))
    async addImage(@Param('superheroId') superheroId: number,
                   @UploadedFiles() file: { images?: Express.Multer.File[] }) {
        return this.superheroesService.addImage(superheroId, file.images)
    }

    @ApiOperation({summary: "delete superhero's images"})
    @Put('remove-image/:superheroId')
    async deleteImage(@Param('superheroId') superheroId: number,
                      @Body() dto: DeleteImageDto) {
        return this.superheroesService.deleteImage(superheroId, dto)
    }

    @ApiOperation({summary: 'delete superhero'})
    @Delete(':id')
    @UseInterceptors(FileFieldsInterceptor([{name: 'images', maxCount: 10}]))
    async delete(@Param('id') id: number) {
        return this.superheroesService.deleteSuperhero(id)
    }
}
