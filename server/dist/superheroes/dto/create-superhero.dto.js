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
exports.CreateSuperheroDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateSuperheroDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'spider-man', description: `Nickname` }),
    __metadata("design:type", String)
], CreateSuperheroDto.prototype, "nickname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Peter Parker', description: `Real name` }),
    __metadata("design:type", String)
], CreateSuperheroDto.prototype, "realName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'man with net in hand', description: 'Description of superhero' }),
    __metadata("design:type", String)
], CreateSuperheroDto.prototype, "originDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'net, flying', description: 'Superhero\'s power' }),
    __metadata("design:type", String)
], CreateSuperheroDto.prototype, "superpowers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "I'm spider-man!", description: 'Superhero\'s unique phrase' }),
    __metadata("design:type", String)
], CreateSuperheroDto.prototype, "catchPhrase", void 0);
exports.CreateSuperheroDto = CreateSuperheroDto;
//# sourceMappingURL=create-superhero.dto.js.map