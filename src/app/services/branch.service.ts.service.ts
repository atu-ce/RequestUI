import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiURL } from '../shared/base-api-url';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  baseApiURL:BaseApiURL = new BaseApiURL();

  constructor(
    private httpClient : HttpClient
    ) { }

  getBranchList(): Observable<any>{
    const endPoint: string = "branches";
    return this.httpClient.get(`${this.baseApiURL.url}${endPoint}`);
  }
}
