import Link from 'next/link';
import { Github, Linkedin, Youtube, Send } from 'lucide-react';
import { Button } from './ui/button';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16.38 3.42a4.5 4.5 0 0 1 5.2 5.2v.05c0 1.62-.6 3.1-1.65 4.23-1.04 1.14-2.48 1.9-4.08 2.22v-2.1a6.3 6.3 0 0 0 3.73-3.73 4.49 4.49 0 0 1-1.2-3.32c-.03-2.48-2.02-4.48-4.5-4.5-2.46-.02-4.48 1.97-4.5 4.44v6.68a2 2 0 1 1-4 0V8.89a2 2 0 1 1 4 0v2.46a6.5 6.5 0 0 0 6.5-6.5c.02-.02.04-.04.06-.06Z" />
    </svg>
  );

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
                <Link href="https://github.com/Tadelachewu" target="_blank" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
                <Link href="https://www.youtube.com/@EagleTube-ph6wh" target="_blank" aria-label="YouTube">
                    <Youtube className="h-5 w-5" />
                </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
                <Link href="https://t.me/TadeleMesfin" target="_blank" aria-label="Telegram">
                    <Send className="h-5 w-5" />
                </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
                <Link href="#" target="_blank" aria-label="TikTok">
                    <TikTokIcon className="h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
