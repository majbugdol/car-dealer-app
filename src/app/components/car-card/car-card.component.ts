import { Component, Input, OnInit } from '@angular/core';
import { Car, CarsService } from 'src/app/services/cars.service';
import { UsersService } from 'src/app/services/users.service';

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

  checkIfLoggedIn() {
    const isLoggedIn: boolean = this.usersService.isLoggedIn;
    console.log(isLoggedIn);
    return isLoggedIn;
  }

  constructor(
    private carsService: CarsService,
    private usersService: UsersService
  ) {}

  public onDelete(carId: string): void {
    this.carsService.deleteCarFromList(carId);
  }

  ngOnInit(): void {}
}
