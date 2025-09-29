
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, UserCircle2, Wrench, Lightbulb, Briefcase, GraduationCap, Rss, MessageCircle, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import type { Section } from '@/app/page';
import { ThemeToggle } from './theme-toggle';
import { useAuth } from '@/hooks/use-auth';
import LoginComponent from './login-component';
import { Dialog, DialogTrigger, DialogContent } from './ui/dialog';

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
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (section: Section) => {
    setActiveSection(section);
    setIsSheetOpen(false);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    // You might want to add a toast notification here
  };

  return (
    <header className={cn("sticky top-0 z-50 w-full transition-all duration-300 bg-secondary border-b", isScrolled ? "shadow-md" : "")}>
      <div className="container flex items-center justify-between h-16">
        <button onClick={() => handleLinkClick('home')} className="text-xl font-bold text-primary">
          Mesfin.Dev
        </button>

        <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
                <button
                key={link.section}
                onClick={() => handleLinkClick(link.section)}
                className={cn(
                    "text-sm font-medium transition-all px-3 py-2 rounded-md flex items-center gap-2",
                    activeSection === link.section ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-primary hover:bg-muted'
                )}
                >
                <link.icon className="h-4 w-4" />
                <span>{link.label}</span>
                </button>
            ))}
            <Button asChild size="sm" onClick={() => handleLinkClick('contact')}>
                <button className={cn(activeSection === 'contact' ? 'bg-primary text-primary-foreground' : '')}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact Me
                </button>
            </Button>
            </nav>
            <ThemeToggle />

            {isAdmin ? (
               <Button variant="ghost" size="icon" onClick={handleLogout} aria-label="Logout">
                <LogOut className="h-5 w-5" />
              </Button>
            ) : (
              <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogTrigger asChild>
                   <Button variant="ghost" size="icon" aria-label="Admin Login">
                    <LogIn className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                   <LoginComponent setLoginOpen={setIsLoginOpen} />
                </DialogContent>
              </Dialog>
            )}

            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 bg-secondary">
                <SheetHeader className="p-4 border-b">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
                    <div className="flex justify-between items-center">
                        <button onClick={() => handleLinkClick('home')} className="text-xl font-bold text-primary">
                            Mesfin.Dev
                        </button>
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
                            "text-lg font-medium w-full p-3 rounded-md flex items-center gap-3 transition-colors",
                            activeSection === link.section ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                        )}
                    >
                        <link.icon className="h-5 w-5 text-primary" />
                        <span>{link.label}</span>
                    </button>
                    ))}
                    <Button className="w-full mt-4" size="lg" onClick={() => handleLinkClick('contact')}>
                        <MessageCircle className="mr-2 h-5 w-5"/>
                        Contact Me
                    </Button>
                </nav>
                </div>
            </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
