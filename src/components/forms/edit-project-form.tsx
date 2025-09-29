
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";
import React from "react";
import type { projects } from "@/app/portfolio-data";

const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  tech: z.string().min(1, "Enter at least one technology, separated by commas."),
  github: z.string().url("Please enter a valid URL.").optional().or(z.literal('')),
  live: z.string().url("Please enter a valid URL.").optional().or(z.literal('')),
  image: z.string().min(2, "Image ID must be at least 2 characters."),
});

type EditProjectFormProps = {
  setDialogOpen: (open: boolean) => void;
  setProjects: React.Dispatch<React.SetStateAction<typeof projects>>;
  project: typeof projects[0];
};

export function EditProjectForm({ setDialogOpen, setProjects, project }: EditProjectFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        ...project,
        tech: project.tech.join(', '),
        github: project.github === '#' ? '' : project.github,
        live: project.live === '#' ? '' : project.live,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const updatedProject = {
      ...values,
      tech: values.tech.split(',').map(t => t.trim()).filter(t => t),
      github: values.github || '#',
      live: values.live || '#',
    };

    setProjects(prevProjects => prevProjects.map(p => p.title === project.title ? updatedProject : p));
    
    toast({
        title: "Project Updated!",
        description: "Your project has been successfully updated.",
    });
    setIsSubmitting(false);
    setDialogOpen(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., AI CV Generator" {...field} />
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
                <Textarea placeholder="A short description of the project." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tech"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Technologies (comma-separated)</FormLabel>
              <FormControl>
                <Input placeholder="e.g., AI, Python, Next.js" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
            <FormField
            control={form.control}
            name="github"
            render={({ field }) => (
                <FormItem>
                <FormLabel>GitHub Link</FormLabel>
                <FormControl>
                    <Input placeholder="https://github.com/..." {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="live"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Live Demo Link</FormLabel>
                <FormControl>
                    <Input placeholder="https://..." {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image ID</FormLabel>
              <FormControl>
                <Input placeholder="A unique ID for the placeholder image" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : <>
                    <Save className="mr-2 h-5 w-5"/>
                    Save Changes
                </>}
            </Button>
        </div>
      </form>
    </Form>
  );
}
