import { Component, OnInit } from '@angular/core';
import {ITEMS} from "../shared/items";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = JSON.parse(JSON.stringify(ITEMS));

  constructor() { }

  ngOnInit() {
  }

}
