import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { ProductModelCRM } from '../models/productModel';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  page: number = 1;
  readonly count: number = 12;
  total: number = 0;
  // Products: Array<ProductModel> = [];
  crmProduct: ProductModelCRM[] = [];

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.LoadProducts();
  }

  LoadProducts() {
    this.service
      .getAllProductsCRM(this.page, this.count)
      .subscribe((r: any) => {
        this.crmProduct = r.modelViewList;
        this.total = r.TotalCount;
        console.log(r);
      });
    // this.service.getAllProducts(this.page, this.limit).subscribe((r: any) => {
    //   this.Products = r;
    // });
  }

  addToCard() {
    this.service.updateItemsCounter(this.service.getItemsCounter() + 1);
    console.log(this.crmProduct);
  }

  pageChangeEvent(event: number) {
    this.page = event;
    this.LoadProducts();
  }
}
