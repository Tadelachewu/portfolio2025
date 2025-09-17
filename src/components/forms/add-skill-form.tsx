
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { PlusCircle } from "lucide-react";
import React from "react";
import { skills } from "@/app/portfolio-data";

const skillCategories = skills.map(s => s.category);

const formSchema = z.object({
  category: z.enum(skillCategories as [string, ...string[]], {
    required_error: "You need to select a skill category.",
  }),
  skillName: z.string().min(1, "Skill name cannot be empty."),
});

type AddSkillFormProps = {
  setDialogOpen: (open: boolean) => void;
};

export function AddSkillForm({ setDialogOpen }: AddSkillFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skillName: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    console.log("New Skill Data:", values);

    setTimeout(() => {
        toast({
            title: "Skill Added (Simulated)",
            description: `Added "${values.skillName}" to ${values.category}.`,
        });
        setIsSubmitting(false);
        setDialogOpen(false);
        form.reset();
    }, 1000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {skillCategories.map(category => (
                            <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skillName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skill Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., TypeScript" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Adding...' : <>
                    <PlusCircle className="mr-2 h-5 w-5"/>
                    Add Skill
                </>}
            </Button>
        </div>
      </form>
    </Form>
  );
}
