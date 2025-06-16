import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Profession } from '../models/profession.model';

@Injectable({ providedIn: 'root' })
export class ProfessionService {
  private professions: Profession[] = [
    { id: 'med', name: 'Médecin' },
    { id: 'nurse', name: 'Infirmier' }
  ];

  private activeProfession = new BehaviorSubject<string>('med');
  activeProfession$ = this.activeProfession.asObservable();

  getProfessions(): Observable<Profession[]> {
    return of(this.professions);
  }

  setActiveProfession(id: string) {
    this.activeProfession.next(id);
  }
}
