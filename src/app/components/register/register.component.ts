import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  public interest=["Bakery","Beverages","Vegetables","Fruits"];

  public userModel=new User('','','','','','',false);

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.userModel);
  }
}
