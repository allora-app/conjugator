import { NgModule }      from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import '@angular/material/core/theming/prebuilt/indigo-pink.css'

import { AppComponent }  from './app.component';
import { ScrapeService } from '../services/scrape.service';

@NgModule({
  imports:      [ BrowserModule, MaterialModule ],
  declarations: [ AppComponent ],
  providers: [ScrapeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
