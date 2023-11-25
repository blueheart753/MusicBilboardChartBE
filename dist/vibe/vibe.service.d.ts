import { Repository } from 'typeorm';
import { VibesEntity } from './entities/vibe.entity';
export declare class VibesService {
    private vibesRepository;
    constructor(vibesRepository: Repository<VibesEntity>);
    create(vibe: VibesEntity): Promise<VibesEntity>;
    findAll(): Promise<VibesEntity[]>;
    update(id: number, vibe: VibesEntity): Promise<number>;
    remove(id: number): Promise<number>;
}
