import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateServiceService {

  constructor(private router:Router) { }


  authenticate(email: string, password: string) : boolean {
     const user = JSON.parse(localStorage.getItem(email));

     // if user exist verify password
     if(user) return user.password == password;
     
     return false ;
  }

  logout(emailkey) {
    localStorage.removeItem(emailkey);
  }

  getUser(emailkey) {
    return localStorage.getItem(emailkey);
  }
  redirectHome()
  {
     this.router.navigate(['/']);
  }
  redirectLogin()
  {
     this.router.navigate(['/login']);
  }
  redirectSignup()
  {
     this.router.navigate(['/signup']);
  }
/*
  get onSignin(): EventEmitter<boolean> {
    return false ;
  }

  get onLogout(): EventEmitter<boolean>{
    return false;
  }

*/
}
