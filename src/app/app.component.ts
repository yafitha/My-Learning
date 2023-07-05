import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  password = '';
  isuseNumbers = false;
  isuseLetters = false;
  isuseSymbols = false;

  OnChangeUseNumbers() {
    this.isuseNumbers = !this.isuseNumbers;
  }
  OnChangeUseLetters() {
    this.isuseLetters = !this.isuseLetters;
  }
  OnChangeUseSymbols() {
    this.isuseSymbols = !this.isuseSymbols;
  }
  OnButtonClick() {
    this.password = "'eee";
  }

  onChangeLenght(event: any) {
    const inputValue = event.target.value;
    var res = parseInt(inputValue);
    if (!isNaN(res)) {
      this.length = res;
    }
  }
}
