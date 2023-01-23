import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/service/service.service';

@Component({
  selector: 'app-pro-description',
  templateUrl: './pro-description.component.html',
  styleUrls: ['./pro-description.component.css'],
})
export class ProDescriptionComponent implements OnInit {
  product: any;
  Data: any;

  userEmail: any;

  prdData: any;
  datas: any;
  getProd: any;
  carts: any;
  order: any;
  orderData: any;

  constructor(
    private route: ActivatedRoute,
    private servs: ServiceService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.getProductDescrption(params['id'])
    );
    console.log('coming DAta', this.product);
    this.userEmail = localStorage.getItem('userEmail');
  }
  getProductDescrption(id: any) {
    this.servs.getProductDescription(id).subscribe((data: any) => {
      this.product = data;
      this.Data = this.product.products;
      console.log('newww', this.Data);
    });
    
  }
  //------------------Add to cart-------------------------
  addToCart(item: any) {
    this.carts = item;
    this.carts['userEmail'] = this.userEmail;
    console.log('cartData', this.carts);

    console.log('Cartsdata', this.carts);
    this.servs.AddToCart(this.carts).subscribe((data: any) => {
      if (data) {
        console.log('Add to Cart', data);
      }
      alert('item added To Cart ');
      this.router.navigateByUrl('/userHome');
    });
  }

  //------------------Add to order------------------------
  addToOrder(item: any) {
    this.orderData = item;
    this.orderData['userMail'] = this.userEmail;
    console.log('data', this.orderData);
    this.servs.OderProduct(this.orderData).subscribe((data: any) => {
      if (data) {
        console.log('Add to Cart', data);
      }
      alert(' Your Order is placed Shortly');
      this.router.navigateByUrl('/userHome');
    });
  }

  //----------------------log out-------------------------
  logout() {
    this.router.navigateByUrl('register');
  }
}
