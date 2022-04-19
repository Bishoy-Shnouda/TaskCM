import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icustomer } from '../ViewModels/icustomer';
import { ResultViewModel } from '../ViewModels/result-view-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getAllCustomers(): Observable<ResultViewModel> {
    return this.http.get<ResultViewModel>(`${environment.API_URL}Customer/GeTAll`)
  }

  getCustomer(id:number) :Observable<ResultViewModel>
  {
    return this.http.get<ResultViewModel>(`${environment.API_URL}Customer/GetByID/${id}`);
  }

  // get address by cust id
  getAddress(id:number) :Observable<ResultViewModel>
  {
    return this.http.get<ResultViewModel>(`${environment.API_URL}Address/GetAddressByCustID/${id}`);
  }

  newCustomer(cst:any) :Observable<ResultViewModel>
  {
   
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

    return this.http.post<ResultViewModel>(`${environment.API_URL}Customer/AddCustomer`,JSON.stringify(cst),httpOptions);
  }

  editCustomer(cst:Icustomer) :Observable<ResultViewModel>
  {
   
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

    return this.http.put<ResultViewModel>(`${environment.API_URL}Customer/UpdateCustomer`,JSON.stringify(cst),httpOptions);
  }

  deletecustomer(ID:number):Observable<ResultViewModel>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

    return this.http.get<ResultViewModel>(`${environment.API_URL}Customer/Delete/${ID}`,httpOptions);
  }
}


