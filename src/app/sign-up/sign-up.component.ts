import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private user = {
    email: "",
  lastname: "",
  name: "",
  password: ""
 };

  constructor(private router: Router, private userserive : UserService) { }

  ngOnInit() {
  }

  onSubmit(f : NgForm ) {
    this.user.email = f.value["email"];
    this.user.lastname = f.value["lastname"];
    this.user.name = f.value["name"];
    this.user.password = f.value["password"];

  this.userserive.addUser(this.user);
    // redirect user to home 
    this.router.navigate(['login']);

  }




}
