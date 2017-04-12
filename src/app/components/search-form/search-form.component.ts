import { Component } from '@angular/core';

var it = require("../../../assets/it.png");
var es = require("../../../assets/es.png");

const Italian = 'it';
const Spanish = 'es';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  selectedLanguage: string;
  selectedImage: string;
  searchVerb: string;

  languages = [
    { value: Italian, viewValue: 'Italian', image: it },
    { value: Spanish, viewValue: 'Spanish', image: es }
  ];

  constructor() {
    this.selectedLanguage = Italian;
    this.selectedImage = it;
  }

  onChange(lang: any) {
    if(lang === Italian) {
      this.selectedImage = it;
    } else if(lang === Spanish) {
      this.selectedImage = es;
    }
  }

  search() {
    console.log(this.searchVerb);
  }
}
