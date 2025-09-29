
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/hooks/use-auth';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const profilePic = PlaceHolderImages.find(p => p.id === 'profile-picture');

export const metadata: Metadata = {
  title: 'Mesfin.Dev | Software Developer',
  description: 'Portfolio of Tadele Mesfin Belay, a full-stack and AI-powered solutions developer.',
  icons: {
    icon: [
      { url: profilePic?.imageUrl || '/favicon.ico', sizes: 'any' },
      { url: profilePic?.imageUrl || '/favicon.ico', type: 'image/svg+xml' }
    ],
    shortcut: [profilePic?.imageUrl || '/favicon.ico'],
    apple: [
      { url: profilePic?.imageUrl || '/apple-icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
