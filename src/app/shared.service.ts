import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private itemsCounter: number = this.getItemsCounter();
  private email: string = '';
  // Production URL
  readonly url = 'http://beshoyfanous-001-site1.btempurl.com/api/';
  //Local URL
  // readonly url = 'https://localhost:44353/api/';
  constructor(private http: HttpClient, private auth: AuthService) {
    this.auth.user$.subscribe((profile) => {
      this.email = JSON.stringify(profile?.email, null, 2);
      localStorage.setItem(
        'userEmail',
        JSON.stringify(profile?.email, null, 2)
      );
    });
  }

  getEmail(): string {
    this.auth.user$.subscribe((profile) => {
      this.email = JSON.stringify(profile?.email, null, 2);
    });
    return this.email;
  }

  getAllProductsCRM(page: number, count: number): Observable<any[]> {
    return this.http
      .get<any>(
        this.url + 'Show/getProductList?page=' + page + '&count=' + count
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  public myItemsList: any = [];
  public myProductList = new BehaviorSubject<any>([]);

  getProductDetails(ProductCode: string): Observable<any[]> {
    return this.http
      .get<any>(this.url + 'Show/getProductDetails', {
        params: {
          productCode: ProductCode,
        },
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getProducts(email: string): Observable<any[]> {
    // return this.http.get<any>(this.url + 'Show/getMyProductList', {
    //   params: {
    //     Email: email,
    //   },
    // });

    return this.http
      .get<any>(this.url + 'Show/getMyProductList', {
        params: {
          Email: email,
        },
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
    // return this.myProductList.asObservable();
  }

  // setProduct(product: any) {
  //   this.myItemsList.push(...product);
  //   this.myProductList.next(product);
  // }
  getTotalPrice() {
    let totalPrice = 0;
    this.myItemsList.map((a: any) => {
      totalPrice += a.Price;
    });
  }
  addToCart(product: any) {
    // this.myItemsList.push(product);
    // this.myProductList.next(this.myItemsList);
    // this.getTotalPrice();

    return this.http.post(this.url + 'User/addToCart', product, {
      headers: { guest: 'false' },
    });
  }
  removeFromCart(product: any) {
    return this.http.post(this.url + '/User/removeFromCart', product, {
      headers: { guest: 'false' },
    });
  }
  // removeFromCart(product: any) {
  //   this.myItemsList.map((a: any, index: any) => {
  //     if (product.id === a.id) {
  //       this.myItemsList.splice(index, 1);
  //     }
  //   });
  // }
  removeAllItems(userEmail: string) {
    return this.http.post(
      this.url + 'User/disassociateAllProducts?user=' + userEmail,
      {
        headers: { guest: 'false' },
      }
    );
    // this.myItemsList = [];
    // this.myProductList.next(this.myItemsList);
  }

  updateItemsCounter(newCounter: number) {
    this.itemsCounter = newCounter;

    localStorage.setItem('item', this.itemsCounter.toString());
  }

  getItemsCounter(): number {
    return Number(localStorage.getItem('item') as string) || 0;
  }
}
