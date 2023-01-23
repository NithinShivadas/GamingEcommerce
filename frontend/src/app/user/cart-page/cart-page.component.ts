import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/service/service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  prdData:any 
  datas: any;
  getProd: any;
  Cartdata:any
  delData: any;
  orderData:any
  userEmail:any

  

  constructor(private servs:ServiceService,private router:Router) { }

  ngOnInit(): void {
     this.getCart()
    this.userEmail = localStorage.getItem('userEmail');

  }
//----------------Get All Products--------------------------
  getCart() {
    this.servs.getCartData().subscribe((data) => {
      console.log('data', data);
      if (data) {
        this.datas = data;
        this.getProd = this.datas.cart;
        this.prdData = this.getProd;
        this.Cartdata=this.prdData
        console.log('GetData', this.prdData); 

        this.router.navigateByUrl('/cartPage');
      }
    });
  }

  //-------------------Remove Cart Item----------------------
  removeProduct(id: any) {
    if (confirm('Are you sure you want to remove item from cart'))
      this.servs.removeCart(id).subscribe((data) => {
        console.log('data', data);
        if (data) {
          this.delData = data;
          this.getProd = this.delData.users;
          console.log('datasss', this.getProd);
        }
        this.getCart();
      });
  }


  //------------------Order Product-----------------------

addToOrder(item:any){
  this.orderData=item
  this.orderData['userMail']=this.userEmail
    .log("data",this.orderData)
  this.servs.OderProduct(this.orderData).subscribe((data:any)=>{
    if(data){
      console.log("Add to Cart",data)

    }
    alert(" Your Order is placed Shortly")
    this.router.navigateByUrl('/cartPage');
     
  })
}

  //---------------------------------
  logout(){
    this.router.navigateByUrl('register')
  }



}
