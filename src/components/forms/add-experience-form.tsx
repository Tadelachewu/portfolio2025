
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

const formSchema = z.object({
  role: z.string().min(2, "Role is required."),
  company: z.string().min(2, "Company is required."),
  duration: z.string().min(5, "Duration is required (e.g., 2025 - Present)."),
  responsibilities: z.string().min(10, "Enter at least one responsibility, separated by new lines."),
});

type AddExperienceFormProps = {
  setDialogOpen: (open: boolean) => void;
};

export function AddExperienceForm({ setDialogOpen }: AddExperienceFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "",
      company: "",
      duration: "",
      responsibilities: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // In a real app, you would split the responsibilities string into an array
    const processedValues = {
      ...values,
      responsibilities: values.responsibilities.split('\n').filter(r => r.trim() !== ''),
    };
    
    console.log("New Experience Data:", processedValues);

    setTimeout(() => {
        toast({
            title: "Experience Added (Simulated)",
            description: "The new experience has been logged to the console.",
        });
        setIsSubmitting(false);
        setDialogOpen(false);
        form.reset();
    }, 1000);
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
