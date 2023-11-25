"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const apple_service_1 = require("./apple.service");
const apple_controller_1 = require("./apple.controller");
const apple_entity_1 = require("./entities/apple.entity");
let ApplesModule = class ApplesModule {
};
exports.ApplesModule = ApplesModule;
exports.ApplesModule = ApplesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([apple_entity_1.ApplesEntity])],
        controllers: [apple_controller_1.ApplesController],
        providers: [apple_service_1.ApplesService],
    })
], ApplesModule);
//# sourceMappingURL=apple.module.js.map