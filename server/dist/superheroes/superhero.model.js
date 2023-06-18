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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Superhero = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
let Superhero = class Superhero extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Unique id' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Superhero.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'spider-man', description: `Nickname` }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Superhero.prototype, "nickname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Peter Parker', description: `Real name` }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Superhero.prototype, "realName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'man with net in hand', description: `Description of superhero` }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Superhero.prototype, "originDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'net, flying', description: `Superhero's power` }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Superhero.prototype, "superpowers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "I'm spider-man!", description: `Superhero's unique phrase` }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Superhero.prototype, "catchPhrase", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "[1.png, 2.png]", description: `Array of superhero's images` }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING) }),
    __metadata("design:type", Array)
], Superhero.prototype, "images", void 0);
Superhero = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'superheroes' })
], Superhero);
exports.Superhero = Superhero;
//# sourceMappingURL=superhero.model.js.map