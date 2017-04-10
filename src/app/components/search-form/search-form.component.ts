import { Component } from '@angular/core';

var it = require("../../../assets/Italy.png");
var es = require("../../../assets/Spain.png")

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  selectedLanguage: string;

  languages = [
    { value: 'Italy', viewValue: 'Italian', image: it },
    { value: 'Spain', viewValue: 'Spanish', image: es }
  ];
}
