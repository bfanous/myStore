import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModelCRM } from '../models/productModel';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-cardDetails',
  templateUrl: './cardDetails.component.html',
  styleUrls: ['./cardDetails.component.css'],
})
export class CardDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: SharedService
  ) {
    this.productCode = this.activatedRoute.snapshot.paramMap.get('id') || '';
  }
  crmProduct: ProductModelCRM = {} as ProductModelCRM;
  productCode: string;
  isLoading: boolean = true;
  ngOnInit() {
    this.GetDetails(this.productCode);
  }
  GetDetails(ProductCode: string | undefined) {
    this.isLoading = true;
    this.service.getProductDetails(this.productCode).subscribe((r: any) => {
      this.crmProduct = r;

      console.log(this.productCode);
      console.log(this.crmProduct);
      this.isLoading = false;
    });
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
