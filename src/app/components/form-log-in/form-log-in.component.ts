import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';

interface ILoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-form-log-in',
  templateUrl: './form-log-in.component.html',
  styleUrls: ['./form-log-in.component.scss'],
})
export class FormLogInComponent implements OnInit {
  logIn: FormGroup<ILoginForm> = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  public get controls(): ILoginForm {
    return this.logIn.controls;
  }

  getErrorMessageEmail() {
    if (this.controls.email.hasError('required')) {
      return 'Pole nie może być puste';
    }
    return this.controls.email.hasError('email')
      ? 'Niepoprawny format e-mail'
      : '';
  }

  getErrorMessagePassword() {
    return 'Pole nie może być puste';
  }

  hide = true;
  constructor() {}

  ngOnInit(): void {}
}
