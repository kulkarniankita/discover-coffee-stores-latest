import './globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Coffee Connoisseur',
  description: 'Discover your local coffee shops',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>
        {children}
        <footer className="mt-auto bg-violet-900 py-6 text-lg text-white">
          <div className="text-center">By Ankita Kulkarni</div>
        </footer>
      </body>
    </html>
  );
}
