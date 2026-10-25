'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type PaginationControlsProps = {
  page: number;
  totalPages: number;
  start: number;
  end: number;
  total: number;
  itemLabel: string;
  onPageChange: (page: number) => void;
  scrollTargetId?: string;
};

// Floats just above the sticky wave footer (h-12 band + wave) while its section is on screen.
export default function PaginationControls({ page, totalPages, start, end, total, itemLabel, onPageChange, scrollTargetId }: PaginationControlsProps) {
  if (totalPages <= 1) return null;

  const goTo = (next: number) => {
    onPageChange(next);
    if (scrollTargetId) {
      document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      aria-label={`${itemLabel} pagination`}
      className="sticky bottom-[6.75rem] z-30 mx-auto mt-10 flex w-fit items-center gap-1 rounded-full border bg-background/90 p-1.5 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/75"
    >
      <Button variant="ghost" size="sm" className="rounded-full" onClick={() => goTo(page - 1)} disabled={page === 1} aria-label="Previous page">
        <ChevronLeft className="h-4 w-4 sm:mr-1" />
        <span className="hidden sm:inline">Back</span>
      </Button>
      <div className="hidden sm:flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <Button
            key={n}
            variant={n === page ? 'default' : 'ghost'}
            size="icon"
            className={cn('h-8 w-8 rounded-full text-xs', n !== page && 'text-muted-foreground')}
            onClick={() => goTo(n)}
            aria-current={n === page ? 'page' : undefined}
            aria-label={`Page ${n}`}
          >
            {n}
          </Button>
        ))}
      </div>
      <span className="px-2 text-xs font-medium tabular-nums text-muted-foreground">
        <span className="sm:hidden">{page} / {totalPages} · </span>
        {start + 1}–{end} of {total}
      </span>
      <Button variant="ghost" size="sm" className="rounded-full" onClick={() => goTo(page + 1)} disabled={page === totalPages} aria-label="Next page">
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-4 w-4 sm:ml-1" />
      </Button>
    </nav>
  );
}
