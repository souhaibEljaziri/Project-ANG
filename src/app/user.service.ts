import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user) {
    localStorage.setItem(user.email, JSON.stringify(user));
  }
  authUser(user) {
    //  if(this.Users[user.email] && this.Users[user.email].password == user.password) {
      //  console.log("working")
        return true;
      //}
    }
}
