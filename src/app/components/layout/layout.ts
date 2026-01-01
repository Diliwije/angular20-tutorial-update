import { Component, inject } from '@angular/core';
import { Master } from '../../services/master';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

  router=inject(Router);

  loggedUserName:string='';

    constructor(private masterService:Master){

      this.readLogged();
      this.masterService.onLogin.subscribe((res =>{
        this.readLogged();
      }))
      
    }


    readLogged()
{
      const localData=localStorage.getItem("Angular20");

      if(localData!=null){
        this.loggedUserName=localData;
      }
}

onLogOut(){
  localStorage.removeItem("Angular20");
  // this.readLogged();
  this.loggedUserName='';
  // this.masterService.onLogin.next(false);
  window.confirm("Are you sure to logout?");
  this.router.navigateByUrl('/')
}
}
