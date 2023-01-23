import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/service/service.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css'],
})
export class OrderPageComponent implements OnInit {

  prdData:any 
  datas: any;
  getProd: any;
  orderData:any
  delData: any;


  constructor(private servs: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.showOrder()
  }
   //-----------showOrder--------------------
  showOrder() {
    this.servs.getOrderData().subscribe((data) => {
      console.log('data', data);
      if (data) {
        this.datas = data;
        this.getProd = this.datas.order;
        this.prdData = this.getProd;
        this.orderData=this.prdData
        console.log('GetData', this.prdData); 

        this.router.navigateByUrl('/orderPage');
      }
    });
  }

  //----------------------------Cancel order-------------

  CancelOrder(id: any) {
    if (confirm('Are you sure you want to cancel your product'))
      this.servs.cancelOrder(id).subscribe((data) => {
        console.log('data', data);
        if (data) {
          this.delData = data;
          this.getProd = this.delData.order;
          console.log('datasss', this.getProd);
        }
        this.showOrder();
      });
  }


  //------------------LogOut---------------------
  logout(){
    this.router.navigateByUrl('register')
  }
}
