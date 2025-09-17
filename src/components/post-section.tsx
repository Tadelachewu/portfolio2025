import Image from 'next/image';
import Link from 'next/link';
import { posts } from '@/app/posts-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export default function PostSection() {
  return (
    <section id="posts" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">News & Ideas</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Check out my latest articles and thoughts on technology.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => {
            const postImage = PlaceHolderImages.find(p => p.id === post.image);
            return (
              <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                {postImage && (
                  <Image
                    src={postImage.imageUrl}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint={postImage.imageHint}
                  />
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4 text-base text-muted-foreground">{post.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button disabled>
                      Coming Soon
                      <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
