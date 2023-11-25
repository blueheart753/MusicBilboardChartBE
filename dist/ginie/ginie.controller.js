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
exports.GiniesController = void 0;
const common_1 = require("@nestjs/common");
const ginie_service_1 = require("./ginie.service");
const ginie_entity_1 = require("./entities/ginie.entity");
let GiniesController = class GiniesController {
    constructor(giniesService) {
        this.giniesService = giniesService;
    }
    async create(ginie) {
        return await this.giniesService.create(ginie);
    }
    async findAll() {
        return this.giniesService.findAll();
    }
    async update(id, ginie) {
        return this.giniesService.update(+id, ginie);
    }
    async remove(id) {
        return this.giniesService.remove(+id);
    }
};
exports.GiniesController = GiniesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ginie_entity_1.GiniesEntity]),
    __metadata("design:returntype", Promise)
], GiniesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GiniesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ginie_entity_1.GiniesEntity]),
    __metadata("design:returntype", Promise)
], GiniesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GiniesController.prototype, "remove", null);
exports.GiniesController = GiniesController = __decorate([
    (0, common_1.Controller)('ginie'),
    __metadata("design:paramtypes", [ginie_service_1.GiniesService])
], GiniesController);
//# sourceMappingURL=ginie.controller.js.map