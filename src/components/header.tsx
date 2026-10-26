
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Menu, X, UserCircle2, Wrench, Lightbulb, Briefcase, GraduationCap, Rss, MessageCircle, LogOut, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import type { Section } from '@/app/page';
import { ThemeToggle } from './theme-toggle';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import Wave from './wave';

const navLinks: { section: Section; label: string; icon: React.ElementType }[] = [
  { section: 'about', label: 'About', icon: UserCircle2 },
  { section: 'skills', label: 'Skills', icon: Wrench },
  { section: 'projects', label: 'Projects', icon: Lightbulb },
  { section: 'experience', label: 'Experience', icon: Briefcase },
  { section: 'education', label: 'Education', icon: GraduationCap },
  { section: 'posts', label: 'Posts', icon: Rss },
];

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { isAdmin, setIsAdmin } = useAuth();
  const router = useRouter();

  const [images, setImages] = useState(PlaceHolderImages);
  const profilePic = images.find(p => p.id === 'profile-picture');
  const [imageSrc, setImageSrc] = useState<string | null>(profilePic?.imageUrl || null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    const handleStorageChange = () => {
      const storedImages = localStorage.getItem('placeholderImages');
      if (storedImages) {
        setImages(JSON.parse(storedImages));
      }
    };
    window.addEventListener('storage', handleStorageChange);

    handleStorageChange(); // Initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Header avatar: a photo dropped into public/storage wins; otherwise use the configured
  // profile picture, falling back to originalImageUrl if the uploaded file is missing.
  useEffect(() => {
    async function check(p: any) {
      for (const candidate of ['/storage/tade-profile.jpg', '/storage/tade-profile.png']) {
        try {
          const res = await fetch(candidate, { method: 'HEAD' });
          if (res.ok && (res.headers.get('content-type') || '').startsWith('image')) return setImageSrc(candidate);
        } catch (e) {
          // try the next candidate
        }
      }
      if (!p) return setImageSrc(null);
      const tryUrl = p.imageUrl;
      const original = p.originalImageUrl || null;
      try {
        const res = await fetch(tryUrl, { method: 'HEAD' });
        if (res.ok) return setImageSrc(tryUrl);
      } catch (e) {
        // ignore
      }
      const ok = await new Promise<boolean>((resolve) => {
        const img = new window.Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = tryUrl;
      });
      if (ok) setImageSrc(tryUrl);
      else if (original) setImageSrc(original);
      else setImageSrc(tryUrl);
    }
    check(profilePic);
  }, [profilePic]);

  const handleLinkClick = (section: Section) => {
    // SPA behavior: switch section client-side without scrolling or pushing a new URL
    setActiveSection(section);
    setIsSheetOpen(false);
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  const handleResumeUpload = async () => {
    try {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = 'application/pdf'
      input.click()
      input.onchange = async () => {
        const file = input.files?.[0]
        if (!file) return
        const adminPwd = window.prompt('Enter admin password to upload resume')
        if (!adminPwd) return
        const fd = new FormData()
        fd.append('file', file)
        fd.append('adminPassword', adminPwd)

        const res = await fetch('/api/upload-resume', { method: 'POST', body: fd })
        const data = await res.json()
        if (data?.ok) {
          alert('Resume uploaded — served at ' + data.url)
        } else {
          alert('Upload failed: ' + (data?.error || res.statusText))
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      alert('Unexpected error uploading resume')
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className={cn("bg-primary text-primary-foreground transition-shadow duration-300", isScrolled ? "shadow-md" : "")}>
      <div className="container flex items-center justify-between h-16">
        <Link href="/" onClick={() => setActiveSection('home')} className="flex items-center gap-3 font-headline text-base font-bold tracking-tight text-primary-foreground md:self-start md:pt-2">
          {profilePic && (
            <div className="relative z-10 h-14 w-14 flex-shrink-0 overflow-hidden rounded-full bg-white ring-[3px] ring-white shadow-lg md:h-20 md:w-20 md:ring-4">
              <Image
                src={imageSrc || profilePic.imageUrl}
                alt={profilePic.description}
                fill
                style={{ objectFit: 'cover', objectPosition: '50% 15%' }}
                sizes="(min-width: 768px) 80px, 56px"
                priority
                data-ai-hint={profilePic.imageHint}
                key={imageSrc || profilePic.imageUrl}
              />
            </div>
          )}
          <span>Tadele Mesfin</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleLinkClick(link.section)}
                className={cn(
                  "text-sm font-medium transition-all duration-200 px-3 py-2 rounded-full flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/60",
                  activeSection === link.section
                    ? 'bg-white text-neutral-900 font-semibold shadow-sm'
                    : 'text-neutral-900/75 hover:text-neutral-900 hover:bg-white/45'
                )}
              >
                <link.icon className="h-4 w-4 lg:inline hidden" />
                <span>{link.label}</span>
              </button>
            ))}
            <Button
              asChild
              size="sm"
              className={cn('ml-1 bg-neutral-900 text-white hover:bg-neutral-800', activeSection === 'contact' && 'ring-2 ring-neutral-900/30 ring-offset-2 ring-offset-primary')}
              onClick={() => handleLinkClick('contact')}
            >
              <button>
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Me
              </button>
            </Button>
          </nav>
          <ThemeToggle className="text-primary-foreground hover:bg-white/45 hover:text-primary-foreground" />
          <Button asChild size="sm" variant="outline" className="border-black/25 bg-transparent text-primary-foreground hover:bg-white/45 hover:text-primary-foreground">
            <a href="/cv/Tadele_Mesfin_CV.pdf" download="Tadele_Mesfin_CV.pdf" className="flex items-center gap-2" aria-label="Download resume">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </Button>

          {isAdmin && (
            <Button size="sm" variant="outline" className="border-black/25 bg-transparent text-primary-foreground hover:bg-white/45 hover:text-primary-foreground" onClick={handleResumeUpload}>
              <span className="flex items-center gap-2">Upload Resume</span>
            </Button>
          )}

          {isAdmin && (
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/45 hover:text-primary-foreground" onClick={handleLogout} aria-label="Logout">
              <LogOut className="h-5 w-5" />
            </Button>
          )}

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/45 hover:text-primary-foreground">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 bg-background">
              <SheetHeader className="p-4 border-b">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
                <div className="flex justify-between items-center">
                  <Link href="/" onClick={() => handleLinkClick('home')} className="flex items-center gap-2 text-xl font-bold text-primary-ink">
                    {profilePic && (
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-primary shadow-md">
                        <Image
                          src={imageSrc || profilePic.imageUrl}
                          alt={profilePic.description}
                          fill
                          style={{ objectFit: 'cover', objectPosition: '50% 15%' }}
                          sizes="48px"
                          priority
                          data-ai-hint={profilePic.imageHint}
                          key={imageSrc || profilePic.imageUrl}
                        />
                      </div>
                    )}
                    <span>Tadele Mesfin</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="flex flex-col items-start gap-2 p-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.section}
                      onClick={() => handleLinkClick(link.section)}
                      className={cn(
                        "text-base font-medium w-full px-3 py-2.5 rounded-lg flex items-center gap-3 transition-colors",
                        activeSection === link.section ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'text-foreground/80 hover:bg-primary/15 hover:text-foreground'
                      )}
                    >
                      <link.icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </button>
                  ))}
                  <Button className="w-full mt-4 bg-neutral-900 text-white hover:bg-neutral-800" size="lg" onClick={() => handleLinkClick('contact')}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contact Me
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      </div>
      <Wave direction="down" className="absolute left-0 top-full h-8 sm:h-12" />
    </header>
  );
}
