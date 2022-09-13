import { HeaderComponent } from './../../header/header.component';
import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/productModel';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() public context!: HeaderComponent;

  @Input() product: ProductModel = {} as ProductModel;

  constructor(private service: SharedService) {}

  ngOnInit() {}

  addToCard() {
    this.service.updateItemsCounter(this.service.getItemsCounter() + 1);
  }
}
