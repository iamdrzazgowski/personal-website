interface Project {
    name: string;
    year?: string;
    description: string;
    tags: string[];
    url: string;
}

export const projects: Project[] = [
    {
        name: 'Realtime Chat Application',

        description: 'Real-time chat with WebSockets, rooms, and JWT auth.',
        tags: ['React', 'Node.js', 'Express', 'Socket.IO', 'JWT', 'PostgreSQL'],
        url: 'https://github.com/iamdrzazgowski/react-realtime-chat',
    },
    {
        name: 'Portfolio Tracker',

        description:
            'App for tracking investment portfolios with charts and API data.',
        tags: [
            'Next.js',
            'TypeScript',
            'Node.js',
            'PostgreSQL',
            'Prisma',
            'Better Auth',
        ],
        url: 'https://github.com/iamdrzazgowski/portfolio-tracker',
    },
    {
        name: 'TaskFlow',

        description:
            'Task manager with roles, permissions, and team workflows.',
        tags: ['JavaScript', 'React', 'Supabase', 'Vite', 'React Router'],
        url: 'https://github.com/iamdrzazgowski/taskflow-task-manager',
    },
    {
        name: 'mRolnik',
        description:
            'Modern mobile app helping farmers manage resources, tasks, and field data in one place.',
        tags: ['Kotlin', 'Jetpack Compose', 'Supabase'],
        url: 'https://github.com/iamdrzazgowski/mRolnik',
    },
    {
        name: 'Matdron',
        description:
            'Drone photography and videography website with services, portfolio, and contact.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        url: 'https://matdron.pl/',
    },
];
