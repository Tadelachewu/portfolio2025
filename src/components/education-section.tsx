
'use client';

import { educationIcons } from '@/app/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AddEducationForm } from '@/components/forms/add-education-form';
import { useState } from 'react';
import type { education } from '@/app/portfolio-data';
import Image from 'next/image';
import { useAuth } from '@/hooks/use-auth';

type EducationSectionProps = {
  education: typeof education;
  setEducation: React.Dispatch<React.SetStateAction<typeof education>>;
};

export default function EducationSection({ education, setEducation }: EducationSectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { isAdmin } = useAuth();
  const CgpaIcon = educationIcons.cgpa;
  const ExitExamIcon = educationIcons.exitExam;
  const InstitutionIcon = educationIcons.institution;

  return (
    <section id="education" className="py-20 lg:py-32 bg-secondary flex-1 flex items-center">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
            <div className='text-left'>
                <div className="flex items-center gap-4 mb-4">
                    <GraduationCap className="h-10 w-10 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
                </div>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">My academic background and qualifications.</p>
            </div>
            {isAdmin && (
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                      <PlusCircle className="mr-2 h-5 w-5"/>
                      Add Education
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle>Add New Education</DialogTitle>
                    <DialogDescription>
                      Fill out the form below to add a new education entry.
                    </DialogDescription>
                  </DialogHeader>
                  <AddEducationForm setDialogOpen={setIsDialogOpen} setEducation={setEducation} />
                </DialogContent>
              </Dialog>
            )}
        </div>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 mb-8 last:mb-0">
              <CardHeader className="bg-muted p-6">
                <div className="flex items-center gap-4">
                  {edu.logoUrl && (
                     <div className="bg-white p-2 rounded-full flex-shrink-0">
                        <Image
                            src={edu.logoUrl}
                            alt={`${edu.institution} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>
                  )}
                  <div>
                    <CardTitle className="text-2xl font-bold">{edu.degree}</CardTitle>
                    <p className="text-lg text-muted-foreground font-medium">{edu.year}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
                <div className="flex items-center gap-3">
                  <InstitutionIcon className="h-6 w-6 text-accent" />
                  <div>
                    <span className="font-semibold">Institution: </span>
                    <span>{edu.institution}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CgpaIcon className="h-6 w-6 text-accent" />
                  <div>
                    <span className="font-semibold">CGPA: </span>
                    <span>{edu.cgpa}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 col-span-1 sm:col-span-2">
                  <ExitExamIcon className="h-6 w-6 text-accent" />
                  <div>
                    <span className="font-semibold">Exit Exam Score: </span>
                    <span>{edu.exitExam}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
