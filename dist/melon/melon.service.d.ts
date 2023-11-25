import { Repository } from 'typeorm';
import { MelonsEntity } from './entities/melon.entity';
export declare class MelonsService {
    private melonsRepository;
    constructor(melonsRepository: Repository<MelonsEntity>);
    create(melon: MelonsEntity): Promise<MelonsEntity>;
    findAll(): Promise<MelonsEntity[]>;
    update(id: number, melon: MelonsEntity): Promise<number>;
    remove(id: number): Promise<number>;
}
