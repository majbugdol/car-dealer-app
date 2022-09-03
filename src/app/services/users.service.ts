import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { map } from 'rxjs';

export interface ILoginToPost {
  email: string;
  password: string;
}

interface ILoginData {
  isLoginSuccessful: boolean;
  message: string;
  token?: string;
  isAdmin?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  isLoggedIn = false;

  public login(loginData: ILoginToPost) {
    this.postLoginData(loginData)
      .pipe(map((res) => res as ILoginData))
      .subscribe({
        next: (res) => {
          console.log(res);
          this.handleLogin(res);
        },
        error: (err) => console.log(err.error),
      });
  }

  constructor(private http: HttpClient) {}

  private postLoginData(loginData: ILoginToPost) {
    return this.http.post(
      'https://car-dealer-backend.herokuapp.com/users/login',
      loginData
    );
  }

  private handleLogin(data: ILoginData) {
    if (!data.token) {
      return;
    }
    localStorage.setItem('jwt', data.token);
    this.isLoggedIn = true;
  }

  //zrobić public state; a handleLogin chyba zmienic na successfull login i tam zapisac token?
}
