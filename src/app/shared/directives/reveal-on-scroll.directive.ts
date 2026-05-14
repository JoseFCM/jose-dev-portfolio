import {
  AfterViewInit,
  Directive,
  ElementRef,
  PLATFORM_ID,
  Renderer2,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;

    this.renderer.addClass(element, 'reveal');

    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in window)) {
      this.renderer.addClass(element, 'reveal-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(element, 'reveal-visible');
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.16,
      }
    );

    observer.observe(element);
  }
}