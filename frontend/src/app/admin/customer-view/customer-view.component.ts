import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/service/service.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css'],
})
export class CustomerViewComponent implements OnInit {
  user: any;
  newdata: any;

  constructor(private router: Router, private servs: ServiceService) {}

  ngOnInit(): void {
    this.getUserData();
  }

  //-------------------Get User Data--------------
  getUserData() {
    this.servs.getUserData().subscribe((data) => {
      console.log('data', data);
      if (data) {
        this.user = data;
        this.newdata = this.user.users;
        console.log('datasss', this.newdata);
      }

      // this.router.navigateByUrl('/eventPage');
    });
  }

  //-----------------Remove User Data-----------------------
  removeUserData(id: any) {
    if (confirm('Are you sure you want to remove this user'))
      this.servs.removeUser(id).subscribe((data) => {
        console.log('data', data);
        if (data) {
          this.user = data;
          this.newdata = this.user.users;
          console.log('datasss', this.newdata);
        }

        this.getUserData();
      });
  }

  logout() {
    this.router.navigateByUrl('register');
  }
}
