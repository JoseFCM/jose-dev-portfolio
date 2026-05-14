import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/projects/projects.component').then(
            (m) => m.ProjectsComponent
          ),
      },
      {
        path: 'education',
        loadComponent: () =>
          import('./features/education/education.component').then((m) => m.EducationComponent),
      },
      {
        path: 'lab',
        loadComponent: () =>
          import('./features/lab/lab.component').then((m) => m.LabComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];