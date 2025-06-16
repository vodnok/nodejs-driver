import { Routes } from '@angular/router';
import { DocumentsDashboardComponent } from './features/documents/documents-dashboard.component';

export const APP_ROUTES: Routes = [
  { path: '', component: DocumentsDashboardComponent },
  { path: '**', redirectTo: '' }
];
