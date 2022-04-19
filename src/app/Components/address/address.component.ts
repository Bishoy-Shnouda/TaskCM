import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';
import { IAddress } from 'src/app/ViewModels/i-address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.sass']
})
export class AddressComponent implements OnInit {

  sentCustID:number=0;
  address:IAddress[]=[];

  constructor(private activatedRouter:ActivatedRoute , private service:CustomerService) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params=>
      {
        this.sentCustID=Number(params.get("cID"));
        this.service.getAddress(this.sentCustID).subscribe(res=>
          {
            this.address = res.data;
          });
      })
  }

}
