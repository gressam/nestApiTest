export declare class UserEntity {
    id: string;
    created: Date;
    username: string;
    password: string;
    hashPassword(): Promise<void>;
    toResponseObject(showToken?: boolean): {
        id: string;
        created: Date;
        username: string;
        token: string;
    } | {
        id: string;
        created: Date;
        username: string;
        token?: undefined;
    };
    comparePassword(attempt: string): Promise<boolean>;
    private readonly token;
}
