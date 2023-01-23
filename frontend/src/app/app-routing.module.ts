import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOrderComponent } from './admin/all-order/all-order.component';
import { CustomerViewComponent } from './admin/customer-view/customer-view.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { CartPageComponent } from './user/cart-page/cart-page.component';
import { HomePageComponent } from './user/home-page/home-page.component';
import { OrderPageComponent } from './user/order-page/order-page.component';
import { ProDescriptionComponent } from './user/pro-description/pro-description.component';
import { ProductsComponent } from './user/products/products.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userHome', component: HomePageComponent },
  { path: 'adminHome', component: HomeAdminComponent },
  { path: 'showUser', component: CustomerViewComponent },
  { path: 'adminProducts', component: ProductListComponent },
  { path: 'userProducts', component: ProductsComponent },
  { path: 'cartPage', component: CartPageComponent },
  { path: 'orderPage', component: OrderPageComponent },
  { path: 'AdminOrderList', component: AllOrderComponent },
  {path:"descrptionPage/:id",component:ProDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
