import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/service/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  
  userEmail: any;

  prdData: any;
  datas: any;
  getProd: any;
  carts: any;
  order: any;

  constructor(private servs: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('userEmail');
    this.getProducts();
  }

  //-----------------------------------------------------------
  getProducts() {
    this.servs.getProductData().subscribe((data) => {
      console.log('data', data);
      if (data) {
        this.datas = data;
        this.getProd = this.datas.products;
        this.prdData = this.getProd;
        console.log('affaf', this.prdData);

        this.router.navigateByUrl('/userProducts');
      }
    });
  }
  //----------------------------------------------------------------
  addToCart(item: any) {
    this.carts = item;
    this.carts['userEmail'] = this.userEmail;
    console.log('cartData', this.carts);

    console.log('data', this.carts);
    this.servs.AddToCart(this.carts).subscribe((data: any) => {
      if (data) {
        console.log('Add to Cart', data);
      }
      alert('item added To Cart ');
      this.router.navigateByUrl('/userProducts');
    });
  }

  //------------------Order Product-----------------------

  addToOrder(item: any) {
    this.order = item;
    this.order['userEmail']=this.userEmail
    console.log('data', this.order);
    this.servs.OderProduct(this.order).subscribe((data: any) => {
      if (data) {
        console.log('Add to Order', data);
      }
      alert(' Your Order is placed Shortly');
      this.router.navigateByUrl('/userProducts');
    });
  }

  //---------------------------------------------------------------

  logout() {
    this.router.navigateByUrl('register');
  }
}
