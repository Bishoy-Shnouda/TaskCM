import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CustomerService } from 'src/app/Services/customer.service';
import { Icustomer } from 'src/app/ViewModels/icustomer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.sass'],
})
export class EditCustomerComponent implements OnInit {
  editCst!: Icustomer;
  sentCustID!: number;

  constructor(
    private service: CustomerService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param) => {
      this.sentCustID = Number(param.get("cID"));
      this.service.getCustomer(this.sentCustID).subscribe((res) => {
        this.editCst = res.data;
      });
    });
  }

  editCustomer(id:number) {
    this.service.editCustomer(this.editCst).subscribe(res=>
      {
        if(res)
        {
          this.router.navigateByUrl('/customer');
        }
      });
  }
}
