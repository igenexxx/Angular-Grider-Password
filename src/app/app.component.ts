import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  passwordLength = 0;

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClicked() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  onChangeLength($event: Event) {
    // @ts-ignore
    const { target: { value }} = $event;
    const parsedNumber = parseInt(value, 10);

    if (!isNaN(parsedNumber)) {
      this.passwordLength = parsedNumber;
    }

    console.log(value);
  }

  isDisabledButton() {
    return !(this.passwordLength && (this.includeSymbols || this.includeLetters || this.includeNumbers));
  }
}
