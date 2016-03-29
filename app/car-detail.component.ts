import {Car} from './car';
import {CarService} from './car.service';
import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  template: `
    <h3>Car detail component</h3>
    <div *ngIf="currentCar">
      <table class="table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{{currentCar.id}}</td>
          </tr>
          <tr>
            <td>Brand</td>
            <td>{{currentCar.brand}}</td>
          </tr>
          <tr>
            <td>Model</td>
            <td>{{currentCar.model}}</td>
          </tr>
          <tr>
            <td>Fuel type</td>
            <td>{{currentCar.fuelType}}</td>
          </tr>
          <tr>
            <td>Body style</td>
            <td>{{currentCar.bodyStyle}}</td>
          </tr>
          <tr>
            <td>Top speed</td>
            <td>{{currentCar.topSpeed}}</td>
          </tr>
          <tr>
            <td>Power</td>
            <td>{{currentCar.power}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <a class="btn btn-primary btn-sm" [routerLink]="['CarsList']">Back to list</a>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class CarDetailComponent {
  currentCar: Car;

  constructor(
    private _routeParams: RouteParams,
    private _service: CarService) {}

  ngOnInit() {
    let id = this._routeParams.get('id');
    this._service.getCar(id).then(currentCar => this.currentCar = currentCar);
  }
}
