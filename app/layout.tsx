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
    'Santhosh Pallepangi is a Senior Data Scientist and ML Engineer specializing in machine learning systems, predictive analytics, and generative AI applications.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Santhosh Pallepangi | Senior Data Scientist & ML Engineer',
    description:
      'Machine learning, generative AI, and data science portfolio showcasing real-world systems and impact.',
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

