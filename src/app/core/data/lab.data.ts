export type LabToolStatus = 'soon' | 'planned' | 'collection';

export interface LabToolTag {
    labelKey: string;
}

export interface LabTool {
    id: string;
    featured: boolean;
    number: string;
    icon: string;
    iconClass?: string;
    status: LabToolStatus;
    titleKey: string;
    descriptionKey: string;
    tags: LabToolTag[];
    link: string;
}

export const LAB_TOOLS: LabTool[] = [
    {
        id: 'json-viewer',
        featured: true,
        number: '01',
        icon: '</>',
        iconClass: 'ri-code-s-slash-line',
        status: 'soon',
        titleKey: 'jsonViewer.title',
        descriptionKey: 'jsonViewer.description',
        tags: [
            { labelKey: 'angular' },
            { labelKey: 'utility' },
            { labelKey: 'json' },
        ],
        link: '/lab',
    },
    {
        id: 'password-generator',
        featured: true,
        number: '02',
        icon: '▣',
        iconClass: 'ri-lock-password-line',
        status: 'planned',
        titleKey: 'passwordGenerator.title',
        descriptionKey: 'passwordGenerator.description',
        tags: [
            { labelKey: 'security' },
            { labelKey: 'tool' },
            { labelKey: 'typescript' },
        ],
        link: '/lab',
    },
    {
        id: 'base64-tools',
        featured: true,
        number: '03',
        icon: '64',
        status: 'planned',
        titleKey: 'base64.title',
        descriptionKey: 'base64.description',
        tags: [
            { labelKey: 'base64' },
            { labelKey: 'frontend' },
            { labelKey: 'tool' },
        ],
        link: '/lab',
    },
    {
        id: 'landing-demos',
        featured: true,
        number: '04',
        icon: '▰',
        iconClass: 'ri-layout-4-line',
        status: 'collection',
        titleKey: 'landingDemos.title',
        descriptionKey: 'landingDemos.description',
        tags: [
            { labelKey: 'uiux' },
            { labelKey: 'landing' },
            { labelKey: 'animations' },
        ],
        link: '/projects',
    },
];