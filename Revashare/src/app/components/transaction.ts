export interface Transaction{
    id:number;
    linkedTo:{id:number};
    from:{id:number};
    to:{id:number};
    description:string;
    amount:number;
    date_of_trans:string;
}