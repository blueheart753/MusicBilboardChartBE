import { VibesService } from './vibe.service';
import { VibesEntity } from './entities/vibe.entity';
export declare class VibesController {
    private vibesService;
    constructor(vibesService: VibesService);
    create(vibe: VibesEntity): Promise<VibesEntity>;
    findAll(): Promise<VibesEntity[]>;
    update(id: string, vibe: VibesEntity): Promise<number>;
    remove(id: string): Promise<number>;
}
