import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/service/service.service';

@Component({
  selector: 'app-all-order',
  templateUrl: './all-order.component.html',
  styleUrls: ['./all-order.component.css']
})
export class AllOrderComponent implements OnInit {
  prdData:any 
  datas: any;
  getProd: any;
  orderData:any


  constructor(private router:Router,private servs:ServiceService) { }

  ngOnInit(): void {
    this.  showOrder()
  }

  showOrder() {
    this.servs.getOrderData().subscribe((data) => {
      console.log('data', data);
      if (data) {
        this.datas = data;
        this.getProd = this.datas.order;
        this.prdData = this.getProd;
        console.log("prdData",this.prdData)
        this.orderData=this.prdData
        console.log('GetData', this.orderData); 

        this.router.navigateByUrl('/AdminOrderList');
      }
    });
  }

  logout() {
    this.router.navigateByUrl('register');
  }
}
