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
exports.BugssController = void 0;
const common_1 = require("@nestjs/common");
const bugs_service_1 = require("./bugs.service");
const bugs_entity_1 = require("./entities/bugs.entity");
let BugssController = class BugssController {
    constructor(bugssService) {
        this.bugssService = bugssService;
    }
    async create(bugs) {
        return await this.bugssService.create(bugs);
    }
    async findAll() {
        return this.bugssService.findAll();
    }
    async update(id, bugs) {
        return this.bugssService.update(+id, bugs);
    }
    async remove(id) {
        return this.bugssService.remove(+id);
    }
};
exports.BugssController = BugssController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bugs_entity_1.BugssEntity]),
    __metadata("design:returntype", Promise)
], BugssController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BugssController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, bugs_entity_1.BugssEntity]),
    __metadata("design:returntype", Promise)
], BugssController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BugssController.prototype, "remove", null);
exports.BugssController = BugssController = __decorate([
    (0, common_1.Controller)('bugs'),
    __metadata("design:paramtypes", [bugs_service_1.BugssService])
], BugssController);
//# sourceMappingURL=bugs.controller.js.map