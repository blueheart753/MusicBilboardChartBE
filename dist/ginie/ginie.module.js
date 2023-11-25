"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiniesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ginie_service_1 = require("./ginie.service");
const ginie_controller_1 = require("./ginie.controller");
const ginie_entity_1 = require("./entities/ginie.entity");
let GiniesModule = class GiniesModule {
};
exports.GiniesModule = GiniesModule;
exports.GiniesModule = GiniesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ginie_entity_1.GiniesEntity])],
        controllers: [ginie_controller_1.GiniesController],
        providers: [ginie_service_1.GiniesService],
    })
], GiniesModule);
//# sourceMappingURL=ginie.module.js.map