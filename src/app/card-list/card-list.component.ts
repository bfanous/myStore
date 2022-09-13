import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/productModel';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  page: number = 1;
  readonly limit: number = 12;
  readonly total: number = 100;
  Products: Array<ProductModel> = [];

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.LoadProducts();
  }

  LoadProducts() {
    this.service.getAllProducts(this.page, this.limit).subscribe((r: any) => {
      this.Products = r;
    });
  }

  pageChangeEvent(event: number) {
    this.page = event;
    this.LoadProducts();
  }
}
