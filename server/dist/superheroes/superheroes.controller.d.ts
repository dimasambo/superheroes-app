/// <reference types="multer" />
import { SuperheroesService } from "./superheroes.service";
import { CreateSuperheroDto } from "./dto/create-superhero.dto";
import { DeleteImageDto } from "./dto/delete-image.dto";
export declare class SuperheroesController {
    private superheroesService;
    constructor(superheroesService: SuperheroesService);
    create(dto: CreateSuperheroDto, file: {
        images?: Express.Multer.File[];
    }): Promise<import("./superhero.model").Superhero[]>;
    getById(id: number): Promise<import("./superhero.model").Superhero[]>;
    getAll(offset?: number, count?: number): Promise<import("./superhero.model").Superhero[]>;
    update(id: number, dto: CreateSuperheroDto): Promise<import("./superhero.model").Superhero>;
    addImage(superheroId: number, file: {
        images?: Express.Multer.File[];
    }): Promise<import("./superhero.model").Superhero>;
    deleteImage(superheroId: number, dto: DeleteImageDto): Promise<import("./superhero.model").Superhero>;
    delete(id: number): Promise<void>;
}
