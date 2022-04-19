import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';
import { Icustomer } from 'src/app/ViewModels/icustomer';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.sass'],
})
export class NewCustomerComponent implements OnInit {
  newCst!: Icustomer;

  constructor(private service: CustomerService ,private router: Router) {
    this.newCst = {
      id: 0,
      cust_FName: '',
      cust_LName: '',
      cust_Gender: '',
      cust_Email: '',
    };
  }

  ngOnInit(): void {}

  addCustomer() {
    this.service.newCustomer(this.newCst).subscribe((res) => {
      res.data = this.newCst;
      alert("success");
      this.router.navigateByUrl('/customer');
    });
  }
}
