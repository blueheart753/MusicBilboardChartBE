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
exports.VibesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const vibe_entity_1 = require("./entities/vibe.entity");
let VibesService = class VibesService {
    constructor(vibesRepository) {
        this.vibesRepository = vibesRepository;
    }
    async create(vibe) {
        const newVibe = this.vibesRepository.create(vibe);
        return await this.vibesRepository.save(newVibe);
    }
    async findAll() {
        return this.vibesRepository.find();
    }
    async update(id, vibe) {
        await this.vibesRepository.update(id, vibe);
        return id;
    }
    async remove(id) {
        await this.vibesRepository.delete(id);
        return id;
    }
};
exports.VibesService = VibesService;
exports.VibesService = VibesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vibe_entity_1.VibesEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VibesService);
//# sourceMappingURL=vibe.service.js.map