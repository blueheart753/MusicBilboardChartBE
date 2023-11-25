"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const youtube_service_1 = require("./youtube.service");
const youtube_controller_1 = require("./youtube.controller");
const youtube_entity_1 = require("./entities/youtube.entity");
let YoutubesModule = class YoutubesModule {
};
exports.YoutubesModule = YoutubesModule;
exports.YoutubesModule = YoutubesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([youtube_entity_1.YoutubesEntity])],
        controllers: [youtube_controller_1.YoutubesController],
        providers: [youtube_service_1.YoutubesService],
    })
], YoutubesModule);
//# sourceMappingURL=youtube.module.js.map