import type { Metadata } from 'next';
import { Inter, JetBrains_Mono as JetBrainsMono } from 'next/font/google';
import '../styles/globals.css';
import { ThemeProvider } from '../components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const jetbrainsMono = JetBrainsMono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Santhosh Pallepangi | Senior Data Scientist & ML Engineer',
  description:
    'Santhosh Pallepangi — Senior Data Scientist & ML Engineer · 6+ years · MS Data Science, University of Missouri. ML systems, GenAI, RAG, predictive analytics. GitHub: spallepangi · LinkedIn: santhoshpallepangi.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Santhosh Pallepangi | Senior Data Scientist & ML Engineer',
    description:
      'Senior Data Scientist & ML Engineer · 6+ years · MS Data Science (Mizzou). Machine learning, GenAI, RAG, predictive analytics. GitHub & LinkedIn in portfolio.',
    url: 'https://example.com',
    siteName: 'Santhosh Pallepangi • Data Science & ML',
    locale: 'en_US',
    type: 'website'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans scroll-smooth bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

