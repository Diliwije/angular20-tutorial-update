import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {

isParaVisible :boolean= true;

startMonthName :string= "January";

cityList :string[] = ["New York", "London", "Mumbai", "Delhi", "Tokyo"];


studentList :any[] = [
  {name: "John", age: 18, course: "Angular" ,isActive:true},
  {name: "Smith", age: 20, course: "React" ,isActive:false},
  {name: "Kathy", age: 17, course: "Vue" ,isActive:true},
  {name: "David", age: 21, course: "NodeJS" ,isActive:false},
  {name: "Jennifer", age: 19, course: "JavaScript" ,isActive:true}
];


showP() {
  this.isParaVisible = true; 
}

hideP() {
  this.isParaVisible = false;   
}

}
