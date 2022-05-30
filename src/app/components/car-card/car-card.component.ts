import { Component, Input, OnInit } from '@angular/core';
import { Car, CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
  @Input() carData: Car = {
    _id: '',
    brand: '',
    model: '',
  };

  constructor(private carsService: CarsService) { }

// ! ewentualnie zrobić alert ze usunieto auto itd
  public onDelete(carId: string): void {
    console.log(carId);
    this.carsService.deleteCar(carId)
      .subscribe(
        car => console.log(car)
      )
      .add(() => {
          this.carsService.getList().subscribe();
        }
      )
  }
  // this.carsService.getList().subscribe(cars => this.carList = cars as Car[]);

  ngOnInit(): void {
  }

}
