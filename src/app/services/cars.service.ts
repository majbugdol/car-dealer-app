import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface ICarListResponse {
  docs: Car[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
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
  public carsResponse: ICarListResponse;
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

  public async loadCarList(
    page: number = this.page,
    limit: number = this.limit
  ): Promise<void> {
    this.getList(page, limit)
      .pipe(
        map((cars) => {
          this.carsResponse = cars;
          this.carList.length = 0;
          this.carList.push(...cars.docs);
        })
      )
      .subscribe();
  }

  public async deleteCarFromList(carId: string): Promise<void> {
    this.deleteCar(carId).subscribe(() => this.loadCarList());
  }

  public addCarToList(carToPost: CarToPost) {
    this.postCar(carToPost).subscribe(() => this.loadCarList());
  }

  // observables
  private getList(page: number, limit: number) {
    return this.http.get(
      `https://car-dealer-backend.herokuapp.com/cars?page=${page}&limit=${limit}`
    ) as Observable<ICarListResponse>;
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
