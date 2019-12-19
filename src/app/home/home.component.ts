import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private Userlist:any;
  private keys;
  constructor() {
      
      let values = [];
      this.keys  = Object.keys(localStorage)
      for (let key of this.keys) {
      values.push(localStorage.getItem(key));

      this.Userlist = JSON.stringify(values);
    
  }
   }

  ngOnInit() {
   
  }

}
