import { SpotifysService } from './spotify.service';
import { SpotifysEntity } from './entities/spotify.entity';
export declare class SpotifysController {
    private spotifysService;
    constructor(spotifysService: SpotifysService);
    create(spotify: SpotifysEntity): Promise<SpotifysEntity>;
    findAll(): Promise<SpotifysEntity[]>;
    update(id: string, spotify: SpotifysEntity): Promise<number>;
    remove(id: string): Promise<number>;
}
