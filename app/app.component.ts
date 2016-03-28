import {Component} from 'angular2/core';
import {CarFormComponent} from './car-form.component';

@Component({
  selector: 'my-app',
  template: '<car-form></car-form>',
  directives: [CarFormComponent]
})
export class AppComponent {
}
