"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VibesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const vibe_service_1 = require("./vibe.service");
const vibe_controller_1 = require("./vibe.controller");
const vibe_entity_1 = require("./entities/vibe.entity");
let VibesModule = class VibesModule {
};
exports.VibesModule = VibesModule;
exports.VibesModule = VibesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([vibe_entity_1.VibesEntity])],
        controllers: [vibe_controller_1.VibesController],
        providers: [vibe_service_1.VibesService],
    })
], VibesModule);
//# sourceMappingURL=vibe.module.js.map