import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Document } from '../../../core/models/document.model';

@Component({
  selector: 'app-document-tile',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './document-tile.component.html',
  styleUrls: ['./document-tile.component.css']
})
export class DocumentTileComponent {
  @Input() document!: Document;
}
