import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  user: string = '';
  myDate = new Date();
  subTotal: number = 1750;
  constructor() {
    this.user = (localStorage.getItem('userEmail') as string) || '';
  }

  ngOnInit() {}
}
