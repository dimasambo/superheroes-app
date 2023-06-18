import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {FileService, FileType} from "../file/file.service";
import {Superhero} from "./superhero.model";
import {CreateSuperheroDto} from "./dto/create-superhero.dto";
import {DeleteImageDto} from "./dto/delete-image.dto";

@Injectable()
export class SuperheroesService {
    constructor(@InjectModel(Superhero) private superheroRepository: typeof Superhero,
                private fileService: FileService) {}

    async createSuperhero(dto: CreateSuperheroDto, images: Array<any>) {

        const imageNames: string[] = []
        if(images) {
            for (const image of images) {
                const name = await this.fileService.createFile(FileType.PICTURE, image)
                imageNames.push(name)
            }
        }

        await this.superheroRepository.create({...dto, images: imageNames})
        return await this.superheroRepository.findAll({where: {nickname: dto.nickname}})
    }

    async getSuperheroById(id) {
        return await this.superheroRepository.findAll({where: {id}})
    }

    async getAllSuperheroes(count = 5, offset = 0) {
        return await this.superheroRepository.findAll({offset: offset, limit: count, order: [['id', 'DESC']]})
    }

    async updateSuperhero(id: number, dto: CreateSuperheroDto) {
        const superhero = await this.superheroRepository.findByPk(id)
        if(superhero) {
            await superhero.update({...dto})
            return superhero
        }
    }

    async addImage(id: number, images: Array<any>) {
        const superhero = await this.superheroRepository.findByPk(id)
        if(superhero) {

            const imageNames: string[] = []
            if(images) {
                for (const image of images) {
                    const name = await this.fileService.createFile(FileType.PICTURE, image)
                    imageNames.push(name)
                }
            }

            await superhero.update({...superhero, images: [...superhero.images, ...imageNames]})
            return superhero
        }
    }

    async deleteImage(superheroId: number, dto: DeleteImageDto) {
        const superhero = await this.superheroRepository.findByPk(superheroId)
        if(superhero) {
            let images: string[] = [...superhero.images]

            images.forEach((image, index) => {
                if(image === dto.imagePath) {
                    images.splice(index, 1)
                    return true
                }
            })
            await superhero.update({...superhero, images: images})
            return superhero
        }
    }

    async deleteSuperhero(id: number) {
        const superhero = await this.superheroRepository.findByPk(id)
        if(superhero) await superhero.destroy()
    }
}
