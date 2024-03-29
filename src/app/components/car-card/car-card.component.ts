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

  public isBusy: boolean = false;

  constructor(
    private carsService: CarsService,
    private usersService: UsersService
  ) {}

  public get isLoggedIn(): boolean {
    return this.usersService.state.isLoggedIn;
  }

  public get isAdmin(): boolean {
    return this.usersService.state.isAdmin;
  }

  public onDelete(carId: string): void {
    this.isBusy = true;
    try {
      this.carsService.deleteCarFromList(carId);
    } catch (err) {
      console.log(err);
    } finally {
      this.isBusy = false;
    }
  }

  ngOnInit(): void {}
}
