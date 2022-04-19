import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCustomerComponent } from './Components/new-customer/new-customer.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { AddressComponent } from './Components/address/address.component';
import { EditCustomerComponent } from './Components/edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCustomerComponent,
    CustomerComponent,
    AddressComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
