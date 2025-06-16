import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DocumentService } from '../../core/services/document.service';
import { Document } from '../../core/models/document.model';
import { Observable } from 'rxjs';
import { DocumentTileComponent } from './components/document-tile.component';
import { DocumentFormComponent } from './components/document-form.component';

@Component({
  selector: 'app-documents-dashboard',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule,
            DocumentTileComponent, DocumentFormComponent],
  templateUrl: './documents-dashboard.component.html',
  styleUrls: ['./documents-dashboard.component.css']
})
export class DocumentsDashboardComponent {
  documents$: Observable<Document[]> = this.documentsService.getDocuments();

  constructor(private documentsService: DocumentService) {}

  addDocument() {
    // open dialog placeholder
  }
}
