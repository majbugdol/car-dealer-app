import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ILoginToPost {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public login(loginData: ILoginToPost) {
    this.postLoginData(loginData).subscribe((res) => console.log(res));
  }

  constructor(private http: HttpClient) {}

  private postLoginData(loginData: ILoginToPost) {
    return this.http.post(
      'https://car-dealer-backend.herokuapp.com/users/login',
      loginData
    );
  }
}
