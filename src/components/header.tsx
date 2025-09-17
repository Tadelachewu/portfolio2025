'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, UserCircle2, Wrench, Lightbulb, Briefcase, GraduationCap, Rss, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About', icon: UserCircle2 },
  { href: '#skills', label: 'Skills', icon: Wrench },
  { href: '#projects', label: 'Projects', icon: Lightbulb },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#education', label: 'Education', icon: GraduationCap },
  { href: '#posts', label: 'Posts', icon: Rss },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    // The home section is the hero section
    if (href === '#home') {
        document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
    }
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={cn("sticky top-0 z-50 w-full transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent")}>
      <div className="container flex items-center justify-between h-16">
        <Link href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-xl font-bold text-primary">
          Mesfin.Dev
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center gap-2"
            >
              <link.icon className="h-4 w-4" />
              <span>{link.label}</span>
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Me
            </Link>
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                 <Link href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-xl font-bold text-primary">
                    Mesfin.Dev
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col items-start gap-2 p-4">
                {navLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-lg font-medium w-full p-3 rounded-md hover:bg-muted flex items-center gap-3"
                  >
                    <link.icon className="h-5 w-5 text-primary" />
                    <span>{link.label}</span>
                  </Link>
                ))}
                <Button asChild className="w-full mt-4" size="lg">
                  <Link href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
                    <MessageCircle className="mr-2 h-5 w-5"/>
                    Contact Me
                  </Link>
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
