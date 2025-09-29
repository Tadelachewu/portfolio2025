
'use client';

import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/hooks/use-auth';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState, useEffect } from 'react';
import type { Metadata } from 'next';

const generateMetadata = (profilePicUrl: string): Metadata => ({
  title: 'Mesfin.Dev | Software Developer',
  description: 'Portfolio of Tadele Mesfin Belay, a full-stack and AI-powered solutions developer.',
  icons: {
    icon: [
      { url: profilePicUrl, sizes: 'any' },
      { url: profilePicUrl, type: 'image/svg+xml' }
    ],
    shortcut: [profilePicUrl],
    apple: [
      { url: profilePicUrl },
    ],
  },
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [profilePicUrl, setProfilePicUrl] = useState(PlaceHolderImages.find(p => p.id === 'profile-picture')?.imageUrl || '/favicon.ico');

  useEffect(() => {
    const handleStorageChange = () => {
        const images = JSON.parse(localStorage.getItem('placeholderImages') || JSON.stringify(PlaceHolderImages));
        const newProfilePic = images.find((p: any) => p.id === 'profile-picture');
        if (newProfilePic) {
            setProfilePicUrl(newProfilePic.imageUrl);
        }
    };
    
    // Listen for custom event from about-section
    window.addEventListener('storage', handleStorageChange);
    
    // Initial load from localStorage
    handleStorageChange();

    return () => {
        window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  const metadata = generateMetadata(profilePicUrl);
  
  // In a client component, we can't export metadata directly.
  // We need to update the document head dynamically.
  useEffect(() => {
    if (metadata.title) {
      document.title = metadata.title.toString();
    }
    // Update favicons
    document.querySelector("link[rel='icon']")?.setAttribute('href', profilePicUrl);
    document.querySelector("link[rel='shortcut icon']")?.setAttribute('href', profilePicUrl);
    document.querySelector("link[rel='apple-touch-icon']")?.setAttribute('href', profilePicUrl);

  }, [metadata, profilePicUrl]);


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
