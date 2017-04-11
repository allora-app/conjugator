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
  selectedImage: object = it;
  showImage = true;

  languages = [
    { value: 'IT', viewValue: 'Italian', image: it },
    { value: 'ES', viewValue: 'Spanish', image: es }
  ];

  onChange(lang: any) {
    if(lang === 'IT') {
      this.selectedImage = it;
    } else if(lang === 'ES') {
      this.selectedImage = es;
    }
  }

  onOpen() {
    this.showImage = false;
  }

  onClose() {
    this.showImage = true;
  }
}
