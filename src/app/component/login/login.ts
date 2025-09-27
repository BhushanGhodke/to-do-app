import { Component } from '@angular/core';
import { FormsModule, FormSubmittedEvent } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login-service';
import { NgIf } from '@angular/common';
import { LoginReq, User } from '../../Registration';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  req:LoginReq= new LoginReq();
   user:User= new User();

  msg: string = '';
  constructor(private login_service: LoginService, private router: Router) {

  }



  ngOnInit(): void {

  }

  loginSubmit() {
    this.login_service.loginUser(this.req).subscribe(

      (response: any) => {
        console.log(response);
        if(response!=null){
          this.msg="Login Success";
          this.login_service.setUser(response);
          setTimeout(() => {
            this.msg='';

          this.router.navigate(['dashboard'])      
          }, 2000);
      
        }

      },
      (error) => {
        console.log(error);
        this.msg=error.error.message;

        setTimeout(() => {
             this.req.username='';
             this.req.password=''
             this.msg='';
        }, 2000);

      }
    )
  }



}
