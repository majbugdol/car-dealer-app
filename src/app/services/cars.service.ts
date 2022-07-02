import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) {}

  public getList() {
    return this.http.get('https://car-dealer-backend.herokuapp.com/cars');
  }

  public deleteCar(carId: string) {
    return this.http.delete(
      `https://car-dealer-backend.herokuapp.com/cars/${carId}`
    );
  }

  public postCar(carToPost: CarToPost) {
    return this.http.post(
      'https://car-dealer-backend.herokuapp.com/cars',
      carToPost
    );
  }
}
