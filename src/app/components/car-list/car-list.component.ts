import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  public carList: Car[] = [];

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.carsService
      .getList()
      .subscribe((cars) => (this.carList = cars as Car[]));
  }
}
