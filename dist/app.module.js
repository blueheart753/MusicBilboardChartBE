"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const melon_entity_1 = require("./melon/entities/melon.entity");
const melon_module_1 = require("./melon/melon.module");
const vibe_entity_1 = require("./vibe/entities/vibe.entity");
const vibe_module_1 = require("./vibe/vibe.module");
const apple_entity_1 = require("./appleMusic/entities/apple.entity");
const apple_module_1 = require("./appleMusic/apple.module");
const flo_entity_1 = require("./flo/entities/flo.entity");
const flo_module_1 = require("./flo/flo.module");
const spotify_entity_1 = require("./spotify/entities/spotify.entity");
const spotify_module_1 = require("./spotify/spotify.module");
const ginie_entity_1 = require("./ginie/entities/ginie.entity");
const ginie_module_1 = require("./ginie/ginie.module");
const bugs_entity_1 = require("./bugs/entities/bugs.entity");
const bugs_module_1 = require("./bugs/bugs.module");
const youtube_entity_1 = require("./youtube/entities/youtube.entity");
const youtube_module_1 = require("./youtube/youtube.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '1234',
                database: 'testDB',
                entities: [
                    melon_entity_1.MelonsEntity,
                    vibe_entity_1.VibesEntity,
                    apple_entity_1.ApplesEntity,
                    flo_entity_1.FlosEntity,
                    spotify_entity_1.SpotifysEntity,
                    ginie_entity_1.GiniesEntity,
                    bugs_entity_1.BugssEntity,
                    youtube_entity_1.YoutubesEntity,
                ],
                synchronize: true,
            }),
            melon_module_1.MelonsModule,
            vibe_module_1.VibesModule,
            apple_module_1.ApplesModule,
            flo_module_1.FlosModule,
            spotify_module_1.SpotifysModule,
            ginie_module_1.GiniesModule,
            bugs_module_1.BugssModule,
            youtube_module_1.YoutubesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map