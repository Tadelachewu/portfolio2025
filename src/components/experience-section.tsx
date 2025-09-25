
'use client';

import { CheckCircle, PlusCircle, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AddExperienceForm } from '@/components/forms/add-experience-form';
import { useState } from 'react';
import type { experience } from '@/app/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

type ExperienceSectionProps = {
  experience: typeof experience;
  setExperience: React.Dispatch<React.SetStateAction<typeof experience>>;
};

export default function ExperienceSection({ experience, setExperience }: ExperienceSectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="experience" className="py-20 lg:py-32 flex-1 flex items-center">
      <div className="container">
        <div className="flex justify-between items-center mb-16">
            <div className='text-left'>
                <div className="flex items-center gap-4 mb-4">
                    <Briefcase className="h-10 w-10 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
                </div>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">My professional journey and key contributions.</p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                    <PlusCircle className="mr-2 h-5 w-5"/>
                    Add Experience
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle>Add New Experience</DialogTitle>
                  <DialogDescription>
                    Fill out the form below to add a new work experience.
                  </DialogDescription>
                </DialogHeader>
                <AddExperienceForm setDialogOpen={setIsDialogOpen} setExperience={setExperience} />
              </DialogContent>
            </Dialog>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {experience.map((item, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-2">
                <div>
                    <CardTitle className="text-xl font-bold text-primary">{item.role}</CardTitle>
                    <CardDescription className="text-md font-semibold text-muted-foreground">{item.company}</CardDescription>
                </div>
                <p className="text-sm text-muted-foreground font-medium bg-secondary px-3 py-1 rounded-full">{item.duration}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
