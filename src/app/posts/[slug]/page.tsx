import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '@/app/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import ImageWithFallback from '@/components/image-with-fallback';

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Returns to the News & Ideas section of the single-page home (see the hash routing in app/page.tsx).
const BACK_HREF = '/#posts';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Same brand bar as the main site header, pinned so "Back" is always one tap away. */}
      <div className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-sm">
        <div className="container flex h-14 items-center justify-between gap-4">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="-ml-3 rounded-full font-semibold text-primary-foreground hover:bg-white/45 hover:text-primary-foreground"
          >
            <Link href={BACK_HREF}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News &amp; Ideas
            </Link>
          </Button>
          <Link href="/" className="hidden font-headline text-sm font-bold tracking-tight sm:block">
            Tadele Mesfin
          </Link>
        </div>
      </div>
      <main className="container py-10 md:py-14">
        <article className="mx-auto max-w-3xl">
          <header className="mb-8">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-md font-medium">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{post.title}</h1>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span aria-hidden="true">·</span>
              <span>Tadele Mesfin</span>
            </div>
          </header>

          {post.imageUrl && (
            <div className="mb-10 overflow-hidden rounded-xl border shadow-sm">
              <ImageWithFallback
                src={post.imageUrl}
                alt={post.title}
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                fallbackSrc="https://picsum.photos/seed/fallback-lg/1200/800"
              />
            </div>
          )}

          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">{post.description}</p>

          <div className="mt-10 space-y-10">
            {post.content?.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2 className="mb-4 text-xl font-semibold leading-snug sm:text-2xl">{section.heading}</h2>
                )}
                {section.paragraphs?.map((paragraph, j) => (
                  <p key={j} className="mb-4 text-base leading-relaxed text-foreground/90 sm:text-[17px]">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-3">
                    {section.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-base leading-relaxed text-foreground/90 sm:text-[17px]">
                        <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {post.sources && post.sources.length > 0 && (
            <section className="mt-12 rounded-xl border bg-muted/40 p-6">
              <h2 className="mb-4 text-base font-semibold">Sources</h2>
              <ul className="space-y-2.5">
                {post.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-start gap-2 text-sm text-primary-ink underline-offset-4 hover:underline"
                    >
                      <ExternalLink className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

        </article>
      </main>
    </div>
  );
}
