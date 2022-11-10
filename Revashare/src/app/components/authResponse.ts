import { User } from "./user";

export interface AuthReponse{
    user:User;
    token: string;
}