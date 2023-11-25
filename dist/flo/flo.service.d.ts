import { Repository } from 'typeorm';
import { FlosEntity } from './entities/flo.entity';
export declare class FlosService {
    private flosRepository;
    constructor(flosRepository: Repository<FlosEntity>);
    create(apple: FlosEntity): Promise<FlosEntity>;
    findAll(): Promise<FlosEntity[]>;
    update(id: number, apple: FlosEntity): Promise<number>;
    remove(id: number): Promise<number>;
}
