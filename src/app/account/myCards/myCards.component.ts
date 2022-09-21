import { Component, OnInit, HostListener } from '@angular/core';
import { MyProductListModelCRM } from 'src/app/models/productModel';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-myCards',
  templateUrl: './myCards.component.html',
  styleUrls: ['./myCards.component.css'],
})
export class MyCardsComponent implements OnInit {
  public products: MyProductListModelCRM[] = [];
  Email: string = '';
  public grandTotal: number = 0;
  constructor(private service: SharedService) {}
  isLoading: boolean = true;
  ngOnInit() {
    this.getMyProductLists();
  }

  public getTotal(): number {
    this.grandTotal = 0;
    this.products.forEach((element) => {
      this.grandTotal += +element.Amount * +element.ProductPrice;
    });
    return this.grandTotal;
  }
  getMyProductLists() {
    this.Email = (localStorage.getItem('userEmail') as string) || '';
    this.service.getProducts(this.Email).subscribe((res: any) => {
      this.products = res?.modelViewList;
      this.service.updateItemsCounter(res.TotalCount || 0);
      this.isLoading = false;

      // this.grandTotal = this.service.getTotalPrice();
    });
  }
  RmoveAll() {
    this.isLoading = true;
    this.Email = this.service.getEmail();

    this.service.removeAllItems(this.Email).subscribe((r: any) => {
      this.isLoading = false;
      this.products = [];
      this.service.updateItemsCounter(0);
    });
  }

  IncrementAmount(i: number) {
    this.products[i].Amount++;
  }
  DecrementAmount(i: number) {
    if (this.products[i].Amount != 1) this.products[i].Amount--;
  }

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event) {
    window.onbeforeunload = (ev) => {
      // OR

      alert('goin to refresh');

      // finally return the message to browser api.
      var dialogText = 'Changes that you made may not be saved.';
      ev.returnValue = dialogText;
      return dialogText;
    };
  }
}
