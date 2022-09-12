import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  Users: any =[];

  constructor(private service:SharedService) {}

  ngOnInit(): void {
   this.service.getProductList().subscribe(data => {
    this.Users = data;
  });
   }
}
