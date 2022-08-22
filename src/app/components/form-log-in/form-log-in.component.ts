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
      validators: [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
      ],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)],
      nonNullable: true,
    }),
  });

  public get controls(): ILoginForm {
    return this.logInForm.controls;
  }

  //zrób zabezpieczenie długośc hasła: 8 znaków i e-maila 6 znaków!!!
  getErrorMessageEmail() {
    if (this.controls.email.hasError('required')) {
      return 'Pole nie może być puste';
    } else if (this.controls.email.hasError('email'))
      return 'Niepoprawny format e-mail';

    return this.controls.email.hasError('minlength')
      ? 'E-mail musi mieć co najmniej 6 znaków'
      : '';
  }

  getErrorMessagePassword() {
    if (this.controls.password.hasError('required')) {
      return 'Pole nie może być puste';
    }

    return this.controls.password.hasError('minlength')
      ? 'Hasło musi mieć co najmniej 8 znaków'
      : '';
  }

  hide = true;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  login() {
    const loginData = this.logInForm.value as ILoginToPost;
    this.usersService.login(loginData);
  }
}
