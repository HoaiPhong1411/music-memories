import ReduxProvider from '@/redux/provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/header';
import SideBar from '@/components/layout/side-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Music',
    description: 'Music by me',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <div
                    className={`h-[calc(100vh-90px)] bg-primary-layout-bg overflow-hidden flex justify-center items-center`}
                >
                    <SideBar />
                    <Header />
                    <ReduxProvider>{children}</ReduxProvider>
                </div>
            </body>
        </html>
    );
}
