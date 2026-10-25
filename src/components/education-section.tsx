
'use client';

import { educationIcons } from '@/app/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, PlusCircle, Pencil, Trash2, CheckCircle, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { AddEducationForm } from '@/components/forms/add-education-form';
import { EditImageForm } from '@/components/forms/edit-image-form';
import { EditEducationForm } from '@/components/forms/edit-education-form';
import { useState } from 'react';
import type { education } from '@/app/portfolio-data';
import Image from 'next/image';
import { useAuth } from '@/hooks/use-auth';
import { cn } from '@/lib/utils';
import SectionHeader from '@/components/section-header';

type EducationSectionProps = {
  education: typeof education;
  setEducation: React.Dispatch<React.SetStateAction<typeof education>>;
};

export default function EducationSection({ education, setEducation }: EducationSectionProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editImageState, setEditImageState] = useState<{ dialogOpen: boolean; currentImageUrl?: string, index?: number }>({ dialogOpen: false });
  const [editEducationState, setEditEducationState] = useState<{ dialogOpen: boolean; education?: typeof education[0], index?: number }>({ dialogOpen: false });

  const { isAdmin } = useAuth();
  const CgpaIcon = educationIcons.cgpa;
  const ExitExamIcon = educationIcons.exitExam;
  const InstitutionIcon = educationIcons.institution;

  const handleImageUpdate = (newUrl: string) => {
    if (editImageState.index === undefined) return;
    
    const updatedEducation = education.map((edu, index) => {
        if (index === editImageState.index) {
            return { ...edu, logoUrl: newUrl };
        }
        return edu;
    });
    setEducation(updatedEducation);
  };

  const handleDeleteEducation = (indexToDelete: number) => {
    setEducation(prevEducation => prevEducation.filter((_, index) => index !== indexToDelete));
  };


  return (
    <section id="education" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <SectionHeader
          eyebrow="Academics"
          icon={GraduationCap}
          title="Education"
          description="My academic background and qualifications."
          action={isAdmin && (
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
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
                  <AddEducationForm setDialogOpen={setIsAddDialogOpen} setEducation={setEducation} />
                </DialogContent>
              </Dialog>
            )}
        />
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg mb-6 last:mb-0 relative group">
              <CardHeader className="border-b bg-muted/50 p-6">
                <div className="flex items-center gap-4">
                  {!edu.logoUrl && (
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-ink">
                      <Award className="h-7 w-7" aria-hidden="true" />
                    </div>
                  )}
                  {edu.logoUrl && (
                     <div className="relative h-16 w-16 flex-shrink-0 rounded-xl border bg-white p-1.5 shadow-sm">
                        <div className="relative h-full w-full">
                          <Image
                              src={edu.logoUrl}
                              alt={`${edu.institution} logo`}
                              fill
                              sizes="64px"
                              className="object-contain"
                              key={edu.logoUrl}
                          />
                        </div>
                        {isAdmin && (
                             <Button
                                variant="outline"
                                size="icon"
                                className="absolute -bottom-2 -right-2 h-7 w-7 rounded-full"
                                onClick={() => setEditImageState({
                                    dialogOpen: true,
                                    currentImageUrl: edu.logoUrl,
                                    index: index
                                })}
                            >
                                <Pencil className="h-4 w-4" />
                                <span className="sr-only">Edit Logo</span>
                            </Button>
                        )}
                    </div>
                  )}
                  <div>
                    <CardTitle className="font-headline text-lg font-semibold leading-snug">{edu.degree}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground font-medium">{edu.year}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                <div className={cn("flex items-center gap-3", !edu.cgpa && "sm:col-span-2")}>
                  <InstitutionIcon className="h-5 w-5 text-accent" />
                  <div>
                    <span className="font-semibold">Institution: </span>
                    <span>{edu.institution}</span>
                  </div>
                </div>
                {edu.cgpa && (
                  <div className="flex items-center gap-3">
                    <CgpaIcon className="h-5 w-5 text-accent" />
                    <div>
                      <span className="font-semibold">CGPA: </span>
                      <span>{edu.cgpa}</span>
                    </div>
                  </div>
                )}
                {edu.exitExam && (
                  <div className="flex items-center gap-3 col-span-1 sm:col-span-2">
                    <ExitExamIcon className="h-5 w-5 text-accent" />
                    <div>
                      <span className="font-semibold">Exit Exam Score: </span>
                      <span>{edu.exitExam}</span>
                    </div>
                  </div>
                )}
                {edu.details && edu.details.length > 0 && (
                  <ul className="col-span-1 sm:col-span-2 space-y-2.5 leading-relaxed">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
                {isAdmin && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="outline" size="icon" onClick={() => setEditEducationState({ dialogOpen: true, education: edu, index: index })}>
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit Education</span>
                        </Button>
                         <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="destructive" size="icon">
                                    <Trash2 className="h-4 w-4" />
                                    <span className="sr-only">Delete Education</span>
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete this education entry.
                                </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleDeleteEducation(index)}>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                )}
            </Card>
          ))}
        </div>
         <Dialog
            open={editImageState.dialogOpen}
            onOpenChange={(isOpen) => setEditImageState({ ...editImageState, dialogOpen: isOpen })}
          >
            {editImageState.currentImageUrl && editImageState.index !== undefined &&(
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <DialogTitle>Edit Institution Logo</DialogTitle>
                    <DialogDescription>
                      Update the URL for this institution's logo.
                    </DialogDescription>
                  </DialogHeader>
                  <EditImageForm
                    setDialogOpen={(isOpen) => setEditImageState({ ...editImageState, dialogOpen: isOpen })}
                    onImageUpdate={(id_unused, newUrl) => handleImageUpdate(newUrl)}
                    currentImageUrl={editImageState.currentImageUrl}
                    imageId={`education-logo-${editImageState.index}`}
                  />
                </DialogContent>
            )}
        </Dialog>
        <Dialog open={editEducationState.dialogOpen} onOpenChange={(isOpen) => setEditEducationState({ ...editEducationState, dialogOpen: isOpen })}>
             {editEducationState.education && editEducationState.index !== undefined && (
                <DialogContent className="sm:max-w-[625px]">
                    <DialogHeader>
                        <DialogTitle>Edit Education</DialogTitle>
                        <DialogDescription>
                        Make changes to your education entry here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <EditEducationForm
                        setDialogOpen={(isOpen) => setEditEducationState({ ...editEducationState, dialogOpen: isOpen })}
                        setEducation={setEducation}
                        education={editEducationState.education}
                        index={editEducationState.index}
                    />
                </DialogContent>
             )}
        </Dialog>

      </div>
    </section>
  );
}
