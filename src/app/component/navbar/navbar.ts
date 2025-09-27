import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from '../../login-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{
   
  ngOnInit(): void {
    this.login_Service.logout();
  }

  constructor(private login_Service:LoginService){

  }
}
