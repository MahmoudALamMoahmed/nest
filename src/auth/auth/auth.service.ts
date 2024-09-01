import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  users = [
    {
      username: 'Mostafa',
      password:"pass 1" ,
      id: 1,
    },
    {
      username: 'Mohamed',
      password:"pass 2" ,
      id: 2,
    },
    {
      username: 'Ahmed',
      password:"pass 3" ,
      id: 3,
    },
    
  ];
    constructor() { }
    
    signUp(username: string, password: string) {
        const userExists = this.users.find((user) => user.username === username);
        if (userExists) {
            throw new Error("the user exists before")
        }
            const newUser = {
      id: this.users.length + 1,
      username,
      password,
    };
    this.users.push(newUser);
    return { message: 'you are registered successfully', user: newUser };
    }
    
  login(username: string, password: string) {
    const user = this.users.find(
      (user) => user.username === username && user.password === password,
    );
    if (!user) {
      throw new Error('Invalid username or password');
    }
    return { message: 'you are Login successfully', user };
  }
    }
