import { Component } from '@angular/core';
import {ITEMS} from './feature/shared/items';
import {FilteringService} from './feature/shared/services/filtering.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FilteringService] 
})
export class AppComponent {
  title = 'app';
  
  constructor(public filteringService: FilteringService){

  }
  fproducts = JSON.parse(JSON.stringify(ITEMS));
  products = JSON.parse(JSON.stringify(ITEMS));
  
  onFilterChange($event){
    console.log("console---");  
    console.log($event);
    this.products = this.filteringService.applyFilter(this.fproducts,$event.filters,$event.categories);
    alert('Filter has changed!');
  }
}
