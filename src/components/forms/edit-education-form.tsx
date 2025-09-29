
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";
import React from "react";
import type { education } from "@/app/portfolio-data";

const formSchema = z.object({
  degree: z.string().min(5, "Degree is required."),
  institution: z.string().min(5, "Institution is required."),
  cgpa: z.string().min(3, "CGPA is required."),
  exitExam: z.string().min(3, "Exit exam score is required."),
  year: z.string().min(4, "Graduation year is required."),
  logoUrl: z.string().url("Please enter a valid URL for the logo.").optional().or(z.literal('')),
});

type EditEducationFormProps = {
  setDialogOpen: (open: boolean) => void;
  setEducation: React.Dispatch<React.SetStateAction<typeof education>>;
  education: typeof education[0];
  index: number;
};

export function EditEducationForm({ setDialogOpen, setEducation, education, index }: EditEducationFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        ...education
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const updatedEducation: typeof education[0] = {
      degree: values.degree,
      institution: values.institution,
      cgpa: values.cgpa,
      exitExam: values.exitExam,
      year: values.year,
      ...(values.logoUrl ? { logoUrl: values.logoUrl } : { logoUrl: `https://picsum.photos/seed/${values.institution}/200/200` }),
    };

    setEducation(prevEducation => {
        const newEducationList = [...prevEducation];
        newEducationList[index] = updatedEducation;
        return newEducationList;
    });

    toast({
        title: "Education Updated!",
        description: "The education entry has been updated.",
    });
    setIsSubmitting(false);
    setDialogOpen(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="degree"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Degree</FormLabel>
              <FormControl>
                <Input placeholder="e.g., BSc in Computer Science" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="institution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institution</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Bahir Dar University" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
            <FormField
            control={form.control}
            name="cgpa"
            render={({ field }) => (
                <FormItem>
                <FormLabel>CGPA</FormLabel>
                <FormControl>
                    <Input placeholder="e.g., 3.78" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="exitExam"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Exit Exam Score</FormLabel>
                <FormControl>
                    <Input placeholder="e.g., 76%" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
         <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Graduated 2023" {...field} />
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
              <FormLabel>Institution Logo URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/logo.png" {...field} />
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
