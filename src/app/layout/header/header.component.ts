import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, PLATFORM_ID, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';

type ThemeMode = 'dark' | 'light';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly document = inject(DOCUMENT);
  isScrolled = false;
  theme: ThemeMode = 'dark';
  readonly languageService = inject(LanguageService);
  readonly t = this.languageService.t;
  readonly language = this.languageService.language;

  private readonly platformId = inject(PLATFORM_ID);

  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  navItems = [
    { labelKey: 'home', path: '/' },
    { labelKey: 'projects', path: '/projects' },
    { labelKey: 'lab', path: '/lab' },
    { labelKey: 'education', path: '/education' },
    { labelKey: 'contact', path: '/contact' },
  ] as const;

  constructor() {
    if (!this.isBrowser) {
      return;
    }

    const savedTheme = localStorage.getItem('portfolio_theme') as ThemeMode | null;

    this.theme = savedTheme ?? 'dark';

    this.applyTheme();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';

    if (this.isBrowser) {
      localStorage.setItem('portfolio_theme', this.theme);
      this.applyTheme();
    }
  }

  toggleLanguage(): void {
    this.languageService.nextLanguage();
  }

  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.updateBodyScroll();
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.updateBodyScroll();
  }

  private updateBodyScroll(): void {
    if (!this.isBrowser) {
      return;
    }

    this.document.body.classList.toggle('menu-open', this.isMobileMenuOpen);
  }

  private applyTheme(): void {
    if (!this.isBrowser) {
      return;
    }

    document.documentElement.setAttribute('data-theme', this.theme);
  }
}