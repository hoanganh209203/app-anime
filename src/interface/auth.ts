export interface User{
    _id?: string;
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
    role?: string;
}