import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {}

  public async loadCarList(): Promise<void> {
    this.getList().subscribe(cars => {
        this.carList.length = 0;
        this.carList.push(...cars)
      }
    )
  }

  public async deleteCarFromList(carId: string): Promise<void> {
    this.deleteCar(carId).subscribe(() => this.loadCarList());
  }

  public addCarToList(carToPost: CarToPost) {
    this.postCar(carToPost).subscribe(() => this.loadCarList());
  }

  // observables
  private getList() {
    return this.http.get('https://car-dealer-backend.herokuapp.com/cars') as Observable<Car[]>;
  }

  private deleteCar(carId: string) {
    return this.http.delete(
      `https://car-dealer-backend.herokuapp.com/cars/${carId}`
    );
  }

  private postCar(carToPost: CarToPost) {
    return this.http.post(
      'https://car-dealer-backend.herokuapp.com/cars',
      carToPost
    );
  }
}
