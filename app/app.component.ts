import {AboutComponent} from './about.component';
import {Component} from 'angular2/core';
import {CarDetailComponent} from './car-detail.component';
import {CarFormComponent} from './car-form.component';
import {CarsListComponent} from './cars-list.component';
import {CarService} from './car.service';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'my-app',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Routing and navigation</h3>
      </div>
      <div class="panel-body">
        <ul class="nav nav-tabs">
          <li role="presentation"><a [routerLink]="['CarsList']">Cars list</a></li>
          <li role="presentation"><a [routerLink]="['CarForm']">New car</a></li>
          <li role="presentation"><a [routerLink]="['About']">About</a></li>
        </ul>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [CarService]
})
@RouteConfig([
  { path: '/cars', name: 'CarsList', component: CarsListComponent, useAsDefault: true },
  { path: '/car/create', name: 'CarForm', component: CarFormComponent },
  { path: '/car/:id', name: 'CarDetail', component: CarDetailComponent },
  { path: '/about', name: 'About', component: AboutComponent }
])
export class AppComponent {
}
