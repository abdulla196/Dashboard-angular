import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/xml',
    Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDhmMTg5Y2JhYTRkM2NjMGYwMGNiZSIsImlhdCI6MTY2MjI5NTkzMSwiZXhwIjoxNjcwOTM1OTMxfQ._gPM0f9sJlLcTYEynCHB0omOi_CxeIei-ol5A-VM0eE',
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
  updateUser(Data: any,new_birthaday:any,id:number): Observable<any> {
    var userdata = JSON.stringify({
      "userName": Data.userName,
      "_id": id,
      "birthday": new_birthaday,
      "details": Data.details,
      "email": Data.email,
      "phone": Data.phone,
      "type": Data.type,
    });
    console.log(userdata)
    return this.http.put<any>(this.apiUrl + 'user/' +id, userdata,httpOptions)
  }
  DeleteUser(id:number): Observable<any> {
    return this.http.delete(this.apiUrl + 'user/' +id,httpOptions)
  }
}
