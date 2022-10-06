import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUserDTO } from '../models/complexTypes/login-user-dto.model';
import { BaseApiURL } from '../shared/base-api-url';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseApiURL:BaseApiURL = new BaseApiURL();

  constructor(
    private httpClient: HttpClient
  ) { }

  getUserList(): Observable<any>{
    const endPoint: string = "users/list";
    return this.httpClient.get(`${this.baseApiURL.url}${endPoint}`) 
  }
  
  loginUser(loginUser: LoginUserDTO) {
    let httpParams = new HttpParams()
    .append("username", loginUser.username)
    .append("password", loginUser.password);
    
    const endPoint: string = "users/login";
    return this.httpClient.get<any>(`${this.baseApiURL.url}${endPoint}`, { params: httpParams } );
  }

}
