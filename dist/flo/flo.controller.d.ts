import { FlosService } from './flo.service';
import { FlosEntity } from './entities/flo.entity';
export declare class FlosController {
    private flosService;
    constructor(flosService: FlosService);
    create(flo: FlosEntity): Promise<FlosEntity>;
    findAll(): Promise<FlosEntity[]>;
    update(id: string, flo: FlosEntity): Promise<number>;
    remove(id: string): Promise<number>;
}
