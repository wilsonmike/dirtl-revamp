import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatafetchService {
  baseURL = 'http://localhost:3000';

  constructor(private router: Router, private http: HttpClient) { }
  fetchOrders = () => {
    return this.http.get(`${this.baseURL}/`);
  }

  fetchLineItems = () => {
    return this.http.get(`${this.baseURL}/lineitems`);
  }

  fetchFebOrders = () => {
    return this.http.get(`${this.baseURL}/feborders`);
  }
}
