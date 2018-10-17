import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.dir(changes);
  }

  ngOnInit() {
    console.log("init")
  }

}
