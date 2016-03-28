import {Component, Input} from 'angular2/core';
import {LifecycleEvent} from './lifecycle-event';

@Component({
  selector: 'test-component',
  template: `
    <div class="panel panel-warning">
      <div class="panel-heading">Test component</div>
      <div class="panel-body">
        <p>Input: <input [(ngModel)]="value1"></p>
        <p><strong>Value1: {{value1}}</strong></p>
      </div>
    </div>
  `
})
export class TestComponent {
  @Input() lifecycleEvents: Array<LifecycleEvent>;
  @Input() value1: string;
  ngOnInit() {
    this.lifecycleEvents.push(new LifecycleEvent('TestComponent', 'ngOnInit'));
  }
  ngOnChange() {
    this.lifecycleEvents.push(new LifecycleEvent('TestComponent', 'ngOnChange'));
  }
  ngDoCheck() {
    this.lifecycleEvents.push(new LifecycleEvent('TestComponent', 'ngDoCheck'));
  }
  ngAfterContentInit() {
    this.lifecycleEvents.push(new LifecycleEvent('TestComponent', 'ngAfterContentInit'));
  }
  ngAfterContentChecked() {
    this.lifecycleEvents.push(new LifecycleEvent('TestComponent', 'ngAfterContentChecked'));
  }
  ngAfterViewInit() {
    this.lifecycleEvents.push(new LifecycleEvent('TestComponent', 'ngAfterViewInit'));
  }
  ngAfterViewChecked() {
    this.lifecycleEvents.push(new LifecycleEvent('TestComponent', 'ngAfterViewChecked'));
  }
  ngOnDestroy() {
    this.lifecycleEvents.push(new LifecycleEvent('TestComponent', 'ngOnDestroy'));
  }
}
