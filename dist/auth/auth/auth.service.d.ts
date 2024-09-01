export declare class AuthService {
    users: {
        username: string;
        password: string;
        id: number;
    }[];
    constructor();
    signUp(username: string, password: string): {
        message: string;
        user: {
            id: number;
            username: string;
            password: string;
        };
    };
    login(username: string, password: string): {
        message: string;
        user: {
            username: string;
            password: string;
            id: number;
        };
    };
}
