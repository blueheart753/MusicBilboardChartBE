import { GiniesService } from './ginie.service';
import { GiniesEntity } from './entities/ginie.entity';
export declare class GiniesController {
    private giniesService;
    constructor(giniesService: GiniesService);
    create(ginie: GiniesEntity): Promise<GiniesEntity>;
    findAll(): Promise<GiniesEntity[]>;
    update(id: string, ginie: GiniesEntity): Promise<number>;
    remove(id: string): Promise<number>;
}
