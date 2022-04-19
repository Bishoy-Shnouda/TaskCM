import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './Components/address/address.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { EditCustomerComponent } from './Components/edit-customer/edit-customer.component';
import { NewCustomerComponent } from './Components/new-customer/new-customer.component';

const routes: Routes = [
  {path:'', redirectTo:'/customer', pathMatch:'full'},
  { path: 'customer', component: CustomerComponent },
  { path: 'newcustomer', component: NewCustomerComponent },
  { path: 'editcustomer/:cID', component: EditCustomerComponent },
  { path: 'address/:cID', component: AddressComponent }, //parametarized path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
