import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'BEC 2025 — BEST Engineering Competition',
  description:
    'BEST Engineering Competition 2025. Інженерні змагання повертаються. Спробуй себе в одній з двох запропонованих категорій і покажи за ким майбутнє!',
  keywords: [
    'бек',
    'бест львів',
    'bec',
    'best lviv',
    'Інженерні змагання',
    'інженер',
  ],
  icons: {
    icon: '/Bec-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased overflow-x-hidden relative`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
