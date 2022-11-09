export interface Transaction{
    id:number;
    linkedTo:Object;
    from:Object;
    to:Object;
    description:string;
    amount:number;
    date_of_trans:string;
}