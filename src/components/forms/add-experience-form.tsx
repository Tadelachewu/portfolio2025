
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
import type { experience } from "@/app/portfolio-data";
import { updatePlaceholderImage, PlaceHolderImages } from "@/lib/placeholder-images";

const formSchema = z.object({
  role: z.string().min(2, "Role is required."),
  company: z.string().min(2, "Company is required."),
  duration: z.string().min(5, "Duration is required (e.g., 2025 - Present)."),
  responsibilities: z.string().min(10, "Enter at least one responsibility, separated by new lines."),
  logoId: z.string().min(2, "Logo ID is required (e.g., company-name-logo)."),
});

type AddExperienceFormProps = {
  setDialogOpen: (open: boolean) => void;
  setExperience: React.Dispatch<React.SetStateAction<typeof experience>>;
};

export function AddExperienceForm({ setDialogOpen, setExperience }: AddExperienceFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "",
      company: "",
      duration: "",
      responsibilities: "",
      logoId: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const newExperience = {
      ...values,
      responsibilities: values.responsibilities.split('\n').filter(r => r.trim() !== ''),
    };
    
    setExperience(prevExperience => [newExperience, ...prevExperience]);

    // Add a placeholder image for the new logo
    const newLogoImage = {
      id: values.logoId,
      description: `${values.company} Logo`,
      imageUrl: `https://picsum.photos/seed/${values.logoId}/200/200`,
      imageHint: "company logo"
    };

    try {
        const storedImages = JSON.parse(localStorage.getItem('placeholderImages') || JSON.stringify(PlaceHolderImages));
        const updatedImages = [...storedImages, newLogoImage];
        localStorage.setItem('placeholderImages', JSON.stringify(updatedImages));
        window.dispatchEvent(new Event('storage'));
    } catch (error) {
        console.error("Failed to update image URL in localStorage", error);
    }


    toast({
        title: "Experience Added!",
        description: "The new experience has been added to your timeline.",
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
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Junior IT Officer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
            <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                    <Input placeholder="e.g., ET Inclusive Finance Technology" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="logoId"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Logo ID</FormLabel>
                <FormControl>
                    <Input placeholder="e.g., etift-logo" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 2025 – Present" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="responsibilities"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Responsibilities (one per line)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Database management and optimization&#10;Providing comprehensive IT support..."
                  className="min-h-[120px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Adding...' : <>
                    <PlusCircle className="mr-2 h-5 w-5"/>
                    Add Experience
                </>}
            </Button>
        </div>
      </form>
    </Form>
  );
}
