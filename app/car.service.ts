import {Car} from './car';
import {Http, RequestOptions, Headers, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import * as _ from 'underscore';

@Injectable()
export class CarService {
  private _backendUrl = 'http://meteor-117867.nitrousapp.com:8080/api';
  constructor(private http: Http) {}

  getCars() {
    return this.http.get(this._backendUrl + '/cars')
      .map(res => <Car[]> res.json())
      .catch(this.handleError)
      .toPromise();
  }

  getCar(id: string) {
    return this.http.get(this._backendUrl + '/cars/' + id)
      .map(res => <Car> res.json())
      .catch(this.handleError)
      .toPromise();
  }

  addCar(newCar: Car) {
    let body = JSON.stringify(newCar),
        headers = new Headers({ 'Content-Type': 'application/json' }),
        options = new RequestOptions({ headers });

    return this.http.post(this._backendUrl + '/cars', body, options)
      .catch(this.handleError)
      .subscribe(res => {
        console.log(res.json());
      });
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
