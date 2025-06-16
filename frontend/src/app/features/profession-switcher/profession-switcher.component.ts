import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { ProfessionService } from '../../core/services/profession.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profession-switcher',
  standalone: true,
  imports: [CommonModule, MatSelectModule],
  templateUrl: './profession-switcher.component.html',
  styleUrls: ['./profession-switcher.component.css']
})
export class ProfessionSwitcherComponent {
  professions$ = this.professionService.getProfessions();
  activeProfession$ = this.professionService.activeProfession$;

  constructor(private professionService: ProfessionService) {}

  select(professionId: string) {
    this.professionService.setActiveProfession(professionId);
  }
}
