import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../services/user';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {


  userService = inject(User)
  courseName: string = "Angular";

  productprice: number = 1000;

  userid: number = 0;

  maxLength: number = 10;

  minLength: number = 5;

  myClassName: string = "mycolor";

  color: string = "red";

  constructor() {
    this.userService.roleBehaviour$.subscribe((res: any) => {
      console.log(res);
    })
    this.userService.roleSub$.subscribe((res: any) => {
      console.log(res);
    })

  }

  getUser() {
    this.userService.getUserById(this.userid).subscribe((res: any) => {
      console.log(res);
    })
  }

  onClick() {
    alert("Button Clicked");
  }

  changeCourseName() {

    if (this.courseName == "React")
      this.courseName = "Angular";
    else
      this.courseName = "React";
  }






}
