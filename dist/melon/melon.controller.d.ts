import { MelonsService } from './melon.service';
import { MelonsEntity } from './entities/melon.entity';
export declare class MelonsController {
    private melonsService;
    constructor(melonsService: MelonsService);
    create(melon: MelonsEntity): Promise<MelonsEntity>;
    findAll(): Promise<MelonsEntity[]>;
    update(id: string, melon: MelonsEntity): Promise<number>;
    remove(id: string): Promise<number>;
}
