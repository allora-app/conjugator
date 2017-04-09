import { Component, OnInit } from '@angular/core';

import { ScrapeService } from '../services/scrape.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  header = 'Custom Toolbar';

  constructor(private scrapeService: ScrapeService) { }

  ngOnInit(): void {
    this.scrapeService.scrapePage();
  }
}
