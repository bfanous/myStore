import { Component, OnInit, HostListener } from '@angular/core';
import { MyProductListModelCRM } from 'src/app/models/productModel';
import { SharedService } from 'src/app/shared.service';
import { InvoiceComponent } from './invoice/invoice.component';
import { EmptyCartComponent } from './emptyCart/emptyCart.component';

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
  model = new FormCheckout('', '', '');

  isSsubmitted = false;

  onSubmit() {
    this.isSsubmitted = true;
    this.getTotal();
    this.RmoveAll();
  }

  newHero() {
    this.model = new FormCheckout('', '', '');
  }

  public getTotal(): number {
    this.grandTotal = 0;
    this.products.forEach((element) => {
      this.grandTotal += +element.Amount * +element.ProductPrice;
    });
    return this.grandTotal;
  }
  getMyProductLists() {
    this.isLoading = true;

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
  removeFromCart(product: any) {
    this.isLoading = true;
    product.Email = this.service.getEmail();

    this.service.removeFromCart(product).subscribe((r: any) => {
      this.isLoading = false;
      this.getMyProductLists();
      this.service.updateItemsCounter(this.service.getItemsCounter() - 1);
      console.log(r);
    });
  }
  IncrementAmount(i: number) {
    this.products[i].Amount++;
  }
  DecrementAmount(i: number) {
    if (this.products[i].Amount !== 1) {
      this.products[i].Amount--;
    } else if (this.products[i].Amount === 1) {
      this.removeFromCart(this.products[i]);
    }
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

export class FormCheckout {
  constructor(
    public name: string,
    public address: string,
    public phone: string
  ) {}
}
