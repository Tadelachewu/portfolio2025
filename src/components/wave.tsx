import { cn } from '@/lib/utils';

type WaveProps = {
  // 'down' hangs below a bar (header), 'up' rises above a bar (footer).
  direction: 'up' | 'down';
  className?: string;
};

export default function Wave({ direction, className }: WaveProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={cn('pointer-events-none block w-full fill-primary', className)}
    >
      {direction === 'up' ? (
        <path d="M0,46 C180,10 360,6 560,30 C760,54 900,70 1100,46 C1260,27 1360,20 1440,28 L1440,80 L0,80 Z" />
      ) : (
        <path d="M0,0 L1440,0 L1440,34 C1260,60 1100,70 900,46 C700,22 560,10 360,30 C200,46 90,52 0,40 Z" />
      )}
    </svg>
  );
}
