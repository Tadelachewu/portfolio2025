
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

type PostSectionProps = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};

export default function PostSection({ posts, setPosts }: PostSectionProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editState, setEditState] = useState<{ dialogOpen: boolean; post?: Post }>({ dialogOpen: false });
  const { isAdmin } = useAuth();

  const handleDeletePost = (slugToDelete: string) => {
    setPosts(prevPosts => prevPosts.filter(p => p.slug !== slugToDelete));
  };

  return (
    <section id="posts" className="py-20 lg:py-32 flex-1 flex items-center">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
            <div className='text-left'>
                <div className="flex items-center gap-4 mb-4">
                    <Rss className="h-10 w-10 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">News & Ideas</h2>
                </div>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Check out my latest articles and thoughts on technology.</p>
            </div>
            {isAdmin && (
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                      <PlusCircle className="mr-2 h-5 w-5"/>
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            return (
              <Card key={post.slug} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                {post.imageUrl && (
                  <ImageWithFallback
                    src={post.imageUrl}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    fallbackSrc="https://picsum.photos/seed/fallback/600/400"
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
                <CardFooter className="flex justify-between items-center">
                    <Button asChild>
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
