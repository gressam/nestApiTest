import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    showAll(): Promise<({
        id: number;
        created: Date;
        username: string;
        token: string;
        role: string;
    } | {
        id: number;
        created: Date;
        username: string;
        role: string;
        token?: undefined;
    })[]>;
    login(data: UserDTO): Promise<{
        id: number;
        created: Date;
        username: string;
        token: string;
        role: string;
    } | {
        id: number;
        created: Date;
        username: string;
        role: string;
        token?: undefined;
    }>;
    register(data: UserDTO): Promise<{
        id: number;
        created: Date;
        username: string;
        token: string;
        role: string;
    } | {
        id: number;
        created: Date;
        username: string;
        role: string;
        token?: undefined;
    }>;
    delete(id: number): Promise<UserEntity>;
    getUserById(id: number): Promise<UserEntity>;
    getUserRoleByUsername(username: string): Promise<import("../userrole/userrole.entity").UserroleEntity>;
}
