import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class User {

  courseDuration$ = new BehaviorSubject<string>("This is behavourSubject 10 Month");

  roleBehaviour$ = new BehaviorSubject<string>("");

  roleSub$ = new Subject<string>();

  private userDetails = new Map<number, Observable<any>>();


  constructor(private http: HttpClient) { }


  getUserById(id: number): any | undefined {

    if (!this.userDetails.has(id)) {
      const userData = this.http.get("https://jsonplaceholder.typicode.com/users/" + id).pipe(
        shareReplay(3)
      );
      this.userDetails.set(id, userData);
    }

    return this.userDetails.get(id);


  }




}
