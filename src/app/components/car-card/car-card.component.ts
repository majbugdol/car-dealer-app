import { Component, Input, OnInit } from '@angular/core';
import { Car, CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent implements OnInit {
  @Input() carData: Car = {
    _id: '',
    brand: '',
    model: '',
  };

  constructor(private carsService: CarsService) {}

  public onDelete(carId: string): void {
    this.carsService.deleteCarFromList(carId);
  }

  ngOnInit(): void {}
}
