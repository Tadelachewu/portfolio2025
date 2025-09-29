
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
import type { Experience } from "@/app/portfolio-data";

const formSchema = z.object({
  role: z.string().min(2, "Role is required."),
  company: z.string().min(2, "Company is required."),
  duration: z.string().min(5, "Duration is required (e.g., 2025 - Present)."),
  responsibilities: z.string().min(10, "Enter at least one responsibility, separated by new lines."),
  logoUrl: z.string().url("Please enter a valid URL for the logo.").optional().or(z.literal('')),
});

type EditExperienceFormProps = {
  setDialogOpen: (open: boolean) => void;
  setExperience: React.Dispatch<React.SetStateAction<Experience[]>>;
  experience: Experience;
  index: number;
};

export function EditExperienceForm({ setDialogOpen, setExperience, experience, index }: EditExperienceFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        ...experience,
        responsibilities: experience.responsibilities.join('\n'),
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const updatedExperience: Experience = {
      role: values.role,
      company: values.company,
      duration: values.duration,
      responsibilities: values.responsibilities.split('\n').filter(r => r.trim() !== ''),
      logoUrl: values.logoUrl || `https://picsum.photos/seed/${values.company.toLowerCase().replace(/\s/g, '-')}/200/200`
    };
    
    setExperience(prevExperience => {
        const newExperienceList = [...prevExperience];
        newExperienceList[index] = updatedExperience;
        return newExperienceList;
    });

    toast({
        title: "Experience Updated!",
        description: "The experience entry has been successfully updated.",
    });
    setIsSubmitting(false);
    setDialogOpen(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
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
          name="logoUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Logo URL (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/logo.png" {...field} />
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
