import { NgModule }      from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';

import { AppComponent }  from './app.component';

// Available themes:
// deeppurple-amber.css
// indigo-pink.css
// pink-bluegrey.css
// purple-green.css

import '@angular/material/core/theming/prebuilt/pink-bluegrey.css'

@NgModule({
  imports:      [ BrowserModule, MaterialModule ],
  declarations: [ AppComponent ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
