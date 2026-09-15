import { toAbsoluteUrl } from './paths';

export const siteConfig = {
  name: 'Juan Pablo Pinilla Guzman',
  shortName: 'Juan Pablo Pinilla',
  roleEs: 'Desarrollador Fullstack',
  roleEn: 'Fullstack Developer',
  location: 'Colombia · Disponible para trabajo remoto',
  locationEn: 'Colombia · Available for remote work',
  description:
    'Desarrollador fullstack con un año de experiencia profesional construyendo sistemas de gestión de extremo a extremo con C# (.NET), PostgreSQL, React y TypeScript.',
  descriptionEn:
    'Fullstack developer with one year of professional experience building end-to-end management systems with C# (.NET), PostgreSQL, React, and TypeScript.',
  url: toAbsoluteUrl('/'),
  github: 'https://github.com/JuanPabloPinillaGuzman',
  linkedin: 'https://www.linkedin.com/in/juan-pablo-pinilla-guzman-bb6b9b225',
  cvFile: '/cv/CV-Juan-Pablo-Pinilla.pdf',
  profileImage: '/images/profile/juan-pablo-pinilla.webp',
  ogImage: '/images/profile/og-juan-pablo-pinilla.jpg',
  profileImageAlt: 'Retrato profesional de Juan Pablo Pinilla'
} as const;

export const professionalSummary =
  'Desarrollador fullstack con un año de experiencia profesional construyendo sistemas de gestión de extremo a extremo, desde la API en C# (.NET) hasta la interfaz en React + TypeScript. Apasionado por la tecnología y la innovación digital como medio para conectar personas y resolver problemas reales. Me destaco por ser proactivo, responsable y con gran disposición para aprender, y valoro el trabajo en equipo, la adaptabilidad y el crecimiento constante.';

export const professionalSummaryEn =
  'Fullstack developer with one year of professional experience building end-to-end management systems, from the C# (.NET) API to the React + TypeScript interface. Passionate about technology and digital innovation as a way to connect people and solve real problems. I stand out for being proactive, responsible, and eager to learn, and I value teamwork, adaptability, and continuous growth.';

export const experience = [
  {
    roleEs: 'Desarrollador Fullstack',
    roleEn: 'Fullstack Developer',
    company: 'TICS SOLUTIONS',
    periodEs: 'Septiembre 2025 – Septiembre 2026',
    periodEn: 'September 2025 – September 2026',
    projectEs: 'Sistema Integral de Gestión para el Cuerpo de Bomberos de Floridablanca.',
    projectEn: 'Integrated Management System for the Floridablanca Fire Department.',
    highlights: [
      {
        labelEs: 'Backend (6 meses)',
        labelEn: 'Backend (6 months)',
        copyEs: 'Desarrollo de la API y la lógica de negocio en C#, utilizando Dapper como ORM y PostgreSQL como motor de base de datos.',
        copyEn: 'Built the API and business logic in C#, using Dapper as the ORM and PostgreSQL as the database engine.'
      },
      {
        labelEs: 'Frontend (6 meses)',
        labelEn: 'Frontend (6 months)',
        copyEs: 'Desarrollo de la interfaz con React 19 y TypeScript sobre Vite, estilos con Tailwind CSS v4 y componentes de shadcn/ui.',
        copyEn: 'Built the interface with React 19 and TypeScript on Vite, styled with Tailwind CSS v4 and shadcn/ui components.'
      },
      {
        labelEs: 'Móvil',
        labelEn: 'Mobile',
        copyEs: 'Desarrollo de la aplicación Android del sistema con Ionic.',
        copyEn: 'Built the system’s Android application with Ionic.'
      }
    ],
    technologies: ['C#', 'Dapper', 'PostgreSQL', 'React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'shadcn/ui', 'Ionic']
  }
] as const;

export const education = [
  {
    titleEs: 'Técnico laboral en Programación de Software',
    titleEn: 'Technical Degree in Software Programming',
    institution: 'Campuslands, Floridablanca',
    period: '2024 – 2025'
  },
  {
    titleEs: 'Bachiller',
    titleEn: 'High School Diploma',
    institution: 'Liceo Señor de los Milagros',
    period: '2017'
  }
] as const;

export const skillGroups = [
  {
    titleEs: 'Backend',
    titleEn: 'Backend',
    items: ['C#', 'ASP.NET', 'Entity Framework', 'Dapper', 'Python']
  },
  {
    titleEs: 'Frontend',
    titleEn: 'Frontend',
    items: ['React 19', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'HTML / CSS']
  },
  {
    titleEs: 'Bases de datos',
    titleEn: 'Databases',
    items: ['PostgreSQL', 'MySQL']
  },
  {
    titleEs: 'Móvil y herramientas',
    titleEn: 'Mobile & tools',
    items: ['Ionic', 'Git', 'GitHub']
  },
  {
    titleEs: 'IA generativa',
    titleEn: 'Generative AI',
    items: ['Claude', 'ChatGPT', 'Codex', 'Gemini']
  }
] as const;

export const competencies = [
  { es: 'Resolución de problemas', en: 'Problem solving' },
  { es: 'Enfoque en resultados', en: 'Results-oriented' },
  { es: 'Empatía', en: 'Empathy' },
  { es: 'Responsabilidad', en: 'Responsibility' },
  { es: 'Proactividad', en: 'Proactivity' },
  { es: 'Comunicación', en: 'Communication' },
  { es: 'Trabajo en equipo', en: 'Teamwork' }
] as const;

export const impactHighlights = [
  'Trabajo en equipo y comunicación efectiva en entornos de desarrollo.',
  'Adaptabilidad, organización de tareas y resolución de problemas.',
  'Proactividad, iniciativa y ética profesional para asumir retos técnicos.'
] as const;

export const impactHighlightsEn = [
  'Teamwork and effective communication in software development environments.',
  'Adaptability, task organization, and practical problem solving.',
  'Proactivity, initiative, and professional ethics when handling technical challenges.'
] as const;

export const englishLevel =
  'Inglés intermedio (B1): lectura de documentación técnica, comprensión de recursos de aprendizaje y mejora continua para contextos profesionales.';

export const englishLevelEn =
  'Intermediate English (B1): able to read technical documentation, understand learning resources, and continuously improve for professional contexts.';
