import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/service/service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  datas: any;
  getProd: any;

  delData: any;

  constructor(private router: Router, private servs: ServiceService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  //----------------Get All Datas---------------

  getProducts() {
    this.servs.getProductData().subscribe((data) => {
      console.log('data', data);
      if (data) {
        this.datas = data;
        this.getProd = this.datas.products;
        console.log('datasss', this.getProd);

        this.router.navigateByUrl('/adminProducts');
      }
    });
  }

  //----------------Remove Product------------------
  removeProduct(id: any) {
    if (confirm('Are you sure you want to remove this item'))
      this.servs.removeProduct(id).subscribe((data) => {
        console.log('data', data);
        if (data) {
          this.delData = data;
          this.getProd = this.delData.users;
          console.log('datasss', this.getProd);
        }
        this.getProducts();
      });
  }

  //-------------------------------------------------

  logout() {
    this.router.navigateByUrl('register');
  }
}
