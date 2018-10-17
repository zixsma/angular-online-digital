import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnChanges {

  @Input() user;

  constructor(userService: UserService,
    route: ActivatedRoute) {
      route.paramMap.pipe(
        filter(p => p.has("id") ),
        map(p => p.get("id")),
        map(p => parseInt(p))
      ).subscribe({
        next: (params) => {
          console.dir(params);
          this.user = userService.users[params];
        },
        error: (err) => { console.error(err) },
        complete: () => { console.log("paramMap completed") }
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.dir(changes);
  }

  ngOnInit() {
    console.log("init")
  }

  submit() {
    console.log("submit")
  }

}
