export type Language = 'es' | 'en' | 'pt';

export const translations = {
    // Español
    es: {
        nav: {
            home: 'Inicio',
            projects: 'Proyectos',
            lab: 'Lab',
            education: 'Formación',
            contact: 'Contacto',
            cv: 'Descargar CV',
        },
        common: {
            currentLanguage: 'Español',
        },
        home: {
            hero: {
                badge: 'Disponible para nuevos proyectos',
                title: 'Desarrollador de Software',
                titleSecondLine: '& Diseño UI.',
                description:
                    'Especializado en crear experiencias rápidas, escalables y con arquitectura limpia.',
                primaryCta: 'Mi trabajo',
                secondaryCta: 'Explorar Lab',
                statYears: '+6',
                statYearsLabel: 'Años creando software',
                labTitle: 'Lab',
                labDescription: 'Demos, landings y herramientas',
            },
            about: {
                kicker: 'Sobre mí',

                title:
                    'Desarrollador web enfocado en productos modernos, escalables y bien construidos.',

                descriptionOne:
                    'Soy desarrollador de software con foco en frontend moderno, pero también construyo backend, APIs y soluciones cloud. Trabajo principalmente con Angular, TypeScript, Node.js, AWS y MySQL para crear aplicaciones web escalables, plataformas internas e integraciones empresariales.',

                descriptionTwo:
                    'Me gusta transformar ideas en productos funcionales: interfaces limpias, experiencias rápidas y arquitecturas que realmente soporten el crecimiento del proyecto. También desarrollo apps Android con Kotlin y Jetpack Compose cuando quiero llevar una idea al mundo móvil.',

                stackTitle: 'Stack principal',

                frontend: 'Frontend',
                backend: 'Backend',
                cloud: 'Cloud & Data',
                mobile: 'Mobile',

                technologies: {
                    angular: 'Angular',
                    typescript: 'TypeScript',
                    javascript: 'JavaScript',
                    scss: 'SCSS',

                    node: 'Node.js',
                    apis: 'APIs',
                    jwt: 'JWT',
                    microservices: 'Microservicios',

                    lambda: 'AWS Lambda',
                    apiGateway: 'API Gateway',
                    cloudfront: 'CloudFront',
                    mysql: 'MySQL',

                    kotlin: 'Kotlin',
                    compose: 'Jetpack Compose',
                    android: 'Android',
                },
            },
            projects: {
                kicker: 'Proyectos',
                title: 'Ideas, productos y demos que irán',
                titleHighlight: 'creciendo dentro del portafolio.',
                description:
                    'Aquí compartiré proyectos personales, herramientas útiles y experimentos que reflejan mi forma de construir software.',

                stats: {
                    baseProjects: 'Proyectos base',
                    plannedTools: 'Herramientas planeadas',
                    experienceYears: 'Años de experiencia',
                },

                tech: {
                    angular: 'Angular',
                    scss: 'SCSS',
                    typescript: 'TypeScript',
                    vercel: 'Vercel',
                    tools: 'Tools',
                    ui: 'UI',
                    ux: 'UX',
                },

                items: {
                    portfolio: {
                        tag: 'Portfolio',
                        title: 'José Dev Portfolio',
                        description:
                            'Sitio personal moderno construido con Angular, diseño responsive, animaciones y arquitectura preparada para crecer.',
                        imageAlt: 'Vista previa del portafolio',
                        action: 'Ver proyecto',
                    },

                    tools: {
                        tag: 'Developer Lab',
                        title: 'Herramientas web',
                        description:
                            'Espacio para publicar utilidades como JSON Viewer, generador de contraseñas, Base64 tools y experimentos frontend.',
                        imageAlt: 'Vista previa del Developer Lab',
                        action: 'Explorar Lab',
                    },

                    landings: {
                        tag: 'Landing demos',
                        title: 'Plantillas comerciales',
                        description:
                            'Colección futura de landings modernas para negocios, SaaS, servicios profesionales y prototipos visuales.',
                        imageAlt: 'Vista previa de landings',
                        action: 'Ver demos',
                    },
                },
            },
            experience: {
                kicker: 'EXPERIENCIA',

                title: 'Experiencia construyendo soluciones reales para productos web, móviles e integraciones.',

                description:
                    'He participado en plataformas empresariales donde el frontend, backend, automatización e integración con servicios externos trabajan juntos para resolver flujos de negocio reales.',

                professional: {
                    title: 'Experiencia profesional',

                    items: {
                        current: {
                            label: 'Actualidad',
                            role: 'Desarrollador web / frontend',
                            company: 'Proximate',
                            description:
                                'Desarrollo de interfaces web, flujos empresariales, dashboards, integraciones backend y soluciones cloud para productos internos y clientes.',
                        },

                        enterprise: {
                            label: 'Proyectos',
                            role: 'Xtracking & Digitalk',
                            company: 'Productos empresariales',
                            description:
                                'Participación en plataformas orientadas a medición de experiencia, analítica, comunicación con asesores, reglas de asignación e integraciones como Salesforce.',
                        },

                        personal: {
                            label: 'Personal',
                            role: 'Aplicaciones y experimentos propios',
                            company: 'Web & Mobile',
                            description:
                                'Construcción de ideas personales, apps Android, herramientas web, landings y experimentos para seguir explorando diseño, producto y tecnología.',
                        },
                    },
                },

                value: {
                    title: 'Cómo aporto valor',

                    items: {
                        frontend: {
                            title: 'Frontend con criterio',
                            description:
                                'Interfaces claras, modernas y pensadas para usuarios reales.',
                        },

                        fullstack: {
                            title: 'Visión fullstack',
                            description:
                                'Capacidad para conectar UI, APIs, base de datos y servicios cloud.',
                        },

                        product: {
                            title: 'Responsabilidad de producto',
                            description:
                                'Participación en proyectos, tareas, decisiones técnicas y entregas.',
                        },
                    },
                },

                stats: {
                    years: '+6',
                    description:
                        'Años construyendo software y aprendiendo de productos reales.',
                },
            },
            lab: {
                kicker: 'Developer Lab',
                title: 'Un espacio para experimentar, construir y publicar',
                titleHighlight: 'ideas rápidas.',
                description:
                    'Aquí irán herramientas web, landings, componentes UI y demos interactivas para practicar, reutilizar y compartir soluciones útiles.',
                cta: 'Explorar el Lab',

                features: {
                    experimentation: {
                        title: 'Experimentación',
                        description: 'Nuevas ideas y tecnologías',
                    },
                    cleanCode: {
                        title: 'Código limpio',
                        description: 'Escalable y mantenible',
                    },
                    quickIteration: {
                        title: 'Iteración rápida',
                        description: 'Mejora continua',
                    },
                },

                tools: {
                    jsonViewer: {
                        title: 'JSON Viewer',
                        description: 'Visualiza, formatea y valida JSON de forma rápida.',
                    },
                    passwordGenerator: {
                        title: 'Password Generator',
                        description: 'Genera contraseñas seguras con opciones personalizables.',
                    },
                    base64: {
                        title: 'Base64 Tools',
                        description: 'Codifica y decodifica texto a Base64 fácilmente.',
                    },
                    landingDemos: {
                        title: 'Landing Demos',
                        description: 'Colección de landings modernas para inspirar proyectos.',
                    },
                },
            },
        },
        projectsPage: {
            kicker: 'Proyectos',
            title: 'Proyectos que generan',
            titleHighlight: 'impacto.',
            description:
                'Aquí encontrarás una selección de aplicaciones, herramientas y experimentos desarrollados con enfoque en rendimiento, experiencia de usuario y buenas prácticas.',

            status: {
                active: 'En desarrollo',
                soon: 'Próximamente',
                planned: 'Planeado',
            },

            links: {
                demo: 'Ver demo',
                preview: 'Vista previa',
                code: 'Código',
                details: 'Detalles',
            },

            cta: {
                title: '¿Tienes una idea en mente?',
                description:
                    'Estoy disponible para trabajar en proyectos desafiantes y crear soluciones increíbles.',
                button: 'Hablemos',
            },
        },
        labPage: {
            kicker: 'Developer Lab',
            title: 'Herramientas y experimentos para construir',
            titleHighlight: 'mejores experiencias.',
            description:
                'Un espacio para publicar utilidades frontend, demos técnicas, componentes visuales, landings y pequeños productos interactivos.',

            status: {
                soon: 'Disponible pronto',
                planned: 'Planeado',
                collection: 'Colección',
            },

            tags: {
                angular: 'Angular',
                utility: 'Utility',
                json: 'JSON',
                security: 'Security',
                tool: 'Tool',
                typescript: 'TypeScript',
                base64: 'Base64',
                frontend: 'Frontend',
                uiux: 'UI/UX',
                landing: 'Landing',
                animations: 'Animations',
            },

            actions: {
                viewTool: 'Ver herramienta',
                viewDemos: 'Ver demos',
            },

            preview: {
                title: 'SaaS Landing',
                description: 'Hero · Pricing · CTA',
            },
        },
        educationPage: {
            kicker: 'Formación',
            title: 'Formación académica, aprendizaje continuo y',
            titleHighlight: 'certificaciones.',
            description:
                'Mi camino combina experiencia práctica construyendo software con formación académica, cursos técnicos y aprendizaje constante en desarrollo web, móvil, arquitectura y cloud.',

            profile: {
                role: 'Desarrollador de Sotware',
                name: 'José Farith Caviedes Medina',
                stack: 'Frontend · Backend · Mobile · Cloud',
            },

            formal: {
                title: 'Educación formal',
                description: 'Estudios principales que han fortalecido mi base profesional.',
                support: 'Ver soporte',
                certificate: 'Ver certificado',

                items: {
                    systemsEngineering: {
                        date: '2023 - Actualidad',
                        title: 'Ingeniería de Sistemas',
                        institution: 'Universidad Nacional Abierta y a Distancia',
                        description:
                            'Proceso de formación profesional enfocado en ingeniería, sistemas y desarrollo de software.',
                    },
                    softwareTechnology: {
                        date: '2022 - 2025',
                        title: 'Tecnólogo en Análisis y Desarrollo de Software',
                        institution: 'SENA',
                        description:
                            'Formación técnica en desarrollo de software, análisis, diseño, bases de datos y construcción de aplicaciones.',
                    },
                    systemsTechnician: {
                        date: '2019 - 2020',
                        title: 'Técnico en Sistemas',
                        institution: 'Politécnico Tolimense',
                        description:
                            'Base inicial en competencias de sistemas, soporte, tecnología y fundamentos de software.',
                    },
                },
            },

            focus: {
                title: 'Áreas de enfoque',
                description: 'Lo que sigo fortaleciendo.',
                frontend: 'Frontend moderno',
                cloud: 'Arquitecturas cloud',
                database: 'Bases de datos',
                mobile: 'Desarrollo móvil',
                progressTitle: 'Aprendizaje continuo',
                progressDescription: 'Siempre explorando nuevas tecnologías',
            },

            certifications: {
                title: 'Cursos y certificaciones',
                description:
                    'Espacio para certificados técnicos, cursos y aprendizajes complementarios.',
                download: 'Descargar certificado',

                items: {
                    angular: {
                        type: 'Frontend',
                        title: 'Angular avanzado',
                        description:
                            'Componentes, arquitectura, servicios, routing, buenas prácticas y estructura escalable.',
                    },
                    aws: {
                        type: 'Cloud',
                        title: 'AWS Serverless',
                        description:
                            'Lambda, API Gateway, CloudFront, S3, tareas programadas e integración de servicios.',
                    },
                    kotlin: {
                        type: 'Mobile',
                        title: 'Kotlin & Jetpack Compose',
                        description:
                            'Construcción de interfaces móviles modernas, arquitectura y experiencia de usuario.',
                    },
                },
            },
        },
        contactPage: {
            kicker: 'Contacto',
            title: 'Conectemos y creemos',
            titleHighlight: 'algo increíble.',
            description:
                'Si tienes una idea, una landing, una aplicación web, una herramienta interna o simplemente quieres conectar profesionalmente, aquí tienes mis canales principales.',

            email: {
                label: 'Email principal',
                address: 'jfcaviedes16@gmail.com',
                description: 'Ideal para proyectos, propuestas o contacto directo.',
            },

            social: {
                linkedin: 'Conectar profesionalmente',
                github: 'Ver repositorios',
                instagram: 'Contenido y proyectos',
                facebook: 'Perfil social',
            },

            availability: 'Abierto a nuevos proyectos',
            availableForTitle: 'Disponible para',

            services: {
                landings: 'Landings modernas',
                angular: 'Aplicaciones Angular',
                prototypes: 'Prototipos web',
                tools: 'Herramientas internas',
                cloud: 'APIs e integraciones cloud',
            },

            note: {
                title: 'Respuesta rápida',
                description:
                    'Normalmente puedo revisar mensajes y propuestas con buen contexto técnico.',
            },
        },
    },

    // Ingles
    en: {
        nav: {
            home: 'Home',
            projects: 'Projects',
            lab: 'Lab',
            education: 'Education',
            contact: 'Contact',
            cv: 'Download CV',
        },
        common: {
            currentLanguage: 'English',
        },
        home: {
            hero: {
                badge: 'Available for new projects',
                title: 'Software Developer',
                titleSecondLine: '& UI Design.',
                description:
                    'Specializing in creating fast, scalable experiences with clean architecture.',
                primaryCta: 'My work',
                secondaryCta: 'Explore Lab',
                statYears: '+6',
                statYearsLabel: 'Years creating software',
                labTitle: 'Lab',
                labDescription: 'Demos, landings, and tools',
            },
            about: {
                kicker: 'About me',

                title:
                    'Web developer focused on modern, scalable, and well-built products.',

                descriptionOne:
                    'I am a software developer with a focus on modern frontend, but I also build backend, APIs, and cloud solutions. I mainly work with Angular, TypeScript, Node.js, AWS, and MySQL to create scalable web applications, internal platforms, and enterprise integrations.',

                descriptionTwo:
                    'I enjoy transforming ideas into functional products: clean interfaces, fast experiences, and architectures that truly support project growth. I also develop Android apps with Kotlin and Jetpack Compose when I want to take an idea to the mobile world.',

                stackTitle: 'Main stack',

                frontend: 'Frontend',
                backend: 'Backend',
                cloud: 'Cloud & Data',
                mobile: 'Mobile',

                technologies: {
                    angular: 'Angular',
                    typescript: 'TypeScript',
                    javascript: 'JavaScript',
                    scss: 'SCSS',

                    node: 'Node.js',
                    apis: 'APIs',
                    jwt: 'JWT',
                    microservices: 'Microservices',

                    lambda: 'AWS Lambda',
                    apiGateway: 'API Gateway',
                    cloudfront: 'CloudFront',
                    mysql: 'MySQL',

                    kotlin: 'Kotlin',
                    compose: 'Jetpack Compose',
                    android: 'Android',
                },
            },
            projects: {
                kicker: 'Projects',
                title: 'Ideas, products, and demos that will be',
                titleHighlight: 'growing within the portfolio.',
                description:
                    'Here I will share personal projects, useful tools, and experiments that reflect my way of building software.',

                stats: {
                    baseProjects: 'Base projects',
                    plannedTools: 'Planned tools',
                    experienceYears: 'Years of experience',
                },

                tech: {
                    angular: 'Angular',
                    scss: 'SCSS',
                    typescript: 'TypeScript',
                    vercel: 'Vercel',
                    tools: 'Tools',
                    ui: 'UI',
                    ux: 'UX',
                },

                items: {
                    portfolio: {
                        tag: 'Portfolio',
                        title: 'José Dev Portfolio',
                        description:
                            'Modern personal site built with Angular, responsive design, animations, and an architecture ready to scale.',
                        imageAlt: 'Portfolio preview',
                        action: 'View project',
                    },

                    tools: {
                        tag: 'Developer Lab',
                        title: 'Web tools',
                        description:
                            'A space to publish utilities like JSON Viewer, password generator, Base64 tools, and frontend experiments.',
                        imageAlt: 'Developer Lab preview',
                        action: 'Explore Lab',
                    },

                    landings: {
                        tag: 'Landing demos',
                        title: 'Commercial templates',
                        description:
                            'Future collection of modern landing pages for businesses, SaaS, professional services, and visual prototypes.',
                        imageAlt: 'Landings preview',
                        action: 'View demos',
                    },
                },
            },
            experience: {
                kicker: 'EXPERIENCE',

                title: 'Experience building real solutions for web, mobile and integrated products.',

                description:
                    'I have participated in enterprise platforms where frontend, backend, automation and third-party integrations work together to solve real business flows.',

                professional: {
                    title: 'Professional experience',

                    items: {
                        current: {
                            label: 'Current',
                            role: 'Web / Frontend Developer',
                            company: 'Proximate',
                            description:
                                'Development of web interfaces, enterprise workflows, dashboards, backend integrations and cloud solutions for internal and client products.',
                        },

                        enterprise: {
                            label: 'Projects',
                            role: 'Xtracking & Digitalk',
                            company: 'Enterprise products',
                            description:
                                'Participation in platforms focused on experience measurement, analytics, advisor communication, assignment rules and integrations such as Salesforce.',
                        },

                        personal: {
                            label: 'Personal',
                            role: 'Personal apps and experiments',
                            company: 'Web & Mobile',
                            description:
                                'Building personal ideas, Android apps, web tools, landing pages and experiments to continue exploring design, product and technology.',
                        },
                    },
                },

                value: {
                    title: 'How I add value',

                    items: {
                        frontend: {
                            title: 'Thoughtful frontend',
                            description:
                                'Clear, modern interfaces designed for real users.',
                        },

                        fullstack: {
                            title: 'Fullstack vision',
                            description:
                                'Ability to connect UI, APIs, databases and cloud services.',
                        },

                        product: {
                            title: 'Product ownership',
                            description:
                                'Participation in projects, tasks, technical decisions and deliveries.',
                        },
                    },
                },

                stats: {
                    years: '+6',
                    description:
                        'Years building software and learning from real products.',
                },
            },
            lab: {
                kicker: 'Developer Lab',
                title: 'A space to experiment, build and publish',
                titleHighlight: 'quick ideas.',
                description:
                    'This is where web tools, landing pages, UI components and interactive demos will live to practice, reuse and share useful solutions.',
                cta: 'Explore the Lab',

                features: {
                    experimentation: {
                        title: 'Experimentation',
                        description: 'New ideas and technologies',
                    },
                    cleanCode: {
                        title: 'Clean code',
                        description: 'Scalable and maintainable',
                    },
                    quickIteration: {
                        title: 'Fast iteration',
                        description: 'Continuous improvement',
                    },
                },

                tools: {
                    jsonViewer: {
                        title: 'JSON Viewer',
                        description: 'View, format and validate JSON quickly.',
                    },
                    passwordGenerator: {
                        title: 'Password Generator',
                        description: 'Generate secure passwords with customizable options.',
                    },
                    base64: {
                        title: 'Base64 Tools',
                        description: 'Encode and decode text to Base64 easily.',
                    },
                    landingDemos: {
                        title: 'Landing Demos',
                        description: 'A collection of modern landing pages to inspire projects.',
                    },
                },
            },
        },
        projectsPage: {
            kicker: 'Projects',
            title: 'Projects that create',
            titleHighlight: 'impact.',
            description:
                'Here you will find a selection of applications, tools and experiments built with a focus on performance, user experience and best practices.',

            status: {
                active: 'In development',
                soon: 'Coming soon',
                planned: 'Planned',
            },

            links: {
                demo: 'View demo',
                preview: 'Preview',
                code: 'Code',
                details: 'Details',
            },

            cta: {
                title: 'Have an idea in mind?',
                description:
                    'I am available to work on challenging projects and create incredible solutions.',
                button: 'Let’s talk',
            },
        },
        labPage: {
            kicker: 'Developer Lab',
            title: 'Tools and experiments to build',
            titleHighlight: 'better experiences.',
            description:
                'A space to publish frontend utilities, technical demos, visual components, landing pages and small interactive products.',

            status: {
                soon: 'Available soon',
                planned: 'Planned',
                collection: 'Collection',
            },

            tags: {
                angular: 'Angular',
                utility: 'Utility',
                json: 'JSON',
                security: 'Security',
                tool: 'Tool',
                typescript: 'TypeScript',
                base64: 'Base64',
                frontend: 'Frontend',
                uiux: 'UI/UX',
                landing: 'Landing',
                animations: 'Animations',
            },

            actions: {
                viewTool: 'View tool',
                viewDemos: 'View demos',
            },

            preview: {
                title: 'SaaS Landing',
                description: 'Hero · Pricing · CTA',
            },
        },
        educationPage: {
            kicker: 'Education',
            title: 'Academic background, continuous learning and',
            titleHighlight: 'certifications.',
            description:
                'My path combines hands-on experience building software with academic education, technical courses and continuous learning in web, mobile, architecture and cloud development.',

            profile: {
                role: 'Software Developer',
                name: 'José Farith Caviedes Medina',
                stack: 'Frontend · Backend · Mobile · Cloud',
            },

            formal: {
                title: 'Formal education',
                description: 'Main studies that have strengthened my professional foundation.',
                support: 'View support',
                certificate: 'View certificate',

                items: {
                    systemsEngineering: {
                        date: '2023 - Present',
                        title: 'Systems Engineering',
                        institution: 'Universidad Nacional Abierta y a Distancia',
                        description:
                            'Professional education process focused on engineering, systems and software development.',
                    },
                    softwareTechnology: {
                        date: '2022 - 2025',
                        title: 'Technologist in Software Analysis and Development',
                        institution: 'SENA',
                        description:
                            'Technical training in software development, analysis, design, databases and application development.',
                    },
                    systemsTechnician: {
                        date: '2019 - 2020',
                        title: 'Systems Technician',
                        institution: 'Politécnico Tolimense',
                        description:
                            'Initial foundation in systems skills, support, technology and software fundamentals.',
                    },
                },
            },

            focus: {
                title: 'Focus areas',
                description: 'What I continue to strengthen.',
                frontend: 'Modern frontend',
                cloud: 'Cloud architectures',
                database: 'Databases',
                mobile: 'Mobile development',
                progressTitle: 'Continuous learning',
                progressDescription: 'Always exploring new technologies',
            },

            certifications: {
                title: 'Courses and certifications',
                description:
                    'A space for technical certificates, courses and complementary learning.',
                download: 'Download certificate',

                items: {
                    angular: {
                        type: 'Frontend',
                        title: 'Advanced Angular',
                        description:
                            'Components, architecture, services, routing, best practices and scalable structure.',
                    },
                    aws: {
                        type: 'Cloud',
                        title: 'AWS Serverless',
                        description:
                            'Lambda, API Gateway, CloudFront, S3, scheduled tasks and service integration.',
                    },
                    kotlin: {
                        type: 'Mobile',
                        title: 'Kotlin & Jetpack Compose',
                        description:
                            'Building modern mobile interfaces, architecture and user experience.',
                    },
                },
            },
        },
        contactPage: {
            kicker: 'Contact',
            title: 'Let’s connect and build',
            titleHighlight: 'something incredible.',
            description:
                'If you have an idea, a landing page, a web application, an internal tool or simply want to connect professionally, here are my main channels.',

            email: {
                label: 'Main email',
                address: 'jfcaviedes16@gmail.com',
                description: 'Ideal for projects, proposals or direct contact.',
            },

            social: {
                linkedin: 'Connect professionally',
                github: 'View repositories',
                instagram: 'Content and projects',
                facebook: 'Social profile',
            },

            availability: 'Open to new projects',
            availableForTitle: 'Available for',

            services: {
                landings: 'Modern landing pages',
                angular: 'Angular applications',
                prototypes: 'Web prototypes',
                tools: 'Internal tools',
                cloud: 'APIs and cloud integrations',
            },

            note: {
                title: 'Quick response',
                description:
                    'I can usually review messages and proposals with good technical context.',
            },
        },
    },

    // Portugués
    pt: {
        nav: {
            home: 'Início',
            projects: 'Projetos',
            lab: 'Lab',
            education: 'Formação',
            contact: 'Contato',
            cv: 'Baixar CV',
        },
        common: {
            currentLanguage: 'Português',
        },
        home: {
            hero: {
                badge: 'Disponível para novos projetos',
                title: 'Desenvolvedor de Software',
                titleSecondLine: '& Design de UI.',
                description:
                    'Especializado em criar experiências rápidas, escaláveis e com arquitetura limpa.',
                primaryCta: 'Meu trabalho',
                secondaryCta: 'Explorar Lab',
                statYears: '+6',
                statYearsLabel: 'Anos criando software',
                labTitle: 'Lab',
                labDescription: 'Demos, landings e ferramentas',
            },
            about: {
                kicker: 'Sobre mim',

                title:
                    'Desenvolvedor web focado em produtos modernos, escaláveis e bem construídos.',

                descriptionOne:
                    'Sou desenvolvedor de software com foco em frontend moderno, mas também construo backend, APIs e soluções cloud. Trabalho principalmente com Angular, TypeScript, Node.js, AWS e MySQL para criar aplicações web escaláveis, plataformas internas e integrações empresariais.',

                descriptionTwo:
                    'Gosto de transformar ideias em produtos funcionais: interfaces limpas, experiências rápidas e arquiteturas que realmente suportem o crescimento do projeto. Também desenvolvo apps Android com Kotlin e Jetpack Compose quando quero levar uma ideia ao mundo móvel.',

                stackTitle: 'Stack principal',

                frontend: 'Frontend',
                backend: 'Backend',
                cloud: 'Cloud & Data',
                mobile: 'Mobile',

                technologies: {
                    angular: 'Angular',
                    typescript: 'TypeScript',
                    javascript: 'JavaScript',
                    scss: 'SCSS',

                    node: 'Node.js',
                    apis: 'APIs',
                    jwt: 'JWT',
                    microservices: 'Microsserviços',

                    lambda: 'AWS Lambda',
                    apiGateway: 'API Gateway',
                    cloudfront: 'CloudFront',
                    mysql: 'MySQL',

                    kotlin: 'Kotlin',
                    compose: 'Jetpack Compose',
                    android: 'Android',
                },
            },
            projects: {
                kicker: 'Projetos',
                title: 'Ideias, produtos e demos que irão',
                titleHighlight: 'crescendo dentro do portfólio.',
                description:
                    'Aqui compartilharei projetos pessoais, ferramentas úteis e experimentos que refletem minha forma de construir software.',

                stats: {
                    baseProjects: 'Projetos base',
                    plannedTools: 'Ferramentas planejadas',
                    experienceYears: 'Anos de experiência',
                },

                tech: {
                    angular: 'Angular',
                    scss: 'SCSS',
                    typescript: 'TypeScript',
                    vercel: 'Vercel',
                    tools: 'Tools',
                    ui: 'UI',
                    ux: 'UX',
                },

                items: {
                    portfolio: {
                        tag: 'Portfolio',
                        title: 'José Dev Portfolio',
                        description:
                            'Site pessoal moderno construído com Angular, design responsivo, animações e arquitetura preparada para crescer.',
                        imageAlt: 'Prévia do portfólio',
                        action: 'Ver projeto',
                    },

                    tools: {
                        tag: 'Developer Lab',
                        title: 'Ferramentas web',
                        description:
                            'Espaço para publicar utilidades como JSON Viewer, gerador de senhas, ferramentas Base64 e experimentos frontend.',
                        imageAlt: 'Prévia do Developer Lab',
                        action: 'Explorar Lab',
                    },

                    landings: {
                        tag: 'Landing demos',
                        title: 'Templates comerciais',
                        description:
                            'Futura coleção de landings modernas para negócios, SaaS, serviços profissionais e protótipos visuais.',
                        imageAlt: 'Prévia de landings',
                        action: 'Ver demos',
                    },
                },
            },
            experience: {
                kicker: 'EXPERIÊNCIA',

                title: 'Experiência construindo soluções reais para produtos web, mobile e integrações.',

                description:
                    'Participei de plataformas empresariais onde frontend, backend, automação e integrações com serviços externos trabalham juntos para resolver fluxos reais de negócio.',

                professional: {
                    title: 'Experiência profissional',

                    items: {
                        current: {
                            label: 'Atualidade',
                            role: 'Desenvolvedor web / frontend',
                            company: 'Proximate',
                            description:
                                'Desenvolvimento de interfaces web, fluxos empresariais, dashboards, integrações backend e soluções cloud para produtos internos e clientes.',
                        },

                        enterprise: {
                            label: 'Projetos',
                            role: 'Xtracking & Digitalk',
                            company: 'Produtos empresariais',
                            description:
                                'Participação em plataformas voltadas para medição de experiência, analytics, comunicação com consultores, regras de atribuição e integrações como Salesforce.',
                        },

                        personal: {
                            label: 'Pessoal',
                            role: 'Aplicações e experimentos próprios',
                            company: 'Web & Mobile',
                            description:
                                'Construção de ideias pessoais, apps Android, ferramentas web, landing pages e experimentos para continuar explorando design, produto e tecnologia.',
                        },
                    },
                },

                value: {
                    title: 'Como agrego valor',

                    items: {
                        frontend: {
                            title: 'Frontend com critério',
                            description:
                                'Interfaces claras, modernas e pensadas para usuários reais.',
                        },

                        fullstack: {
                            title: 'Visão fullstack',
                            description:
                                'Capacidade de conectar UI, APIs, banco de dados e serviços cloud.',
                        },

                        product: {
                            title: 'Responsabilidade de produto',
                            description:
                                'Participação em projetos, tarefas, decisões técnicas e entregas.',
                        },
                    },
                },

                stats: {
                    years: '+6',
                    description:
                        'Anos construindo software e aprendendo com produtos reais.',
                },
            },
            lab: {
                kicker: 'Developer Lab',
                title: 'Um espaço para experimentar, construir e publicar',
                titleHighlight: 'ideias rápidas.',
                description:
                    'Aqui ficarão ferramentas web, landings, componentes UI e demos interativas para praticar, reutilizar e compartilhar soluções úteis.',
                cta: 'Explorar o Lab',

                features: {
                    experimentation: {
                        title: 'Experimentação',
                        description: 'Novas ideias e tecnologias',
                    },
                    cleanCode: {
                        title: 'Código limpo',
                        description: 'Escalável e sustentável',
                    },
                    quickIteration: {
                        title: 'Iteração rápida',
                        description: 'Melhoria contínua',
                    },
                },

                tools: {
                    jsonViewer: {
                        title: 'JSON Viewer',
                        description: 'Visualize, formate e valide JSON rapidamente.',
                    },
                    passwordGenerator: {
                        title: 'Password Generator',
                        description: 'Gere senhas seguras com opções personalizáveis.',
                    },
                    base64: {
                        title: 'Base64 Tools',
                        description: 'Codifique e decodifique texto em Base64 facilmente.',
                    },
                    landingDemos: {
                        title: 'Landing Demos',
                        description: 'Coleção de landings modernas para inspirar projetos.',
                    },
                },
            },
        },
        projectsPage: {
            kicker: 'Projetos',
            title: 'Projetos que geram',
            titleHighlight: 'impacto.',
            description:
                'Aqui você encontrará uma seleção de aplicações, ferramentas e experimentos desenvolvidos com foco em performance, experiência do usuário e boas práticas.',

            status: {
                active: 'Em desenvolvimento',
                soon: 'Em breve',
                planned: 'Planejado',
            },

            links: {
                demo: 'Ver demo',
                preview: 'Prévia',
                code: 'Código',
                details: 'Detalhes',
            },

            cta: {
                title: 'Tem uma ideia em mente?',
                description:
                    'Estou disponível para trabalhar em projetos desafiadores e criar soluções incríveis.',
                button: 'Vamos conversar',
            },
        },
        labPage: {
            kicker: 'Developer Lab',
            title: 'Ferramentas e experimentos para construir',
            titleHighlight: 'melhores experiências.',
            description:
                'Um espaço para publicar utilidades frontend, demos técnicas, componentes visuais, landings e pequenos produtos interativos.',

            status: {
                soon: 'Disponível em breve',
                planned: 'Planejado',
                collection: 'Coleção',
            },

            tags: {
                angular: 'Angular',
                utility: 'Utility',
                json: 'JSON',
                security: 'Security',
                tool: 'Tool',
                typescript: 'TypeScript',
                base64: 'Base64',
                frontend: 'Frontend',
                uiux: 'UI/UX',
                landing: 'Landing',
                animations: 'Animations',
            },

            actions: {
                viewTool: 'Ver ferramenta',
                viewDemos: 'Ver demos',
            },

            preview: {
                title: 'SaaS Landing',
                description: 'Hero · Pricing · CTA',
            },
        },
        educationPage: {
            kicker: 'Formação',
            title: 'Formação acadêmica, aprendizado contínuo e',
            titleHighlight: 'certificações.',
            description:
                'Minha trajetória combina experiência prática construindo software com formação acadêmica, cursos técnicos e aprendizado constante em desenvolvimento web, mobile, arquitetura e cloud.',

            profile: {
                role: 'Software Developer',
                name: 'José Farith Caviedes Medina',
                stack: 'Frontend · Backend · Mobile · Cloud',
            },

            formal: {
                title: 'Educação formal',
                description: 'Estudos principais que fortaleceram minha base profissional.',
                support: 'Ver suporte',
                certificate: 'Ver certificado',

                items: {
                    systemsEngineering: {
                        date: '2023 - Atualidade',
                        title: 'Engenharia de Sistemas',
                        institution: 'Universidad Nacional Abierta y a Distancia',
                        description:
                            'Processo de formação profissional focado em engenharia, sistemas e desenvolvimento de software.',
                    },
                    softwareTechnology: {
                        date: '2022 - 2025',
                        title: 'Tecnólogo em Análise e Desenvolvimento de Software',
                        institution: 'SENA',
                        description:
                            'Formação técnica em desenvolvimento de software, análise, design, bancos de dados e construção de aplicações.',
                    },
                    systemsTechnician: {
                        date: '2019 - 2020',
                        title: 'Técnico em Sistemas',
                        institution: 'Politécnico Tolimense',
                        description:
                            'Base inicial em competências de sistemas, suporte, tecnologia e fundamentos de software.',
                    },
                },
            },

            focus: {
                title: 'Áreas de foco',
                description: 'O que continuo fortalecendo.',
                frontend: 'Frontend moderno',
                cloud: 'Arquiteturas cloud',
                database: 'Bancos de dados',
                mobile: 'Desenvolvimento mobile',
                progressTitle: 'Aprendizado contínuo',
                progressDescription: 'Sempre explorando novas tecnologias',
            },

            certifications: {
                title: 'Cursos e certificações',
                description:
                    'Espaço para certificados técnicos, cursos e aprendizados complementares.',
                download: 'Baixar certificado',

                items: {
                    angular: {
                        type: 'Frontend',
                        title: 'Angular avançado',
                        description:
                            'Componentes, arquitetura, serviços, routing, boas práticas e estrutura escalável.',
                    },
                    aws: {
                        type: 'Cloud',
                        title: 'AWS Serverless',
                        description:
                            'Lambda, API Gateway, CloudFront, S3, tarefas programadas e integração de serviços.',
                    },
                    kotlin: {
                        type: 'Mobile',
                        title: 'Kotlin & Jetpack Compose',
                        description:
                            'Construção de interfaces móveis modernas, arquitetura e experiência do usuário.',
                    },
                },
            },
        },
        contactPage: {
            kicker: 'Contato',
            title: 'Vamos conectar e criar',
            titleHighlight: 'algo incrível.',
            description:
                'Se você tem uma ideia, uma landing page, uma aplicação web, uma ferramenta interna ou simplesmente quer se conectar profissionalmente, aqui estão meus principais canais.',

            email: {
                label: 'Email principal',
                address: 'jfcaviedes16@gmail.com',
                description: 'Ideal para projetos, propostas ou contato direto.',
            },

            social: {
                linkedin: 'Conectar profissionalmente',
                github: 'Ver repositórios',
                instagram: 'Conteúdo e projetos',
                facebook: 'Perfil social',
            },

            availability: 'Aberto a novos projetos',
            availableForTitle: 'Disponível para',

            services: {
                landings: 'Landings modernas',
                angular: 'Aplicações Angular',
                prototypes: 'Protótipos web',
                tools: 'Ferramentas internas',
                cloud: 'APIs e integrações cloud',
            },

            note: {
                title: 'Resposta rápida',
                description:
                    'Normalmente posso revisar mensagens e propostas com bom contexto técnico.',
            },
        },
    },
} as const;

export type Translation = typeof translations.es;