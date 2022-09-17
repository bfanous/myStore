import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { ProductModelCRM, addToCardModel } from '../models/productModel';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  page: number = 1;
  readonly count: number = 12;
  total: number = 0;

  crmProduct: ProductModelCRM[] = [];
  userModel: addToCardModel = {
    Email: 'beshoy@gmail.com',
    ProductCode: 'Code (Angular Project) 04',
  };

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
        // console.log(r);
      });
  }

  pageChangeEvent(event: number) {
    this.page = event;
    this.LoadProducts();
  }

  addToCard() {
    this.service.addToCard(this.userModel).subscribe((r: any) => {
      console.log(r);
    });
    this.service.updateItemsCounter(this.service.getItemsCounter() + 1);
    console.log(this.crmProduct);
  }
}
