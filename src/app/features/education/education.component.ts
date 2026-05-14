import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  readonly t = inject(LanguageService).t;
}