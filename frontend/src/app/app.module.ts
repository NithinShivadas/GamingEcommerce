import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './user/home-page/home-page.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { CustomerViewComponent } from './admin/customer-view/customer-view.component';
import { ProductsComponent } from './user/products/products.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { CartPageComponent } from './user/cart-page/cart-page.component';
import { OrderPageComponent } from './user/order-page/order-page.component';
import { AllOrderComponent } from './admin/all-order/all-order.component';
import { ProDescriptionComponent } from './user/pro-description/pro-description.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomePageComponent,
    HomeAdminComponent,
    CustomerViewComponent,
    ProductsComponent,
    ProductListComponent,
    CartPageComponent,
    OrderPageComponent,
    AllOrderComponent,
    ProDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
