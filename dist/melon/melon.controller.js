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
exports.MelonsController = void 0;
const common_1 = require("@nestjs/common");
const melon_service_1 = require("./melon.service");
const melon_entity_1 = require("./entities/melon.entity");
let MelonsController = class MelonsController {
    constructor(melonsService) {
        this.melonsService = melonsService;
    }
    async create(melon) {
        return await this.melonsService.create(melon);
    }
    async findAll() {
        return this.melonsService.findAll();
    }
    async update(id, melon) {
        return this.melonsService.update(+id, melon);
    }
    async remove(id) {
        return this.melonsService.remove(+id);
    }
};
exports.MelonsController = MelonsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [melon_entity_1.MelonsEntity]),
    __metadata("design:returntype", Promise)
], MelonsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MelonsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, melon_entity_1.MelonsEntity]),
    __metadata("design:returntype", Promise)
], MelonsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MelonsController.prototype, "remove", null);
exports.MelonsController = MelonsController = __decorate([
    (0, common_1.Controller)('melon'),
    __metadata("design:paramtypes", [melon_service_1.MelonsService])
], MelonsController);
//# sourceMappingURL=melon.controller.js.map