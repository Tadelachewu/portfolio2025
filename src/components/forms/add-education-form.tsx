
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { PlusCircle } from "lucide-react";
import React from "react";
import type { education } from "@/app/portfolio-data";

const formSchema = z.object({
  degree: z.string().min(5, "Degree is required."),
  institution: z.string().min(5, "Institution is required."),
  cgpa: z.string().min(3, "CGPA is required."),
  exitExam: z.string().min(3, "Exit exam score is required."),
  year: z.string().min(4, "Graduation year is required."),
});

type AddEducationFormProps = {
  setDialogOpen: (open: boolean) => void;
  setEducation: React.Dispatch<React.SetStateAction<typeof education>>;
};

export function AddEducationForm({ setDialogOpen, setEducation }: AddEducationFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      degree: "",
      institution: "",
      cgpa: "",
      exitExam: "",
      year: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    setEducation(prevEducation => [values, ...prevEducation]);

    toast({
        title: "Education Added!",
        description: "The new education entry has been added.",
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
        <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Adding...' : <>
                    <PlusCircle className="mr-2 h-5 w-5"/>
                    Add Education
                </>}
            </Button>
        </div>
      </form>
    </Form>
  );
}
