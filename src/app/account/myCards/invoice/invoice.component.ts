import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  @Input() total = 0;
  @Input() address = '';
  @Input() name = '';
  @Input() phone = '';

  user: string = '';

  myDate = new Date();
  // subTotal: number = 1750;
  constructor() {
    this.user = (localStorage.getItem('userEmail') as string) || '';
  }
  ngOnInit() {}
}
