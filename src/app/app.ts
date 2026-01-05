import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Master } from './services/master';
// import { DataBinding } from "./components/data-binding/data-binding";
// import { SignalEx } from './components/signal-ex/signal-ex';
// import { ControlFlow } from './components/control-flow/control-flow';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20Tutorial');


  //   loggedUserName:string='';

  //     constructor(private masterService:Master){

  //       this.readLogged();
  //       this.masterService.onLogin.subscribe((res =>{
  //         this.readLogged();
  //       }))

  //     }


  //     readLogged()
  // {
  //       const localData=localStorage.getItem("Angular20");

  //       if(localData!=null){
  //         this.loggedUserName=localData;
  //       }
  // }

  // onLogOut(){
  //   localStorage.removeItem("Angular20");
  //   // this.readLogged();
  //   this.loggedUserName='';
  //   // this.masterService.onLogin.next(false);
  //   window.confirm("Are you sure to logout?");
  // }
}
