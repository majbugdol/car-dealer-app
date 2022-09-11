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

  public get isAdmin(): boolean {
    return this.usersService.state.isAdmin;
  }

  car: CarToPost = {
    brand: '',
    model: '',
  };

  addCar(): void {
    this.carsService.addCarToList(this.car);
  }

  ngOnInit(): void {}
}
