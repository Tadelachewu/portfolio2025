import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: React.ElementType;
  align?: 'left' | 'center';
  action?: React.ReactNode;
  className?: string;
};

export default function SectionHeader({ eyebrow, title, description, icon: Icon, align = 'left', action, className }: SectionHeaderProps) {
  const centered = align === 'center';

  return (
    <div className={cn('mb-12 flex flex-col gap-6 md:mb-16', !centered && 'sm:flex-row sm:items-end sm:justify-between', className)}>
      <div className={cn('max-w-2xl', centered && 'mx-auto text-center')}>
        <p className={cn('mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-ink', centered && 'justify-center')}>
          {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
          {eyebrow}
        </p>
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
        {description && (
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
        )}
      </div>
      {action && <div className={cn('shrink-0', centered && 'mx-auto')}>{action}</div>}
    </div>
  );
}
