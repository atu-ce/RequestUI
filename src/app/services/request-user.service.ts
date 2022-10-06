import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiURL } from '../shared/base-api-url';

@Injectable({
  providedIn: 'root'
})
export class RequestUserService {
  baseApiURL:BaseApiURL = new BaseApiURL();

  constructor(
    private httpClient:HttpClient
    ) { }
}
