import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateSyntaxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crm-standalone';
}
