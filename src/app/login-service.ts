import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient){

  }

  public registerUser(user:any){
    return  this.http.post(`http://localhost:1111/user/register`,user);
  }

  
  public loginUser(login:any){
    return  this.http.post(`http://localhost:1111/user/login`,login);
  }

    //set a UserDetails
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }




  public getuser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
  
      return null;
    }
  }

   public logout() {
    localStorage.clear();
  
    localStorage.removeItem('user');
    return true;
  }


}
