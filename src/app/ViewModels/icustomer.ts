export interface Icustomer {
    id: number;
    cust_FName:string;
    cust_LName:string;
    cust_Gender:string;
    cust_DOB?:Date;
    cust_Email:string;
    addresses?:object;
}
