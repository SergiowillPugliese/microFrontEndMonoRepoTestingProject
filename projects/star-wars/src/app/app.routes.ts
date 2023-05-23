import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import("./home/home.component").then(c => c.HomeComponent) },
  { path: 'peoples', loadComponent: () => import("./components/people/people.component").then(c => c.PeopleComponent) }
];
