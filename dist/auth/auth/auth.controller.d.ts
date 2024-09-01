import { AuthService } from './auth.service';
import { SignUpDto, LoginDto } from '../AuthDto/auth.dto';
export declare class AuthController {
    private readonly _authService;
    constructor(_authService: AuthService);
    signUp(signUpDto: SignUpDto): {
        message: string;
        user: {
            id: number;
            username: string;
            password: string;
        };
    };
    login(loginDto: LoginDto): {
        message: string;
        user: {
            username: string;
            password: string;
            id: number;
        };
    };
}
