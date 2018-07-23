import { Component, OnInit } from '@angular/core';
import {FILTERS} from '../shared/filters';

@Component({  
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  
  filters = FILTERS;

  constructor() { }
  
  save(category, filter){
    alert();
    console.log(this.filters);
  }

  selectAnd(category,filter){
    category.selectedValue=filter.value;
    filter.isSelected = true;
    category.filters.map(function(filter){
      filter.isSelected = false;
      return filter;
    });
    filter.isSelected = true;
  }
  
  select(category, filter){
    filter.isSelected = !filter.isSelected;
    
    if(typeof category.selectCount == 'undefined')
     category.selectCount=0;
      
    if(!category.selectedValue)
     category.selectedValue='';

    if(filter.isSelected){
      category.selectedValue = category.selectedValue+""+((category.selectedValue)?(","+filter.value):filter.value);
      category.selectCount++;
    }
    else  {
      var remItem = (category.selectCount)>1?(","+filter.value):filter.value;
      category.selectedValue = category.selectedValue.replace(remItem,"");
      category.selectCount--;
    }
    
  }

  ngOnInit() {
  }

}
