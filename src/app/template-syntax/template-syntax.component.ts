import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-syntax.component.html',
  styleUrl: './template-syntax.component.css',
})
export class TemplateSyntaxComponent {
  public value1: string = 'sdaasdk';
  public valueNum = 12312394123.123;
  public isDisabled = true;
  public liste = ['Armin', 'Bärbel', 'Charlie', 'Dora', 'Emil', 'Friedrich'];
}
