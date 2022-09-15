import { Component, OnInit } from '@angular/core';
import { Car, CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  public carList: Car[] = this.carsService.carList;

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.carsService.loadCarList(this.carsService.page, this.carsService.limit);
  }
}
