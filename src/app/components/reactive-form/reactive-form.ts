import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm  implements OnInit{

  userList:any[] = [];
  http=inject(HttpClient);

  userForm:FormGroup=new FormGroup({
    userId:new FormControl(0),
    emailId:new FormControl("",Validators.required),
    password:new FormControl("",[Validators.minLength(6),Validators.required]),
    fullName:new FormControl(""),
    mobileNo:new FormControl("")
  });

  ngOnInit(){
    this.getUsers();
  }
  
getUsers(){ 
this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res:any)=>{
  this.userList=res;
});}

}
