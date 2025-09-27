import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient){

  }
baseUrl:string=environment.apiUrl;
  public registerUser(user:any){
    return  this.http.post(`${this.baseUrl}/user/register`,user);
  }

  
  public loginUser(login:any){
    return  this.http.post(`${this.baseUrl}/user/login`,login);
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
