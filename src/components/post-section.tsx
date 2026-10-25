
'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Rss, PlusCircle, Pencil, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { AddPostForm } from '@/components/forms/add-post-form';
import { EditPostForm } from '@/components/forms/edit-post-form';
import { useState } from 'react';
import type { Post } from '@/app/portfolio-data';
import ImageWithFallback from '@/components/image-with-fallback';
import { useAuth } from '@/hooks/use-auth';
import SectionHeader from '@/components/section-header';
import { usePagination } from '@/hooks/use-pagination';
import PaginationControls from '@/components/pagination-controls';

const POSTS_PER_PAGE = 6;

type PostSectionProps = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};

export default function PostSection({ posts, setPosts }: PostSectionProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editState, setEditState] = useState<{ dialogOpen: boolean; post?: Post }>({ dialogOpen: false });
  const { isAdmin } = useAuth();
  const pagination = usePagination(posts, { pageSize: POSTS_PER_PAGE, jumpOnAdd: 'first' });

  const handleDeletePost = (slugToDelete: string) => {
    setPosts(prevPosts => prevPosts.filter(p => p.slug !== slugToDelete));
  };

  return (
    <section id="posts" className="py-16 md:py-24 scroll-mt-16">
      <div className="container">
        <SectionHeader
          eyebrow="Writing"
          icon={Rss}
          title="News & Ideas"
          description="Articles and thoughts on technology, AI and development."
          action={isAdmin && (
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Add Post
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle>Create New Post</DialogTitle>
                  <DialogDescription>
                    Fill out the form below to create a new blog post.
                  </DialogDescription>
                </DialogHeader>
                <AddPostForm setDialogOpen={setIsAddDialogOpen} setPosts={setPosts} />
              </DialogContent>
            </Dialog>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pagination.pageItems.map((post) => {
            return (
              <Card key={post.slug} className="group flex flex-col overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
                {post.imageUrl && (
                  <ImageWithFallback
                    src={post.imageUrl}
                    originalSrc={(post as any).originalImageUrl || null}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    fallbackSrc="https://picsum.photos/seed/fallback/600/400"
                  />
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-lg font-semibold leading-snug">{post.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="rounded-md font-medium">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                  <Button asChild size="sm" variant="ghost" className="-ml-3 text-primary-ink hover:text-primary-ink">
                    <Link href={`/posts/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {isAdmin && (
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" onClick={() => setEditState({ dialogOpen: true, post: post })}>
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit Post</span>
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" size="icon">
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete Post</span>
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete this post.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeletePost(post.slug)}>Delete</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <PaginationControls
          page={pagination.page}
          totalPages={pagination.totalPages}
          start={pagination.start}
          end={pagination.end}
          total={pagination.total}
          itemLabel="posts"
          onPageChange={pagination.setPage}
          scrollTargetId="posts"
        />

        <Dialog open={editState.dialogOpen} onOpenChange={(isOpen) => setEditState({ ...editState, dialogOpen: isOpen })}>
          {editState.post && (
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>Edit Post</DialogTitle>
                <DialogDescription>
                  Make changes to your post here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <EditPostForm
                setDialogOpen={(isOpen) => setEditState({ ...editState, dialogOpen: isOpen })}
                setPosts={setPosts}
                post={editState.post}
              />
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
