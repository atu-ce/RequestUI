import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiURL } from '../shared/base-api-url';

@Injectable({
  providedIn: 'root'
})
export class UserHistoryService {
  baseApiURL: BaseApiURL = new BaseApiURL();

  constructor(
    private httpClient: HttpClient
  ) { }

  getUserHistoryList(): Observable<any>{
    const endPoint: string = "userHistories";
    return this.httpClient.get(`${this.baseApiURL.url}${endPoint}`);
  }
}