import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { Language, translations } from './translations';

const STORAGE_KEY = 'portfolio_language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  private readonly languages: Language[] = ['es', 'en', 'pt'];

  readonly language = signal<Language>('es');

  readonly t = computed(() => translations[this.language()]);

  constructor() {
    if (!this.isBrowser()) {
      return;
    }

    const savedLanguage = localStorage.getItem(STORAGE_KEY) as Language | null;

    if (savedLanguage && this.languages.includes(savedLanguage)) {
      this.language.set(savedLanguage);
    }

    this.applyDocumentLanguage();
  }

  nextLanguage(): void {
    const currentIndex = this.languages.indexOf(this.language());
    const nextIndex = (currentIndex + 1) % this.languages.length;
    this.setLanguage(this.languages[nextIndex]);
  }

  setLanguage(language: Language): void {
    this.language.set(language);

    if (!this.isBrowser()) {
      return;
    }

    localStorage.setItem(STORAGE_KEY, language);
    this.applyDocumentLanguage();
  }

  private applyDocumentLanguage(): void {
    this.document.documentElement.lang = this.language();
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}