import {AppComponent} from './app.component';
import {bootstrap} from 'angular2/platform/browser';
import {CarService} from './car.service';
import {FakeCarService} from './fake-car.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(CarService, { useClass: FakeCarService })
]);
