export interface Account{
    id:number;
    type:string;
    owner:{id:number};
    totalValue?:number;
}