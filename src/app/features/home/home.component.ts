import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { LanguageService } from '../../core/i18n/language.service';
import { PORTFOLIO_PROJECTS } from '../../core/data/projects.data';
import { LAB_TOOLS } from '../../core/data/lab.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealOnScrollDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly t = inject(LanguageService).t;

  readonly featuredProjects = PORTFOLIO_PROJECTS
    .filter(project => project.featured)
    .slice(0, 3);

  readonly featuredLabTools = LAB_TOOLS
    .filter(tool => tool.featured)
    .slice(0, 4);

  getProjectText(key: string): string {
    const [projectKey, propertyKey] = key.split('.');

    const items = this.t().home.projects.items as Record<string, Record<string, string>>;

    return items[projectKey]?.[propertyKey] ?? '';
  }

  getTechText(key: string): string {
    const tech = this.t().home.projects.tech as Record<string, string>;

    return tech[key] ?? key;
  }

  getLabToolText(key: string): string {
    const [toolKey, propertyKey] = key.split('.');

    const tools = this.t().home.lab.tools as Record<string, Record<string, string>>;

    return tools[toolKey]?.[propertyKey] ?? '';
  }
}