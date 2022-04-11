import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.scss']
})
export class CardformComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl(null,
      [
        Validators.required,
        Validators.minLength(3),
      ]),

    cardNumber: new FormControl(null,
      [
        Validators.required,

      ]),
    expiration: new FormControl(null,
      [
        Validators.required,

      ]),
    securityCode: new FormControl(null,
      [
        Validators.required,
       
      ]),

  })
  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log("kaydedildi");
  }

}
