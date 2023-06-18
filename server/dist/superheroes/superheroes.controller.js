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
exports.SuperheroesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const superheroes_service_1 = require("./superheroes.service");
const create_superhero_dto_1 = require("./dto/create-superhero.dto");
const delete_image_dto_1 = require("./dto/delete-image.dto");
let SuperheroesController = class SuperheroesController {
    constructor(superheroesService) {
        this.superheroesService = superheroesService;
    }
    create(dto, file) {
        return this.superheroesService.createSuperhero(dto, file.images);
    }
    async getById(id) {
        return this.superheroesService.getSuperheroById(id);
    }
    async getAll(offset, count) {
        console.log(offset);
        return this.superheroesService.getAllSuperheroes(count, offset);
    }
    async update(id, dto) {
        return this.superheroesService.updateSuperhero(id, dto);
    }
    async addImage(superheroId, file) {
        return this.superheroesService.addImage(superheroId, file.images);
    }
    async deleteImage(superheroId, dto) {
        return this.superheroesService.deleteImage(superheroId, dto);
    }
    async delete(id) {
        return this.superheroesService.deleteSuperhero(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create superhero' }),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'images', maxCount: 10 }])),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_superhero_dto_1.CreateSuperheroDto, Object]),
    __metadata("design:returntype", void 0)
], SuperheroesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get superhero' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SuperheroesController.prototype, "getById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all superheroes' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('offset')),
    __param(1, (0, common_1.Query)('count')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], SuperheroesController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update superhero' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_superhero_dto_1.CreateSuperheroDto]),
    __metadata("design:returntype", Promise)
], SuperheroesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "add superhero's images" }),
    (0, common_1.Put)('add-image/:superheroId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'images', maxCount: 10 }])),
    __param(0, (0, common_1.Param)('superheroId')),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SuperheroesController.prototype, "addImage", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "delete superhero's images" }),
    (0, common_1.Put)('remove-image/:superheroId'),
    __param(0, (0, common_1.Param)('superheroId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, delete_image_dto_1.DeleteImageDto]),
    __metadata("design:returntype", Promise)
], SuperheroesController.prototype, "deleteImage", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete superhero' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'images', maxCount: 10 }])),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SuperheroesController.prototype, "delete", null);
SuperheroesController = __decorate([
    (0, common_1.Controller)('superheroes'),
    __metadata("design:paramtypes", [superheroes_service_1.SuperheroesService])
], SuperheroesController);
exports.SuperheroesController = SuperheroesController;
//# sourceMappingURL=superheroes.controller.js.map