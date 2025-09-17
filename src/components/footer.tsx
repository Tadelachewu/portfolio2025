import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tadele Mesfin. All Rights Reserved.
        </p>
        <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon">
                <Link href="#" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
                <Link href="#" target="_blank" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
