import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit{

http=inject(HttpClient);

masterService=inject(Master)

// constructor(private master:Master){}


userObj:any={
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
};

userList:any[] = [];

ngOnInit(){
  this.getUsers();
  
const sum=this.masterService.getSum(15,25);

console.log(sum);

}


getUsers(){ 
this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res:any)=>{
  this.userList=res;
});}

onSaveUser(){
  if(this.userObj.userId==0){
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.userObj).subscribe({
      next:(res:any)=>{
      alert("User added successfully");
      this.getUsers();
    },
    error:(err:any)=>{
      alert("Error"+err.message);
    }  
  }
    ); 
  }

}

onUpdateUser(){

  // this.userObj.createdDate=new Date();
  this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id="+this.userObj.userId,this.userObj).subscribe({
    next:(res:any)=>{
    alert("User updated successfully");
    this.getUsers();
  },
  error:(err:any)=>{
    alert("Error"+err.message);
  }});
}

onDelete(id:number){
  const isConfirmed=confirm("Are you sure to delete this user?");
  if(isConfirmed){
    this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id="+id).subscribe({
      next:(res:any)=>{
      alert("User deleted successfully");
      this.getUsers();
    },
    error:(err:any)=>{
      alert("Error"+err.message);
    }});
}
}

onReset(){
  this.userObj ={
  "userId": 1,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
};

}

onEdit(item:any){
  this.userObj=item;  
}

}