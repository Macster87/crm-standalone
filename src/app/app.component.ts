import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateSyntaxComponent } from './components/template-syntax/template-syntax.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TemplateSyntaxComponent,
    NavigationComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'crm-standalone';
}
