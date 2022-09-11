import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Car {
  _id: string;
  brand: string;
  model: string;
}

export interface CarToPost {
  brand: string;
  model: string;
}

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  public carList: Car[] = [];

  private prepareHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': window.localStorage.getItem('jwt') || '',
    });
  }
  // private jwtHeader = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'auth-token': window.localStorage.getItem('jwt') || '',
  // });

  constructor(private http: HttpClient) {}

  public async loadCarList(): Promise<void> {
    this.getList().subscribe((cars) => {
      this.carList.length = 0;
      this.carList.push(...cars);
    });
  }

  public async deleteCarFromList(carId: string): Promise<void> {
    this.deleteCar(carId).subscribe(() => this.loadCarList());
  }

  public addCarToList(carToPost: CarToPost) {
    this.postCar(carToPost).subscribe(() => this.loadCarList());
  }

  // observables
  private getList() {
    return this.http.get(
      'https://car-dealer-backend.herokuapp.com/cars'
    ) as Observable<Car[]>;
  }

  private deleteCar(carId: string) {
    console.log(window.localStorage.getItem('jwt'));

    return this.http.delete(
      `https://car-dealer-backend.herokuapp.com/cars/${carId}`,
      {
        headers: this.prepareHeader(),
      }
    );
  }

  private postCar(carToPost: CarToPost) {
    return this.http.post(
      'https://car-dealer-backend.herokuapp.com/cars',
      carToPost,
      {
        headers: this.prepareHeader(),
      }
    );
  }
}
