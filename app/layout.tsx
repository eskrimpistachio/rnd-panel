import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'R and D Panel',
  description: 'R and D panel is admin dashboard for company managing data.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className={mont.className}>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
