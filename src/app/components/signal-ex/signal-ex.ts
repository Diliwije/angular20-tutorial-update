import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {

  firstName :string = 'John';

  productName= 'Apple';

  courseName= signal<string>("Angular");

  courseDuration= signal('3 Months');

  courseDetails= computed(()=>this.courseName() + ' - ' + this.courseDuration());

  constructor() { 

    this.firstName='David';
    console.log(this.firstName);

    console.log(this.courseName());

   

    this.courseName.set("React");
    console.log(this.courseName());

     setTimeout(() => {
      this.courseName.set('Vue');
      // console.log(this.courseDuration());
    }, 3000);
    
    console.log(this.courseName());
    
    

  }

}
