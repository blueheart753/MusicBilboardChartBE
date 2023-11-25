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
exports.FlosController = void 0;
const common_1 = require("@nestjs/common");
const flo_service_1 = require("./flo.service");
const flo_entity_1 = require("./entities/flo.entity");
let FlosController = class FlosController {
    constructor(flosService) {
        this.flosService = flosService;
    }
    async create(flo) {
        return await this.flosService.create(flo);
    }
    async findAll() {
        return this.flosService.findAll();
    }
    async update(id, flo) {
        return this.flosService.update(+id, flo);
    }
    async remove(id) {
        return this.flosService.remove(+id);
    }
};
exports.FlosController = FlosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [flo_entity_1.FlosEntity]),
    __metadata("design:returntype", Promise)
], FlosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, flo_entity_1.FlosEntity]),
    __metadata("design:returntype", Promise)
], FlosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FlosController.prototype, "remove", null);
exports.FlosController = FlosController = __decorate([
    (0, common_1.Controller)('flo'),
    __metadata("design:paramtypes", [flo_service_1.FlosService])
], FlosController);
//# sourceMappingURL=flo.controller.js.map