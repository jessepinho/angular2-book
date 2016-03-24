import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
  selector: 'key-up',
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">Angular 2 Event Binding Demo - Start typing here:</div>
      <div class="panel-body">
        <div>
          <input (keyup)="onKey($event)">
        </div>
        <hr>
        <div>
          <h5>Resulting keyup events: <button class="btn btn-sm btn-primary pull-right" (click)="reset()">Reset</button></h5>
          <div>{{values}}</div>
        </div>
      </div>
    </div>
  `
})
class KeyUpComponent {
  values = '';
  onKey(event: Event) {
    this.values += event.target.value + ' | ';
  }
  reset() {
    this.values = '';
  }
}

bootstrap(KeyUpComponent);
