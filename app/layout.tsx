import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { Montserrat } from 'next/font/google';

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
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Providers>
          <div className={mont.className}>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
