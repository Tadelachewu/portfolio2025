
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { posts } from '@/app/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4">{post.title}</h1>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {post.imageUrl && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={1200}
                height={630}
                className="w-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none mx-auto text-foreground">
            {/* 
              This is where the post content would go. 
              For now, we'll just show the description.
              In a real blog, this would be Markdown content.
            */}
            <p className="lead text-xl text-muted-foreground">{post.description}</p>
            
            <p>
              This is a placeholder for the full blog post content. In a real application, you would likely write your posts in Markdown and then render the HTML here. 
              For now, we are just displaying the post's description.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
