import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { ProductModelCRM } from '../models/productModel';
import { Router } from '@angular/router';

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

  constructor(private service: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.LoadProducts();
  }
  isLoading: boolean = true;

  LoadProducts() {
    this.isLoading = true;
    this.service
      .getAllProductsCRM(this.page, this.count)
      .subscribe((r: any) => {
        this.crmProduct = r.modelViewList;
        this.total = r.TotalCount;
        this.isLoading = false;
        // console.log(r);
      });
  }

  pageChangeEvent(event: number) {
    this.page = event;
    this.LoadProducts();
  }

  addToCart(item: any) {
    this.isLoading = true;
    item.Email = this.service.getEmail();

    this.service.addToCart(item).subscribe((r: any) => {
      this.isLoading = false;

      console.log(r);
    });
    this.service.updateItemsCounter(this.service.getItemsCounter() + 1);
    console.log(this.crmProduct);
  }
}
