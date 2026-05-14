import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { PORTFOLIO_PROJECTS, ProjectStatus } from '../../core/data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly t = inject(LanguageService).t;

  readonly projects = PORTFOLIO_PROJECTS;

  getProjectText(key: string): string {
    const [projectKey, propertyKey] = key.split('.');

    const items = this.t().home.projects.items as Record<string, Record<string, string>>;

    return items[projectKey]?.[propertyKey] ?? '';
  }

  getTechText(key: string): string {
    const tech = this.t().home.projects.tech as Record<string, string>;

    return tech[key] ?? key;
  }

  getStatusText(status: ProjectStatus): string {
    return this.t().projectsPage.status[status];
  }

  getStatusClass(status: ProjectStatus): string {
    return status === 'active' ? 'active' : status === 'soon' ? 'warning' : '';
  }
}