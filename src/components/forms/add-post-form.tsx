
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { PlusCircle } from "lucide-react";
import React from "react";
import type { posts } from "@/app/portfolio-data";

const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  tags: z.string().min(2, "Enter at least one tag, separated by commas."),
  imageUrl: z.string().url("Please enter a valid image URL."),
});

type AddPostFormProps = {
  setDialogOpen: (open: boolean) => void;
  setPosts: React.Dispatch<React.SetStateAction<typeof posts>>;
};

export function AddPostForm({ setDialogOpen, setPosts }: AddPostFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: "",
      imageUrl: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const newPost = {
        ...values,
        date: new Date().toISOString().split('T')[0], // Set current date
        slug: values.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
        tags: values.tags.split(',').map(tag => tag.trim()).filter(t => t),
    }

    setPosts(prevPosts => [newPost, ...prevPosts]);

    toast({
        title: "Post Created!",
        description: "Your new post has been added.",
    });
    setIsSubmitting(false);
    setDialogOpen(false);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post Title</FormLabel>
              <FormControl>
                <Input placeholder="My Awesome New Blog Post" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="A short summary of what this post is about." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags (comma-separated)</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Web Dev, AI, Next.js" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/image.jpg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Creating...' : <>
                    <PlusCircle className="mr-2 h-5 w-5"/>
                    Create Post
                </>}
            </Button>
        </div>
      </form>
    </Form>
  );
}
