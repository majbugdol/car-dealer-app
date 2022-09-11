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

interface IUserServiceState {
  isLoggedIn: boolean;
  isAdmin: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public state: IUserServiceState = {
    isLoggedIn: false,
    isAdmin: false,
  };

  public login(loginData: ILoginToPost) {
    this.postLoginData(loginData)
      .pipe(map((res) => res as ILoginData))
      .subscribe({
        next: (res) => {
          console.log(res);
          this.handleLogin(res);
        },
        error: (err) => console.log(err.error, 'error'),
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
    this.state.isLoggedIn = true;
    this.state.isAdmin = data.isAdmin ?? false;
  }

  public logout() {
    localStorage.removeItem('jwt');
    this.state.isLoggedIn = false;
    this.state.isAdmin = false;
  }
}
