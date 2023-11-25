import { ApplesService } from './apple.service';
import { ApplesEntity } from './entities/apple.entity';
export declare class ApplesController {
    private applesService;
    constructor(applesService: ApplesService);
    create(apple: ApplesEntity): Promise<ApplesEntity>;
    findAll(): Promise<ApplesEntity[]>;
    update(id: string, apple: ApplesEntity): Promise<number>;
    remove(id: string): Promise<number>;
}
