interface StackCategory {
    category: string;
    items: string[];
}

export const stackData: StackCategory[] = [
    {
        category: 'Frontend',
        items: [
            'JavaScript',
            'TypeScript',
            'HTML/CSS',
            'React',
            'Next.js',
            'Tailwind CSS',
            'Shadcn UI',
            'React Router',
            'React Query',
            'React Hook Form',
        ],
    },
    {
        category: 'Backend',
        items: [
            'Node.js',
            'Express',
            'Socket.IO',
            'PostgreSQL',
            'Prisma ORM',
            'Supabase',
            'Better Auth',
            'REST API',
        ],
    },
    {
        category: 'Tools',
        items: [
            'Git',
            'GitHub',
            'Docker',
            'Linux (WSL)',
            'Vite',
            'Vercel',
            'Postman',
        ],
    },
    {
        category: 'Other',
        items: [
            'OOP',
            'Design Patterns',
            'Algorithms & Data Structures',
            'C++',
            'Python',
            'Java',
        ],
    },
];
