
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
import { PlaceHolderImages } from "@/lib/placeholder-images";

const formSchema = z.object({
  imageUrl: z.string().url("Please enter a valid URL."),
});

type EditImageFormProps = {
  setDialogOpen: (open: boolean) => void;
  onImageUpdate: (id: string, newUrl: string) => void;
  currentImageUrl: string;
  imageId: string;
};

export function EditImageForm({ setDialogOpen, onImageUpdate, currentImageUrl, imageId }: EditImageFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageUrl: currentImageUrl,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Update state via the callback
    onImageUpdate(imageId, values.imageUrl);

    // Also update localStorage
    try {
        const storedImages = JSON.parse(localStorage.getItem('placeholderImages') || '[]');
        const updatedImages = storedImages.map((img: any) => 
            img.id === imageId ? { ...img, imageUrl: values.imageUrl } : img
        );
        localStorage.setItem('placeholderImages', JSON.stringify(updatedImages));
        // Dispatch a storage event to notify other components (like the header)
        window.dispatchEvent(new Event('storage'));
    } catch (error) {
        console.error("Failed to update image URL in localStorage", error);
    }


    toast({
        title: "Image Updated!",
        description: "The image has been successfully updated.",
    });
    setIsSubmitting(false);
    setDialogOpen(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input 
                  placeholder="https://example.com/your-image.jpg"
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
