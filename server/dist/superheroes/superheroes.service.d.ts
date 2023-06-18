import { FileService } from "../file/file.service";
import { Superhero } from "./superhero.model";
import { CreateSuperheroDto } from "./dto/create-superhero.dto";
import { DeleteImageDto } from "./dto/delete-image.dto";
export declare class SuperheroesService {
    private superheroRepository;
    private fileService;
    constructor(superheroRepository: typeof Superhero, fileService: FileService);
    createSuperhero(dto: CreateSuperheroDto, images: Array<any>): Promise<Superhero[]>;
    getSuperheroById(id: any): Promise<Superhero[]>;
    getAllSuperheroes(count?: number, offset?: number): Promise<Superhero[]>;
    updateSuperhero(id: number, dto: CreateSuperheroDto): Promise<Superhero>;
    addImage(id: number, images: Array<any>): Promise<Superhero>;
    deleteImage(superheroId: number, dto: DeleteImageDto): Promise<Superhero>;
    deleteSuperhero(id: number): Promise<void>;
}
