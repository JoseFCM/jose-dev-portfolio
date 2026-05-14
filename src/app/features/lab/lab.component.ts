import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { LAB_TOOLS, LabToolStatus } from '../../core/data/lab.data';

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.scss',
})
export class LabComponent {
  readonly t = inject(LanguageService).t;

  readonly tools = LAB_TOOLS;

  getToolText(key: string): string {
    const [toolKey, propertyKey] = key.split('.');

    const tools = this.t().home.lab.tools as Record<string, Record<string, string>>;

    return tools[toolKey]?.[propertyKey] ?? '';
  }

  getTagText(key: string): string {
    const tags = this.t().labPage.tags as Record<string, string>;

    return tags[key] ?? key;
  }

  getStatusText(status: LabToolStatus): string {
    return this.t().labPage.status[status];
  }

  getActionText(id: string): string {
    return id === 'landing-demos'
      ? this.t().labPage.actions.viewDemos
      : this.t().labPage.actions.viewTool;
  }
}