import { Component } from '@angular/core';
import { LoginService } from '../../login-service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { register } from '../../Registration';

@Component({
  selector: 'app-signup',
  imports: [NgIf,FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

user:register= new register();



msg:string='';
  constructor(private login_service:LoginService, private router:Router){

  }
 
  
  
  ngOnInit(): void {
  
  }

  formSubmit() {
     this.login_service.registerUser(this.user).subscribe(

      (response:any)=>{
        console.log(response);
        if(response!=null){
          this.router.navigate(['login'])
        }
        
      },
      (error)=>{
        console.log(error);
        this.msg=error.error.message
        setTimeout(() => {
           this.user.username='';
           this.user.password='';
           this.msg='';
        }, 2000);
        
        
      }
     )
}
}