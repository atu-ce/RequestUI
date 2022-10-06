import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endWith, Observable } from 'rxjs';
import { BaseApiURL } from '../shared/base-api-url';
import { Request } from 'src/app/models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseApiURL:BaseApiURL = new BaseApiURL();

  constructor(
    private httpClient: HttpClient
    ) { }

  getRequestListWithUser(): Observable<any>{
    const endPoint: string = "requests/list/withUser";
    return this.httpClient.get(`${this.baseApiURL.url}${endPoint}`);
  }

  getRequestList(): Observable<any>{
    const endPoint: string = "requests/list";
    return this.httpClient.get(`${this.baseApiURL.url}${endPoint}`);
  }

  getRequestById(id: number): Observable<any> {
    const endPoint: string = "requests/"+id.toString();
    return this.httpClient.get(`${this.baseApiURL.url}${endPoint}`);
  }

  postRequest(model: Request): Observable<any>{
    const endPoint: string = "requests";
    return this.httpClient.post<any>(`${this.baseApiURL.url}${endPoint}`, model);
  }

}
