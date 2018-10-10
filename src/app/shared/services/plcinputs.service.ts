import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { PLCInput } from '../models/plcinput.model';

@Injectable({
  providedIn: 'root'
})
export class PLCInputsService {
  private url;

  constructor(private http: Http) { }

  getPLCInputs() {
    this.url = environment.apiUrl + '/PLCInput/';
    return this.http.get(this.url);
  }

  updatePLCInputs(plcInput: PLCInput) {
    this.url = environment.apiUrl + '/PLCInput/0';
    return this.http.put(this.url, plcInput);
  }

}
