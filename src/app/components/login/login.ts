import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { Master } from '../../services/master';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  router = inject(Router)
  masterService = inject(Master)

  loginObj: any = {
    username: '',
    password: ''
  }

  onLogin() {
    if (this.loginObj.username == 'admin' && this.loginObj.password == '123') {
      this.router.navigate(['/admin'])
      window.alert("Login Successful");
      localStorage.setItem("Angular20", "Admin");
      this.masterService.onLogin.next(true);

    } else {
      window.alert("Invalid Credentials");
    }




  }
}