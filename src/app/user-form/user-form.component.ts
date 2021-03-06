import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { filter, map, distinctUntilChanged } from 'rxjs/operators';
import { FormControl, Validators, FormGroup, Validator, AbstractControl, ValidatorFn, ValidationErrors, FormBuilder, AsyncValidatorFn } from '@angular/forms';
import { User } from '../user';
import { Observable } from 'rxjs/internal/Observable';
import { timer } from 'rxjs/internal/observable/timer';
import { CustomValidatorService } from "../checkAddress.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnChanges {

  nameControl: FormControl = new FormControl("Golf", [Validators.required]);
  userFormGroup: FormGroup = new FormGroup({
    id: new FormControl(),
    name: this.nameControl,
    address: new FormControl('', [Validators.required], []),
    age: new FormControl(),
    tel: new FormControl()
  }, [this.nameAndAddressNotEqual],
    null
  );

  constructor(private userService: UserService,
    route: ActivatedRoute, fb: FormBuilder,
    checkAddress: CustomValidatorService) {
    this.userFormGroup = fb.group({
      id: fb.control(''),
      name: fb.control('', [Validators.required]),
      address: fb.control('', null, [checkAddress.checkAddress]),
      age: fb.control(''),
      tel: fb.control('')
    }, {
        validator: this.nameAndAddressNotEqual,
        asyncValidator: null
      })

    route.paramMap.pipe(
      filter(p => p.has("id")),
      map(p => p.get("id")),
      map(parseInt)
    ).subscribe({
      next: (id) => {
        this.userService.getUsers().pipe(
          map((users) => {
            return users.find((user) => user.id == id);
          })
        ).subscribe((user) => {this.userFormGroup.setValue(user)} )
      },
      error: (err) => { console.error(err) },
      complete: () => { console.log("paramMap completed") }
    });
  }

  submit() {
    let user = this.userFormGroup.value as User;
    this.userService.updateUser(user).subscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.dir(changes);
  }

  ngOnInit() {
    this.userFormGroup.statusChanges.subscribe({
      next: (status) => { console.log(status) }
    });
  }

  nameAndAddressNotEqual(group: FormGroup): ValidationErrors | null {
    let groupValue = group.value;
    let name = groupValue.name;
    let address = groupValue.address;
    return name != address ? null : { nameAndAddress: {} };
  }

}
