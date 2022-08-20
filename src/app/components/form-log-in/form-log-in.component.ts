import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-log-in',
  templateUrl: './form-log-in.component.html',
  styleUrls: ['./form-log-in.component.scss'],
})
export class FormLogInComponent implements OnInit {
  logIn = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  // getErrorMessage() {
  //   if (this.logIn.hasError('required')) {
  //     return 'Pole nie może być puste';
  //   }

  //   return this.logIn.hasError('email') ? 'Niepoprawny format e-mail' : '';
  // }

  hide = true;
  constructor() {}

  ngOnInit(): void {}
}
