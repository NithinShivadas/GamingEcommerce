import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/service/service.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css'],
})
export class HomeAdminComponent implements OnInit {
  Addproducts = this.fb.group({
    productName: ['', [Validators.required]],
    imgLink: ['', [Validators.required]],
    description: ['', [Validators.required]],
    category: ['', [Validators.required]],
    price: ['', [Validators.required]],
  });


  userEmail:any

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private servce: ServiceService
  ) {}

  ngOnInit(): void {
    

  }

//-----------------Log Out----------------------------------
  logout() {
    this.router.navigateByUrl('register');

  }

  //------------------------Add Product-----------------------

  // AddProduct() {
  //   var Name = this.Addproducts.value.productName;
  //   var imgLink = this.Addproducts.value.imgLink;
  //   var Description = this.Addproducts.value.description;
  //   var Category = this.Addproducts.value.category;
  //   var Price = this.Addproducts.value.price;
    

  //   if (this.Addproducts.valid) {
  //     this.servce
  //       .addProduct(Name, imgLink, Description, Category, Price)
  //       .subscribe(
  //         (result: any) => {
  //           if (result) {
  //             alert(result.message);

  //             this.router.navigateByUrl('/ad-Home');
  //             this.Addproducts.reset()
  //           }
  //         },
  //         (result) => {
  //           alert(result.error.message);
  //         }
  //       );
  //   } else {
  //     alert('please fill all the fields');
  //   }
  // }

  //-------------------------------------------------------
}
