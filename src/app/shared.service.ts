import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly BaseUrl = "https://jsonplaceholder.typicode.com/";
  constructor(private http:HttpClient) {

  }

 getProductList():Observable<any[]>{
  return this.http.get<any>(this.BaseUrl + 'photos');
  }
}
