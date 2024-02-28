import { Routes } from '@angular/router';
import { TemplateSyntaxComponent } from './components/template-syntax/template-syntax.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: '',
    component: TemplateSyntaxComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
