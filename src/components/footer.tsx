
import Link from 'next/link';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.2.18 1.65.54.75 1.52.92 2.4.57.57-.21 1.11-.53 1.58-.9.02-1.56.01-3.12.01-4.68.01-2.59-.01-5.18.01-7.77.01-1.08.38-2.14 1.13-2.9.91-.93 2.13-1.4 3.42-1.35Z" fill="#000000"/>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.2.18 1.65.54.75 1.52.92 2.4.57.57-.21 1.11-.53 1.58-.9.02-1.56.01-3.12.01-4.68.01-2.59-.01-5.18.01-7.77.01-1.08.38-2.14 1.13-2.9.91-.93 2.13-1.4 3.42-1.35Z" fill="url(#tiktok-gradient-1)" transform="translate(2 2)"/>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.2.18 1.65.54.75 1.52.92 2.4.57.57-.21 1.11-.53 1.58-.9.02-1.56.01-3.12.01-4.68.01-2.59-.01-5.18.01-7.77.01-1.08.38-2.14 1.13-2.9.91-.93 2.13-1.4 3.42-1.35Z" fill="url(#tiktok-gradient-2)" transform="translate(-2 -2)"/>
         <defs>
            <linearGradient id="tiktok-gradient-1" x1="19.9" y1="2.1" x2="19.9" y2="21.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF004F" stopOpacity="0"/>
                <stop offset=".2" stopColor="#FF004F"/>
            </linearGradient>
            <linearGradient id="tiktok-gradient-2" x1="14.3" y1="2.1" x2="14.3" y2="21.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00F2EA" stopOpacity="0"/>
                <stop offset=".2" stopColor="#00F2EA"/>
            </linearGradient>
        </defs>
    </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#000000"/>
    </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5V7.5L16,12L10,16.5Z" fill="#FF0000"/>
    </svg>
);

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.498-.576-2.12-1.51-1.654l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693L18.953 5.76c.595-.394 1.136-.176.691.218z" fill="#229ED9"/>
    </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#0A66C2"/>
    </svg>
);

export default function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tadele Mesfin. All Rights Reserved.
        </p>
        <TooltipProvider>
            <div className="flex items-center gap-2">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button asChild variant="ghost" size="icon" className="p-1" disabled>
                            <Link href="#" target="_blank" aria-label="LinkedIn">
                                <LinkedinIcon className="h-full w-full" />
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>LinkedIn</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button asChild variant="ghost" size="icon" className="p-1">
                            <Link href="https://github.com/Tadelachewu" target="_blank" aria-label="GitHub">
                                <GithubIcon className="h-full w-full" />
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>GitHub</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button asChild variant="ghost" size="icon" className="p-1">
                            <Link href="https://www.youtube.com/@EagleTube-ph6wh" target="_blank" aria-label="YouTube">
                                <YoutubeIcon className="h-full w-full" />
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>YouTube</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button asChild variant="ghost" size="icon" className="p-1">
                            <Link href="https://t.me/TadeleMesfin" target="_blank" aria-label="Telegram">
                                <TelegramIcon className="h-full w-full" />
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>Telegram</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button asChild variant="ghost" size="icon" className="p-1" disabled>
                            <Link href="#" target="_blank" aria-label="TikTok">
                                <TikTokIcon className="h-full w-full" />
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>TikTok</p></TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
      </div>
    </footer>
  );
}

    