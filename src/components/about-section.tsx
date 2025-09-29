
'use client';

import Image from 'next/image';
import { PlaceHolderImages, updatePlaceholderImage } from '@/lib/placeholder-images';
import { UserCircle2, Pencil } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { EditAboutForm } from '@/components/forms/edit-about-form';
import { EditImageForm } from '@/components/forms/edit-image-form';
import { useAuth } from '@/hooks/use-auth';

type AboutSectionProps = {
  aboutMe: string;
  setAboutMe: React.Dispatch<React.SetStateAction<string>>;
};

export default function AboutSection({ aboutMe, setAboutMe }: AboutSectionProps) {
  const [images, setImages] = useState(PlaceHolderImages);
  const profilePic = images.find(p => p.id === 'profile-picture');
  
  const [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  const { isAdmin } = useAuth();

  const handleImageUpdate = (id: string, newUrl: string) => {
    const updatedImages = updatePlaceholderImage(images, id, newUrl);
    setImages(updatedImages);
    // This is a bit of a hack to force a re-render in the layout for the favicon
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary flex-1 flex items-center">
      <div className="container">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-4">
                <UserCircle2 className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            </div>
            {isAdmin && (
              <Dialog open={isAboutDialogOpen} onOpenChange={setIsAboutDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline">
                      <Pencil className="mr-2 h-4 w-4"/>
                      Edit Summary
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle>Edit About Me</DialogTitle>
                    <DialogDescription>
                      Update your professional summary.
                    </DialogDescription>
                  </DialogHeader>
                  <EditAboutForm setDialogOpen={setIsAboutDialogOpen} setAboutMe={setAboutMe} currentDescription={aboutMe} />
                </DialogContent>
              </Dialog>
            )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 flex justify-center animate-fade-in relative">
            {profilePic && (
              <>
                <Image
                  src={profilePic.imageUrl}
                  alt={profilePic.description}
                  width={300}
                  height={300}
                  className="rounded-full aspect-square object-cover border-4 border-primary shadow-lg"
                  data-ai-hint={profilePic.imageHint}
                  key={profilePic.imageUrl} 
                />
                {isAdmin && (
                  <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
                    <DialogTrigger asChild>
                       <Button variant="outline" size="icon" className="absolute bottom-4 right-4 rounded-full">
                          <Pencil className="h-4 w-4"/>
                          <span className="sr-only">Edit Image</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[525px]">
                      <DialogHeader>
                        <DialogTitle>Edit Profile Picture</DialogTitle>
                        <DialogDescription>
                          Update the URL for your profile picture.
                        </DialogDescription>
                      </DialogHeader>
                      <EditImageForm 
                        setDialogOpen={setIsImageDialogOpen}
                        onImageUpdate={handleImageUpdate}
                        currentImageUrl={profilePic.imageUrl}
                        imageId={profilePic.id}
                      />
                    </DialogContent>
                  </Dialog>
                )}
              </>
            )}
            </div>
            <div className="md:col-span-2 animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
                {aboutMe}
            </p>
            </div>
        </div>
      </div>
    </section>
  );
}
