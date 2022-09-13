import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly BaseUrl = 'https://mockend.com/bfanous/myStore/';

  constructor(private http: HttpClient) {}

  getAllProducts(page: number, limit: number): Observable<any[]> {
    return this.http.get<any>(
      this.BaseUrl + 'Product?limit=' + limit + '&offset=' + (page - 1) * limit
    );
  }
}
