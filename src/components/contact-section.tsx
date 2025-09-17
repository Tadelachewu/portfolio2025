
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { sendEmail, SendEmailInput } from "@/ai/flows/send-email-flow";
import { contactInfo } from "@/app/portfolio-data";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await sendEmail(values as SendEmailInput);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
         toast({
            title: "Uh oh! Something went wrong.",
            description: result.error || "There was a problem sending your message. Please try again later.",
            variant: "destructive",
        });
      }
    } catch (error) {
        console.error("Failed to send email", error);
        toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with the request. Please try again later.",
            variant: "destructive",
        });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-32 flex-1 flex items-center">
      <div className="container">
        <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
                <MessageCircle className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            </div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-4 text-lg">
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 hover:text-primary transition-colors">
                    <Mail className="h-6 w-6 text-primary"/>
                    <span>{contactInfo.email}</span>
                </a>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 hover:text-primary transition-colors">
                    <Phone className="h-6 w-6 text-primary"/>
                    <span>{contactInfo.phone}</span>
                </a>
            </div>
            <h3 className="text-2xl font-semibold pt-6">Follow Me</h3>
             <div className="flex items-center gap-4">
                <Button asChild variant="outline" size="icon">
                    <Link href="#" target="_blank"><Linkedin /></Link>
                </Button>
                <Button asChild variant="outline" size="icon">
                    <Link href="https://github.com/Tadelachewu" target="_blank"><Github /></Link>
                </Button>
            </div>
          </div>

          <div>
             <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="text-base"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} className="text-base"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." {...field} className="min-h-[150px] text-base" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : <>
                        <MessageCircle className="mr-2 h-5 w-5"/>
                        Send Message
                    </>}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
