import { Repository } from 'typeorm';
import { GiniesEntity } from './entities/ginie.entity';
export declare class GiniesService {
    private giniesRepository;
    constructor(giniesRepository: Repository<GiniesEntity>);
    create(ginie: GiniesEntity): Promise<GiniesEntity>;
    findAll(): Promise<GiniesEntity[]>;
    update(id: number, ginie: GiniesEntity): Promise<number>;
    remove(id: number): Promise<number>;
}
