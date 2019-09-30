import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    showAll(): Promise<({
        id: string;
        created: Date;
        username: string;
        token: string;
    } | {
        id: string;
        created: Date;
        username: string;
        token?: undefined;
    })[]>;
    login(data: UserDTO): Promise<{
        id: string;
        created: Date;
        username: string;
        token: string;
    } | {
        id: string;
        created: Date;
        username: string;
        token?: undefined;
    }>;
    register(data: UserDTO): Promise<{
        id: string;
        created: Date;
        username: string;
        token: string;
    } | {
        id: string;
        created: Date;
        username: string;
        token?: undefined;
    }>;
}
