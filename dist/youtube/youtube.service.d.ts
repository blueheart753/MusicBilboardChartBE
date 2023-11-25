import { Repository } from 'typeorm';
import { YoutubesEntity } from './entities/youtube.entity';
export declare class YoutubesService {
    private youtubesRepository;
    constructor(youtubesRepository: Repository<YoutubesEntity>);
    create(youtube: YoutubesEntity): Promise<YoutubesEntity>;
    findAll(): Promise<YoutubesEntity[]>;
    update(id: number, youtube: YoutubesEntity): Promise<number>;
    remove(id: number): Promise<number>;
}
