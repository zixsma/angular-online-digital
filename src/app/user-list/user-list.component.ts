import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Output('userClick') userClickEvent = new EventEmitter();
  users: Observable<User[]>;

  constructor(userService: UserService) {
    this.users = userService.getUsers();
  }

  ngOnInit() {
  }

  clickUser(user) {
  }

}
