"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperheroesModule = void 0;
const common_1 = require("@nestjs/common");
const superheroes_controller_1 = require("./superheroes.controller");
const superheroes_service_1 = require("./superheroes.service");
const file_module_1 = require("../file/file.module");
const sequelize_1 = require("@nestjs/sequelize");
const superhero_model_1 = require("./superhero.model");
let SuperheroesModule = class SuperheroesModule {
};
SuperheroesModule = __decorate([
    (0, common_1.Module)({
        controllers: [superheroes_controller_1.SuperheroesController],
        providers: [superheroes_service_1.SuperheroesService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([superhero_model_1.Superhero]),
            file_module_1.FileModule
        ]
    })
], SuperheroesModule);
exports.SuperheroesModule = SuperheroesModule;
//# sourceMappingURL=superheroes.module.js.map