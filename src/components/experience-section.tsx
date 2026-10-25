
'use client';

import { CheckCircle, PlusCircle, Briefcase, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { AddExperienceForm } from '@/components/forms/add-experience-form';
import { EditImageForm } from '@/components/forms/edit-image-form';
import { EditExperienceForm } from '@/components/forms/edit-experience-form';
import { useState } from 'react';
import type { Experience } from '@/app/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/use-auth';
import SectionHeader from '@/components/section-header';
import Image from 'next/image';

type ExperienceSectionProps = {
  experience: Experience[];
  setExperience: React.Dispatch<React.SetStateAction<Experience[]>>;
};

export default function ExperienceSection({ experience, setExperience }: ExperienceSectionProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editImageState, setEditImageState] = useState<{ dialogOpen: boolean; currentImageUrl?: string; index?: number }>({ dialogOpen: false });
  const [editExperienceState, setEditExperienceState] = useState<{ dialogOpen: boolean; experience?: Experience, index?: number }>({ dialogOpen: false });

  const { isAdmin } = useAuth();
  
  const handleImageUpdate = (newUrl: string) => {
    if (editImageState.index === undefined) return;
    
    const updatedExperience = experience.map((exp, index) => {
        if (index === editImageState.index) {
            return { ...exp, logoUrl: newUrl };
        }
        return exp;
    });
    setExperience(updatedExperience);
  };

  const handleDeleteExperience = (indexToDelete: number) => {
    setExperience(prevExperience => prevExperience.filter((_, index) => index !== indexToDelete));
  };


  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Career"
          icon={Briefcase}
          title="Work Experience"
          description="My professional journey and key contributions."
          action={isAdmin && (
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
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
                  <AddExperienceForm setDialogOpen={setIsAddDialogOpen} setExperience={setExperience} />
                </DialogContent>
              </Dialog>
            )}
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {experience.map((item, index) => {
            return (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg relative group">
                <CardHeader className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 p-6">
                  <div className="flex items-start gap-4">
                      {item.logoUrl && (
                         <div className="relative flex-shrink-0">
                            <Image
                                src={item.logoUrl}
                                alt={`${item.company} logo`}
                                width={56}
                                height={56}
                                className="rounded-md object-contain border bg-white p-1"
                                key={item.logoUrl}
                            />
                             {isAdmin && (
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="absolute -bottom-2 -right-2 h-7 w-7 rounded-full"
                                    onClick={() => setEditImageState({
                                        dialogOpen: true,
                                        currentImageUrl: item.logoUrl,
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
                          <CardTitle className="font-headline text-lg font-semibold leading-snug">{item.role}</CardTitle>
                          <CardDescription className="mt-1 text-sm font-medium text-primary-ink">{item.company}</CardDescription>
                      </div>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium bg-muted px-3 py-1 rounded-full whitespace-nowrap self-start">
                    {item.duration}
                  </p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2.5 text-sm leading-relaxed">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                  {item.skills && item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="rounded-md font-medium">{skill}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                {isAdmin && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="outline" size="icon" onClick={() => setEditExperienceState({ dialogOpen: true, experience: item, index: index })}>
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit Experience</span>
                        </Button>
                         <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="destructive" size="icon">
                                    <Trash2 className="h-4 w-4" />
                                    <span className="sr-only">Delete Experience</span>
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete this experience entry.
                                </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleDeleteExperience(index)}>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                )}
              </Card>
            );
          })}
        </div>
        
        <Dialog
            open={editImageState.dialogOpen}
            onOpenChange={(isOpen) => setEditImageState({ ...editImageState, dialogOpen: isOpen })}
          >
            {editImageState.currentImageUrl && editImageState.index !== undefined && (
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <DialogTitle>Edit Company Logo</DialogTitle>
                    <DialogDescription>
                      Update the URL for this company's logo.
                    </DialogDescription>
                  </DialogHeader>
                  <EditImageForm
                    setDialogOpen={(isOpen) => setEditImageState({ ...editImageState, dialogOpen: isOpen })}
                    onImageUpdate={(id_unused, newUrl) => handleImageUpdate(newUrl)}
                    currentImageUrl={editImageState.currentImageUrl}
                    imageId={`experience-logo-${editImageState.index}`}
                  />
                </DialogContent>
            )}
        </Dialog>

        <Dialog open={editExperienceState.dialogOpen} onOpenChange={(isOpen) => setEditExperienceState({ ...editExperienceState, dialogOpen: isOpen })}>
             {editExperienceState.experience && editExperienceState.index !== undefined && (
                <DialogContent className="sm:max-w-[625px]">
                    <DialogHeader>
                        <DialogTitle>Edit Experience</DialogTitle>
                        <DialogDescription>
                        Make changes to your work experience here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <EditExperienceForm
                        setDialogOpen={(isOpen) => setEditExperienceState({ ...editExperienceState, dialogOpen: isOpen })}
                        setExperience={setExperience}
                        experience={editExperienceState.experience}
                        index={editExperienceState.index}
                    />
                </DialogContent>
             )}
        </Dialog>

      </div>
    </section>
  );
}
