import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      name: "Harry Potter",
      age: 13,
      address: "Griffin Dor",
      tel: "0812345678"
    },
    {
      name: "Gran Draff",
      age: 70,
      address: "Shine",
      tel: "0987654321"
    },
    {
      name: "Pooh",
      age: 6,
      address: "100th Aker",
      tel: "0817263549"
    }
  ];

  constructor() { }
}
