import {Component} from 'angular2/core';
import {TemperatureConverterPipe} from './temperature-converter.pipe';

@Component({
  selector: 'my-app',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">TemperatureConverterPipe</h3>
      </div>
      <div class="panel-body">
        Temperature: {{32 | temperatureConverter:'F2C':true}}
        <hr>
        Temperature: {{17 | temperatureConverter:'C2F':true}}
      </div>
    </div>
  `,
  pipes: [TemperatureConverterPipe]
})
export class AppComponent {
  collection: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
}
