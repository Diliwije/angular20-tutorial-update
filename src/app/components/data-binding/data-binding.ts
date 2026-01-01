import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {

  courseName: string = "Angular";

  productprice: number = 1000;

    maxLength: number = 10;

  minLength: number = 5;

  myClassName: string = "mycolor";

  color: string = "red";

  constructor() { }

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
