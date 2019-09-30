import { UserService } from './user.service';
import { UserDTO } from './user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    showAllUsers(): Promise<({
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
