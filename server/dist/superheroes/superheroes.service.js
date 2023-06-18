"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperheroesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const file_service_1 = require("../file/file.service");
const superhero_model_1 = require("./superhero.model");
let SuperheroesService = class SuperheroesService {
    constructor(superheroRepository, fileService) {
        this.superheroRepository = superheroRepository;
        this.fileService = fileService;
    }
    async createSuperhero(dto, images) {
        const imageNames = [];
        if (images) {
            for (const image of images) {
                const name = await this.fileService.createFile(file_service_1.FileType.PICTURE, image);
                imageNames.push(name);
            }
        }
        await this.superheroRepository.create(Object.assign(Object.assign({}, dto), { images: imageNames }));
        return await this.superheroRepository.findAll({ where: { nickname: dto.nickname } });
    }
    async getSuperheroById(id) {
        return await this.superheroRepository.findAll({ where: { id } });
    }
    async getAllSuperheroes(count = 5, offset = 0) {
        return await this.superheroRepository.findAll({ offset: offset, limit: count, order: [['id', 'DESC']] });
    }
    async updateSuperhero(id, dto) {
        const superhero = await this.superheroRepository.findByPk(id);
        if (superhero) {
            await superhero.update(Object.assign({}, dto));
            return superhero;
        }
    }
    async addImage(id, images) {
        const superhero = await this.superheroRepository.findByPk(id);
        if (superhero) {
            const imageNames = [];
            if (images) {
                for (const image of images) {
                    const name = await this.fileService.createFile(file_service_1.FileType.PICTURE, image);
                    imageNames.push(name);
                }
            }
            await superhero.update(Object.assign(Object.assign({}, superhero), { images: [...superhero.images, ...imageNames] }));
            return superhero;
        }
    }
    async deleteImage(superheroId, dto) {
        const superhero = await this.superheroRepository.findByPk(superheroId);
        if (superhero) {
            let images = [...superhero.images];
            images.forEach((image, index) => {
                if (image === dto.imagePath) {
                    images.splice(index, 1);
                    return true;
                }
            });
            await superhero.update(Object.assign(Object.assign({}, superhero), { images: images }));
            return superhero;
        }
    }
    async deleteSuperhero(id) {
        const superhero = await this.superheroRepository.findByPk(id);
        if (superhero)
            await superhero.destroy();
    }
};
SuperheroesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(superhero_model_1.Superhero)),
    __metadata("design:paramtypes", [Object, file_service_1.FileService])
], SuperheroesService);
exports.SuperheroesService = SuperheroesService;
//# sourceMappingURL=superheroes.service.js.map