import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {LifecycleEvent} from './lifecycle-event';
import {LifecycleLoggerComponent} from './lifecycle-logger.component';
import {TestComponent} from './test.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">Component lifecycle event tracker</div>
      <div class="panel-body">
        <div>
          <p>Input: <input [(ngModel)]="value1"></p>
          <p><strong>Value1 in MyApp component {{value1}}</strong></p>
        </div>
        <hr>
        <div>
          <test-component [lifecycleEvents]="lifecycleEvents" [value1]="value1">
          </test-component>
        </div>
        <hr>
        <div>
          <button class="btn btn-sm btn-primary pull-right" (click)="clearList()">
            Clear list
          </button>
          <lifecycle-logger [lifecycleEvents]="lifecycleEvents"></lifecycle-logger>
        </div>
      </div>
    </div>
  `,
  directives: [LifecycleLoggerComponent, TestComponent, CORE_DIRECTIVES]
})
class MyApp {
  lifecycleEvents: Array<LifecycleEvent>;
  value1: string;
  constructor() {
    this.lifecycleEvents = [];
    this.value1 = '';
  }
  clearList() {
    this.lifecycleEvents = [];
  }
  ngOnInit() {
    this.lifecycleEvents.push(new LifecycleEvent('MyApp', 'ngOnInit'));
  }
  ngOnChange() {
    this.lifecycleEvents.push(new LifecycleEvent('MyApp', 'ngOnChange'));
  }
  ngDoCheck() {
    this.lifecycleEvents.push(new LifecycleEvent('MyApp', 'ngDoCheck'));
  }
  ngAfterContentInit() {
    this.lifecycleEvents.push(new LifecycleEvent('MyApp', 'ngAfterContentInit'));
  }
  ngAfterContentChecked() {
    this.lifecycleEvents.push(new LifecycleEvent('MyApp', 'ngAfterContentChecked'));
  }
  ngAfterViewInit() {
    this.lifecycleEvents.push(new LifecycleEvent('MyApp', 'ngAfterViewInit'));
  }
  ngAfterViewChecked() {
    this.lifecycleEvents.push(new LifecycleEvent('MyApp', 'ngAfterViewChecked'));
  }
  ngOnDestroy() {
    this.lifecycleEvents.push(new LifecycleEvent('MyApp', 'ngOnDestroy'));
  }
};

bootstrap(MyApp);
