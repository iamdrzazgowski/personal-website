import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist_Mono } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    variable: '--font-cormorant',
    weight: ['300', '400', '500'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Frontend Developer - Adrian Drzazgowski',
    description:
        'Frontend Developer from Lublin, Poland. Building clean, fast and accessible web applications using React and Next.js.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='en'
            className={`${geistMono.variable} ${cormorant.variable}`}>
            <body className='font-mono antialiased bg-background text-foreground font-light'>
                {children}
            </body>
        </html>
    );
}
