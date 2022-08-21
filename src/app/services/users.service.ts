import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck, tap } from 'rxjs';

export interface ILoginToPost {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public login(loginData: ILoginToPost) {
    this.postLoginData(loginData)
      .pipe(pluck('token'))
      .subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err),
      });
  }

  constructor(private http: HttpClient) {}

  private postLoginData(loginData: ILoginToPost) {
    return this.http.post(
      'https://car-dealer-backend.herokuapp.com/users/login',
      loginData
    );
  }
}
