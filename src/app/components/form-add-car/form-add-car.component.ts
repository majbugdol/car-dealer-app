import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarsService, CarToPost } from '../../services/cars.service';

@Component({
  selector: 'app-form-add-car',
  templateUrl: './form-add-car.component.html',
  styleUrls: ['./form-add-car.component.scss'],
})
export class FormAddCarComponent implements OnInit {
  addCarForm = new FormGroup({
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
  });

  constructor(private carsService: CarsService) {}

  addCar() {
    const carToPost = this.addCarForm.value as CarToPost;
    this.carsService.addCarToList(carToPost);
    this.addCarForm.reset();
  }

  ngOnInit(): void {}
}
