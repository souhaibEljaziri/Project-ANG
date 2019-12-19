import { Component, OnInit } from '@angular/core';
import { AuthenticateServiceService } from '../authenticate-service.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private  user = {
    email : '',
    password : ''
  };
  constructor(private userservice:UserService,private userAuth:AuthenticateServiceService) { }

  ngOnInit() {
  }
  onSubmit(user) {
    this.user.email = user.value["email"];
    this.user.password = user.value["password"];
    if(this.userservice.authUser(user)) {
        localStorage.setItem("Curent", this.user.email);
    }

  }
}
