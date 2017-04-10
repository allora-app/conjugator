import { NgModule }      from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';

import { AppComponent }  from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';

// Available themes:
// deeppurple-amber.css
// indigo-pink.css
// pink-bluegrey.css
// purple-green.css

import '@angular/material/core/theming/prebuilt/indigo-pink.css'

@NgModule({
  imports:      [ FormsModule, BrowserModule, MaterialModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, SearchFormComponent ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
