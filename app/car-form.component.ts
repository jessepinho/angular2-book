import {Car} from './car';
import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';

@Component({
  selector: 'car-form',
  templateUrl: 'app/car-form.component.html'
})
export class CarFormComponent {
  fuelTypes = ['Petrol', 'Diesel', 'Hybrid', 'Electric'];
  bodyStyles = ['Convertibles', 'Coupes', 'Hatchbacks', 'Vans', 'Sedans', 'SUVs', 'Trucks', 'Wagons'];

  model = new Car(1, 'BMW', 'X5', this.fuelTypes[1], this.bodyStyles[5], 250, 250);

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
