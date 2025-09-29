
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Save, CodeXml } from "lucide-react";
import React from "react";
import { skills as initialSkills, skillIcons as initialSkillIcons } from "@/app/portfolio-data";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  categoryName: z.string().min(1, "Category name cannot be empty."),
  skills: z.string().min(1, "Please enter at least one skill."),
});

type EditSkillCategoryFormProps = {
  setDialogOpen: (open: boolean) => void;
  setSkills: React.Dispatch<React.SetStateAction<typeof initialSkills>>;
  setSkillIcons: React.Dispatch<React.SetStateAction<typeof initialSkillIcons>>;
  currentCategory: typeof initialSkills[0];
};

export function EditSkillCategoryForm({ setDialogOpen, setSkills, setSkillIcons, currentCategory }: EditSkillCategoryFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryName: currentCategory.category,
      skills: currentCategory.items.join('\n'),
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const newSkillList = values.skills.split('\n').map(s => s.trim()).filter(Boolean);

    setSkills(prevSkills => {
      return prevSkills.map(cat => {
        if (cat.category === currentCategory.category) {
          return {
            category: values.categoryName,
            items: newSkillList
          };
        }
        return cat;
      });
    });
    
    setSkillIcons(prevIcons => {
        const newIcons = { ...prevIcons };
        // Remove old skills from this category
        currentCategory.items.forEach(skill => {
            delete (newIcons as any)[skill];
        });
        // Add new/updated skills, defaulting to a generic icon
        newSkillList.forEach(skill => {
            if (!newIcons[skill]) {
                (newIcons as any)[skill] = CodeXml;
            }
        });
        return newIcons;
    });


    toast({
        title: "Skill Category Updated!",
        description: `Category "${currentCategory.category}" has been updated.`,
    });
    setIsSubmitting(false);
    setDialogOpen(false);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="categoryName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Frontend" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skills (one per line)</FormLabel>
              <FormControl>
                <Textarea placeholder="React&#10;Next.js&#10;TypeScript" className="min-h-[150px]" {...field} />
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
