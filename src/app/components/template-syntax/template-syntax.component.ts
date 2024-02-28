import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-syntax',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-syntax.component.html',
  styleUrl: './template-syntax.component.css',
})
export class TemplateSyntaxComponent {
  value1: string = 'sdaasdk';
  valueNum = 12312394123.123;
  isDisabled = true;
  liste: Array<number> = [];
  customer: Object = {
    id: 1,
    name: 'Tim',
  };

  constructor() {
    this.liste = this.randomNumbersBetween(1, 100);
  }

  randomNumbersBetween(min: number, max: number): Array<number> {
    const result = [];
    for (let index = 0; index <= 10; index++) {
      result.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return result;
  }

  formSubmitEvent(event: Event) {
    console.log(event);
  }
}
