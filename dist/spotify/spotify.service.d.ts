import { Repository } from 'typeorm';
import { SpotifysEntity } from './entities/spotify.entity';
export declare class SpotifysService {
    private spotifysRepository;
    constructor(spotifysRepository: Repository<SpotifysEntity>);
    create(spotify: SpotifysEntity): Promise<SpotifysEntity>;
    findAll(): Promise<SpotifysEntity[]>;
    update(id: number, spotify: SpotifysEntity): Promise<number>;
    remove(id: number): Promise<number>;
}
