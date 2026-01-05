import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sub-beh-replay',
  imports: [],
  templateUrl: './sub-beh-replay.html',
  styleUrl: './sub-beh-replay.css'
})
export class SubBehReplay implements OnInit {

  student$ = new Subject();

  rollNo$ = new Subject<number>();

  takeTill = new Subject<void>();

  //cant intialize the value in subject 
  // coursename=new Subject<any>("ABC");


  constructor() {
    setTimeout(() => {
      this.student$.next("Student 1");
      this.rollNo$.next(10);
      this.takeTill.next();
    }, 4000)
  }
  ngOnInit(): void {

    this.student$.subscribe((res: any) => {
      console.log(res);
    })
    this.rollNo$.subscribe((res: any) => {
      console.log(res);
    })
  }



}
