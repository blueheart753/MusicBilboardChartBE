import { YoutubesService } from './youtube.service';
import { YoutubesEntity } from './entities/youtube.entity';
export declare class YoutubesController {
    private youtubesService;
    constructor(youtubesService: YoutubesService);
    create(youtube: YoutubesEntity): Promise<YoutubesEntity>;
    findAll(): Promise<YoutubesEntity[]>;
    update(id: string, youtube: YoutubesEntity): Promise<number>;
    remove(id: string): Promise<number>;
}
