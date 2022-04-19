import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';
import { Icustomer } from 'src/app/ViewModels/icustomer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent implements OnInit {
  
  customers:Icustomer[]=[];

  constructor(private service:CustomerService , private router:Router){}

  ngOnInit(){
    
    this.service.getAllCustomers().subscribe(res=>
      {
        this.customers = res.data;
      });
  }

  getAddress(cid:number){
    this.router.navigate(["/address",cid])
  }

  deleteCst(id:number){
    this.service.deletecustomer(id).subscribe(res=>
      {
        if(res)
        {
          this.ngOnInit();
        }
      }); 
  }

  Edit(id:number)
  {
    this.router.navigate(["/editcustomer",id])
  }
}
