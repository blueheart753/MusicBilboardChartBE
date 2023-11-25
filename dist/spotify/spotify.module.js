"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotifysModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const spotify_service_1 = require("./spotify.service");
const spotify_controller_1 = require("./spotify.controller");
const spotify_entity_1 = require("./entities/spotify.entity");
let SpotifysModule = class SpotifysModule {
};
exports.SpotifysModule = SpotifysModule;
exports.SpotifysModule = SpotifysModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([spotify_entity_1.SpotifysEntity])],
        controllers: [spotify_controller_1.SpotifysController],
        providers: [spotify_service_1.SpotifysService],
    })
], SpotifysModule);
//# sourceMappingURL=spotify.module.js.map