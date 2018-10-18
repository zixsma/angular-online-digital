import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get("http://localhost:5400/user") as
      Observable<User[]>;
  }

  updateUser(user: User): Observable<User> {
    return this.http.post(
      `http://localhost:5400/user/${user.id}`,
      user) as
      Observable<User>
  }

}
