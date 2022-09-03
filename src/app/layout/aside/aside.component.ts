import { Component, OnInit } from '@angular/core';
import { CarsService, CarToPost } from 'src/app/services/cars.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  constructor(
    private carsService: CarsService,
    private usersService: UsersService
  ) {}

  checkIfLoggedIn() {
    const isLoggedIn: boolean = this.usersService.isLoggedIn;
    return isLoggedIn;
  }

  car: CarToPost = {
    brand: '',
    model: '',
  };

  addCar() {
    this.carsService.addCarToList(this.car);
  }

  ngOnInit(): void {}
}
