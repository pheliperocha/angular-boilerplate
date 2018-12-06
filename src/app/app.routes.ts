import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'components',
    pathMatch: 'full'
  },
  {
    path: 'components',
    component: AppComponent,
  },
  {
    path: '**',
    redirectTo: 'components',
  },
];
