import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService, ILoginToPost } from 'src/app/services/users.service';

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
  logInForm: FormGroup<ILoginForm> = new FormGroup({
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
    return this.logInForm.controls;
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
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  login() {
    const loginData = this.logInForm.value as ILoginToPost;
    this.usersService.login(loginData);
  }
}
