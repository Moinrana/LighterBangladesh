import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EhttpParamType } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  private url_countries = "http://universities.hipolabs.com/search";
  constructor(private httpClient: HttpClient) { }

  public getUniversities(value: string, paramType: EhttpParamType) {
    let params = new HttpParams;
    if (paramType === EhttpParamType.param) {
      params.set('country', value);
    }
    debugger
    return this.httpClient.get<any>(this.url_countries, { params: params });
  }
}

