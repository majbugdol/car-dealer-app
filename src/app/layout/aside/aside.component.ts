import { Component, OnInit } from '@angular/core';
import { CarsService, CarToPost } from 'src/app/services/cars.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  // private carsToAdd: CarToPost[] = [
  //   {
  //     brand: 'Toyota',
  //     model: 'Yaris',
  //   },
  //   {
  //     brand: 'Toyota',
  //     model: 'Corolla',
  //   },
  //   {
  //     brand: 'Hyundai',
  //     model: 'Getz',
  //   },
  //   {
  //     brand: 'Ford',
  //     model: 'Focus',
  //   },
  //   {
  //     brand: 'Dacia',
  //     model: 'Logan',
  //   },
  // ];

  constructor(private carsService: CarsService) {}

  onSubmit(event: any) {
    const carToAdd: CarToPost = {
      brand: event.target.brand.value,
      model: event.target.model.value,
    };
    console.log(carToAdd);
    this.addCar(carToAdd);
  }
  addCar(carToAdd: CarToPost) {
    this.carsService.addCarToList(carToAdd);
  }
  ngOnInit(): void {}
}
