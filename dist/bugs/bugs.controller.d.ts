import { BugssService } from './bugs.service';
import { BugssEntity } from './entities/bugs.entity';
export declare class BugssController {
    private bugssService;
    constructor(bugssService: BugssService);
    create(bugs: BugssEntity): Promise<BugssEntity>;
    findAll(): Promise<BugssEntity[]>;
    update(id: string, bugs: BugssEntity): Promise<number>;
    remove(id: string): Promise<number>;
}
