import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly t = inject(LanguageService).t;
}