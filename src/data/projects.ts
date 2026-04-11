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
];
