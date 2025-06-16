import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Document } from '../models/document.model';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  private documents = new BehaviorSubject<Document[]>([
    {
      id: '1',
      title: 'Formation A',
      startDate: new Date('2023-01-01'),
      endDate: new Date('2023-01-10'),
      duration: '10h',
      description: 'Formation test'
    }
  ]);

  documents$ = this.documents.asObservable();

  getDocuments(): Observable<Document[]> {
    return this.documents$;
  }

  addDocument(doc: Omit<Document, 'id'>) {
    const newDoc: Document = { ...doc, id: uuid() };
    this.documents.next([...this.documents.value, newDoc]);
  }

  updateDocument(updated: Document) {
    this.documents.next(this.documents.value.map(d => d.id === updated.id ? updated : d));
  }

  deleteDocument(id: string) {
    this.documents.next(this.documents.value.filter(d => d.id !== id));
  }
}
