import ReduxProvider from '@/redux/provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Music',
    description: 'Music by me',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} h-screen bg-home-mobile md:bg-home bg-cover overflow-hidden flex justify-center items-center`}
            >
                <ReduxProvider> {children}</ReduxProvider>
            </body>
        </html>
    );
}
