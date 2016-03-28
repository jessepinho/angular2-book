import {Component, Input} from 'angular2/core';
import {LifecycleEvent} from './lifecycle-event';

@Component({
  selector: 'lifecycle-logger',
  template: `
    <div>
      <h5>List of lifecycle events of component: <button class="btn btn-sm btn-primary pull-right" (click)="reset()">Reset</button></h5>
      <br>
      <table class="table table-condensed table-hover table-bordered">
        <thead>
          <th>#</th>
          <th>Component name</th>
          <th>Event name</th>
        </thead>
        <tbody>
          <tr *ngFor="#lifecycleEvent of lifecycleEvents, #i=index">
            <td>{{i + 1}}</td>
            <td>{{lifecycleEvent.componentName}}</td>
            <td>{{lifecycleEvent.eventName}}</td>
          </tr>
      </table>
    </div>
  `
})
export class LifecycleLoggerComponent {
  @Input() lifecycleEvents: Array<LifecycleEvent>;
  ngOnInit() {
    this.lifecycleEvents.push(new LifecycleEvent('LifecycleLogger', 'ngOnInit'));
  }
  ngOnChange() {
    this.lifecycleEvents.push(new LifecycleEvent('LifecycleLogger', 'ngOnChange'));
  }
  ngDoCheck() {
    this.lifecycleEvents.push(new LifecycleEvent('LifecycleLogger', 'ngDoCheck'));
  }
  ngAfterContentInit() {
    this.lifecycleEvents.push(new LifecycleEvent('LifecycleLogger', 'ngAfterContentInit'));
  }
  ngAfterContentChecked() {
    this.lifecycleEvents.push(new LifecycleEvent('LifecycleLogger', 'ngAfterContentChecked'));
  }
  ngAfterViewInit() {
    this.lifecycleEvents.push(new LifecycleEvent('LifecycleLogger', 'ngAfterViewInit'));
  }
  ngAfterViewChecked() {
    this.lifecycleEvents.push(new LifecycleEvent('LifecycleLogger', 'ngAfterViewChecked'));
  }
  ngOnDestroy() {
    this.lifecycleEvents.push(new LifecycleEvent('LifecycleLogger', 'ngOnDestroy'));
  }
}
