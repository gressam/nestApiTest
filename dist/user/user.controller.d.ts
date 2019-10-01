import { UserService } from './user.service';
import { UserDTO } from './user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    showAllUsers(): Promise<({
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
    delete(id: number): void;
}
