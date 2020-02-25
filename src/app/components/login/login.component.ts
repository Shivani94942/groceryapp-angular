import { Component, OnInit } from '@angular/core';
//import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { FormGroup,FormControl,FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //public userForm= new FormGroup({
    //username:new FormControl(),
    //email:new FormControl(),
    //password:new FormControl(),
    //address:new FormGroup({
     //flat:new FormControl(),
     //city:new FormControl(),
      //state:new FormControl()
    //})
 // })
 //Validators.minLength(5),Validators.maxLength(15)
  constructor(private fb:FormBuilder) { }
  userForm=this.fb.group({
    username:[null,[Validators.required,Validators.pattern('^[a-z0-9_-]{8,15}$')]],
    email:[null,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,4}$')]],
    password:[null,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]]
  })
    //constructor(){}
  ngOnInit(): void {
    //this.createForm()
  }

  //createForm(){
   // this.userForm=this.fb.group({
     // 'email':[null,Validators.required],
    //  'password':[null,Validators.required]
   // })
  //}
loadData(){
  this.userForm.setValue({//or patchValue for not all values and setValue for paasing all values
    username:'william9_',
    email:'will@mail.com',
    password:'Williams',
   // address:{
     // flat:'flat1',
      //city:'city1',
      //state:'state1'
    //}
  })
}

 onSubmit(data){
  console.log(data);
  }

}
