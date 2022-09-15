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
  public page: number = 1;
  public limit: number = 5;

  private prepareHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': window.localStorage.getItem('jwt') || '',
    });
  }

  constructor(private http: HttpClient) {}

  public async loadCarList(page: number, limit: number): Promise<void> {
    this.getList(page, limit).subscribe((cars) => {
      this.carList.length = 0;
      this.carList.push(...cars);
    });
  }

  public async deleteCarFromList(carId: string): Promise<void> {
    this.deleteCar(carId).subscribe(() =>
      this.loadCarList(this.page, this.limit)
    );
  }

  public addCarToList(carToPost: CarToPost) {
    this.postCar(carToPost).subscribe(() =>
      this.loadCarList(this.page, this.limit)
    );
  }

  // observables
  private getList(page: number, limit: number) {
    return this.http.get(
      `https://car-dealer-backend.herokuapp.com/cars?page=${page}&limit=${limit}`
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
