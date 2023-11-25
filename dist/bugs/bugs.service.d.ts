import { Repository } from 'typeorm';
import { BugssEntity } from './entities/bugs.entity';
export declare class BugssService {
    private bugssRepository;
    constructor(bugssRepository: Repository<BugssEntity>);
    create(bugs: BugssEntity): Promise<BugssEntity>;
    findAll(): Promise<BugssEntity[]>;
    update(id: number, bugs: BugssEntity): Promise<number>;
    remove(id: number): Promise<number>;
}
