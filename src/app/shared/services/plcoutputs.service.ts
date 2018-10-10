import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PLCOutputsService {
  private url;

  constructor(private http: Http) { }

  getPLCOutputs() {
    this.url = environment.apiUrl + '/PLCOutput/';
    return this.http.get(this.url);
  }
}
