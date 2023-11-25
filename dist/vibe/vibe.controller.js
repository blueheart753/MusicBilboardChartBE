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
exports.VibesController = void 0;
const common_1 = require("@nestjs/common");
const vibe_service_1 = require("./vibe.service");
const vibe_entity_1 = require("./entities/vibe.entity");
let VibesController = class VibesController {
    constructor(vibesService) {
        this.vibesService = vibesService;
    }
    async create(vibe) {
        return await this.vibesService.create(vibe);
    }
    async findAll() {
        return this.vibesService.findAll();
    }
    async update(id, vibe) {
        return this.vibesService.update(+id, vibe);
    }
    async remove(id) {
        return this.vibesService.remove(+id);
    }
};
exports.VibesController = VibesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vibe_entity_1.VibesEntity]),
    __metadata("design:returntype", Promise)
], VibesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VibesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, vibe_entity_1.VibesEntity]),
    __metadata("design:returntype", Promise)
], VibesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VibesController.prototype, "remove", null);
exports.VibesController = VibesController = __decorate([
    (0, common_1.Controller)('vibe'),
    __metadata("design:paramtypes", [vibe_service_1.VibesService])
], VibesController);
//# sourceMappingURL=vibe.controller.js.map