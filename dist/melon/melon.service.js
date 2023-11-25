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
exports.MelonsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const melon_entity_1 = require("./entities/melon.entity");
let MelonsService = class MelonsService {
    constructor(melonsRepository) {
        this.melonsRepository = melonsRepository;
    }
    async create(melon) {
        const newMelon = this.melonsRepository.create(melon);
        return await this.melonsRepository.save(newMelon);
    }
    async findAll() {
        return this.melonsRepository.find();
    }
    async update(id, melon) {
        await this.melonsRepository.update(id, melon);
        return id;
    }
    async remove(id) {
        await this.melonsRepository.delete(id);
        return id;
    }
};
exports.MelonsService = MelonsService;
exports.MelonsService = MelonsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(melon_entity_1.MelonsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MelonsService);
//# sourceMappingURL=melon.service.js.map