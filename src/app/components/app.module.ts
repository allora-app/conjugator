import { NgModule }      from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';

import { AppComponent }  from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';

// Available themes:
// deeppurple-amber.css
// indigo-pink.css
// pink-bluegrey.css
// purple-green.css

import '@angular/material/prebuilt-themes/indigo-pink.css'

@NgModule({
  imports:      [ BrowserAnimationsModule, BrowserModule, FlexLayoutModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent, SearchFormComponent, SearchResultsComponent ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
