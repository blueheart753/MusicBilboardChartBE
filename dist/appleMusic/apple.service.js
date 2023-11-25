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
exports.ApplesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const apple_entity_1 = require("./entities/apple.entity");
let ApplesService = class ApplesService {
    constructor(applesRepository) {
        this.applesRepository = applesRepository;
    }
    async create(apple) {
        const newApple = this.applesRepository.create(apple);
        return await this.applesRepository.save(newApple);
    }
    async findAll() {
        return this.applesRepository.find();
    }
    async update(id, apple) {
        await this.applesRepository.update(id, apple);
        return id;
    }
    async remove(id) {
        await this.applesRepository.delete(id);
        return id;
    }
};
exports.ApplesService = ApplesService;
exports.ApplesService = ApplesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(apple_entity_1.ApplesEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ApplesService);
//# sourceMappingURL=apple.service.js.map