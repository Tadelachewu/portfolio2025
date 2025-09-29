
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
import { skills as initialSkills, skillIcons as initialSkillIcons } from "@/app/portfolio-data";

const formSchema = z.object({
  skillName: z.string().min(1, "Skill name cannot be empty."),
});

type EditSkillFormProps = {
  setDialogOpen: (open: boolean) => void;
  setSkills: React.Dispatch<React.SetStateAction<typeof initialSkills>>;
  setSkillIcons: React.Dispatch<React.SetStateAction<typeof initialSkillIcons>>;
  currentCategory: string;
  currentSkillName: string;
};

export function EditSkillForm({ setDialogOpen, setSkills, setSkillIcons, currentCategory, currentSkillName }: EditSkillFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skillName: currentSkillName,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    setSkills(prevSkills => {
      return prevSkills.map(cat => {
        if (cat.category === currentCategory) {
          return {
            ...cat,
            items: cat.items.map(item => item === currentSkillName ? values.skillName : item)
          };
        }
        return cat;
      });
    });
    
    if (currentSkillName !== values.skillName) {
        setSkillIcons(prevIcons => {
            const newIcons = { ...prevIcons };
            const icon = (newIcons as any)[currentSkillName];
            delete (newIcons as any)[currentSkillName];
            (newIcons as any)[values.skillName] = icon;
            return newIcons;
        });
    }


    toast({
        title: "Skill Updated!",
        description: `Skill "${currentSkillName}" has been updated to "${values.skillName}".`,
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
