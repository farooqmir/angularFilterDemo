import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FiltersComponent } from './feature/filters/filters.component';
import { SelectedFiltersComponent } from './feature/selected-filters/selected-filters.component';
import { ProductsComponent } from './feature/products/products.component';
import { FilteringService } from './feature/shared/services/filtering.service';
 

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    SelectedFiltersComponent,
    ProductsComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [FilteringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
