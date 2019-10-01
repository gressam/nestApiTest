import { UserroleEntity } from '../userrole/userrole.entity';
export declare class UserEntity {
    id: number;
    created: Date;
    username: string;
    password: string;
    userRoleId: number;
    userRole: UserroleEntity;
    hashPassword(): Promise<void>;
    toResponseObject(showToken?: boolean): {
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
    };
    comparePassword(attempt: string): Promise<boolean>;
    private readonly token;
}
