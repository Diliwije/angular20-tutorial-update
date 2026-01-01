import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetApi implements OnInit {

  http=inject(HttpClient);

  userDetails:any[]=[];

  ngOnInit(): void {

    this.getUser();
    
  }

  getUser(){ 
    
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
        this.userDetails=res;
    });
  }


}
