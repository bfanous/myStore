import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly BaseUrl = 'https://mockend.com/bfanous/myStore/';

  private itemsCounter: number = this.getItemsCounter();

  constructor(private http: HttpClient) {}

  getAllProducts(page: number, limit: number): Observable<any[]> {
    return this.http.get<any>(
      this.BaseUrl + 'Product?limit=' + limit + '&offset=' + (page - 1) * limit
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
