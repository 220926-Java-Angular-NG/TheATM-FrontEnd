export interface User{
    id:number;
    email:string;
    firstname:string;
    lastname:string;
    pass_word:string;
    phoneNum:string;
    reset_password_token?:string;
    
}