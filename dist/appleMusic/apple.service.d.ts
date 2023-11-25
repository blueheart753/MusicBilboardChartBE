import { Repository } from 'typeorm';
import { ApplesEntity } from './entities/apple.entity';
export declare class ApplesService {
    private applesRepository;
    constructor(applesRepository: Repository<ApplesEntity>);
    create(apple: ApplesEntity): Promise<ApplesEntity>;
    findAll(): Promise<ApplesEntity[]>;
    update(id: number, apple: ApplesEntity): Promise<number>;
    remove(id: number): Promise<number>;
}
