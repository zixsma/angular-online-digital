import { FormControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";
import { timer } from "rxjs/internal/observable/timer";
import { map } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  checkAddress(control: FormControl)
    : Observable<ValidationErrors | null> {
    return timer(5000).pipe(
      map(() => { return { address: "" } })
    )
  }
}
