import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FiltersComponent } from './feature/filters/filters.component';
import { SelectedFiltersComponent } from './feature/selected-filters/selected-filters.component';
import { ProductsComponent } from './feature/products/products.component';
 

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
