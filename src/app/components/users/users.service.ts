import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/xml',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDhmMTg5Y2JhYTRkM2NjMGYwMGNiZSIsImlhdCI6MTY2MjI5NTkzMSwiZXhwIjoxNjcwOTM1OTMxfQ._gPM0f9sJlLcTYEynCHB0omOi_CxeIei-ol5A-VM0eE',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users = [];
  private apiUrl = 'http://66.29.155.80:5003/api/';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<any> {
  
    return this.http.get(this.apiUrl+'user/', httpOptions)
  
  }
  getUser(id:number): Observable<any> {
  
    return this.http.get(this.apiUrl + 'user/' + id,httpOptions)
  
  }
}
