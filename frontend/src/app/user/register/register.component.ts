import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  loginForm = this.fb.group({
    userEmail: ['', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required]],
  });

  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    userEmail: ['', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required,Validators.minLength(4)]],
  });

  userEmail:any

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private ser: ServiceService
  ) {}

  ngOnInit(): void {}

  Login() {
    var Email = this.loginForm.value.userEmail;
    var Password = this.loginForm.value.password;
    if (this.loginForm.valid) {
      this.ser.login(Email, Password).subscribe(
        (data: any) => {
          if (data) {
            console.log('addada', data);
             localStorage.setItem("userEmail",data.existUser.userEmail)
            if (data.existUser.role == 'user') {
              this.router.navigateByUrl('/userHome');
              console.log('role', data.existUser.role);
            } else if (data.existUser.role == 'admin') {
              this.router.navigateByUrl('adminHome');
            }

            alert(data.message);
          } else {
            alert('error password');
          }
        },
        (data) => {
          alert(data.error.message);
        }
      );
    } else {
      alert('Not Valid');
    }
  }

  register() {
    var Name = this.registerForm.value.name;
    var Email = this.registerForm.value.userEmail;
    var Password = this.registerForm.value.password;
    if (this.registerForm.valid) {
      this.ser.register(Name, Email, Password).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);

            this.router.navigateByUrl('/register');
          }
        },
        (result) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('please fill all the fields');
    }
    // this.router.navigateByUrl('/register');
  }
}
