export type ProjectStatus = 'active' | 'soon' | 'planned';

export interface ProjectTech {
    labelKey: string;
    icon?: string;
}

export interface PortfolioProject {
    id: string;
    featured: boolean;
    status: ProjectStatus;
    tagKey: string;
    titleKey: string;
    descriptionKey: string;
    image: string;
    imageAltKey: string;
    tech: ProjectTech[];
    actionLabelKey: string;
    actionLink: string;
    demoLink?: string;
    codeLink?: string;
    detailsLink?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
    {
        id: 'portfolio',
        featured: true,
        status: 'active',
        tagKey: 'portfolio.tag',
        titleKey: 'portfolio.title',
        descriptionKey: 'portfolio.description',
        image: 'assets/img/Home/project-porfolio.png',
        imageAltKey: 'portfolio.imageAlt',
        tech: [
            { labelKey: 'angular', icon: 'devicon-angularjs-plain colored' },
            { labelKey: 'scss', icon: 'devicon-sass-original colored' },
            { labelKey: 'vercel', icon: 'devicon-vercel-original' },
        ],
        actionLabelKey: 'portfolio.action',
        actionLink: '/projects',
    },
    {
        id: 'developer-lab',
        featured: true,
        status: 'soon',
        tagKey: 'tools.tag',
        titleKey: 'tools.title',
        descriptionKey: 'tools.description',
        image: 'assets/img/Home/project-porfolio.png',
        imageAltKey: 'tools.imageAlt',
        tech: [
            { labelKey: 'angular', icon: 'devicon-angularjs-plain colored' },
            { labelKey: 'typescript', icon: 'devicon-typescript-plain colored' },
            { labelKey: 'tools' },
        ],
        actionLabelKey: 'tools.action',
        actionLink: '/lab',
    },
    {
        id: 'landing-demos',
        featured: true,
        status: 'planned',
        tagKey: 'landings.tag',
        titleKey: 'landings.title',
        descriptionKey: 'landings.description',
        image: 'assets/img/Home/project-porfolio.png',
        imageAltKey: 'landings.imageAlt',
        tech: [
            { labelKey: 'ui' },
            { labelKey: 'ux' },
            { labelKey: 'angular', icon: 'devicon-angularjs-plain colored' },
        ],
        actionLabelKey: 'landings.action',
        actionLink: '/projects',
    },
];