import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // readonly BaseUrl = 'https://mockend.com/bfanous/myStore/';
  // getAllProducts(page: number, limit: number): Observable<any[]> {
  //   return this.http.get<any>(
  //     this.BaseUrl + 'Product?limit=' + limit + '&offset=' + (page - 1) * limit
  //   );
  // }

  private itemsCounter: number = this.getItemsCounter();
  // Production URL
  // readonly url = 'http://beshoyfanous-001-site1.btempurl.com/api/';

  readonly url = 'https://localhost:44353/api/';
  constructor(private http: HttpClient) {}

  getAllProductsCRM(page: number, count: number): Observable<any[]> {
    return this.http.get<any>(
      this.url + 'Show/getProductList?page=' + page + '&count=' + count
    );
  }

  updateItemsCounter(newCounter: number) {
    this.itemsCounter = newCounter;

    localStorage.setItem('item', this.itemsCounter.toString());
  }

  getItemsCounter(): number {
    return Number(localStorage.getItem('item') as string) || 0;
  }
}
