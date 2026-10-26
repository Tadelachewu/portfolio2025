
'use client';

import Image from 'next/image';
import { PlaceHolderImages, updatePlaceholderImage } from '@/lib/placeholder-images';
import { UserCircle2, Pencil } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { EditAboutForm } from '@/components/forms/edit-about-form';
import { EditImageForm } from '@/components/forms/edit-image-form';
import { useAuth } from '@/hooks/use-auth';
import SectionHeader from '@/components/section-header';

type AboutSectionProps = {
  aboutMe: string;
  setAboutMe: React.Dispatch<React.SetStateAction<string>>;
};

export default function AboutSection({ aboutMe, setAboutMe }: AboutSectionProps) {
  const [images, setImages] = useState(PlaceHolderImages);
  const profilePic = images.find(p => p.id === 'profile-picture');
  const [imageSrc, setImageSrc] = useState<string | null>(profilePic?.imageUrl || null);

  const [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  const { isAdmin } = useAuth();

  const handleImageUpdate = (id: string, newUrl: string) => {
    const updatedImages = updatePlaceholderImage(images, id, newUrl);
    setImages(updatedImages);
    // This is a bit of a hack to force a re-render in the layout for the favicon
    window.dispatchEvent(new Event('storage'));
  };

  // If uploaded image is removed the client should fall back to the saved originalImageUrl
  async function checkAndSetImage(p: any) {
    if (!p) return setImageSrc(null);
    const tryUrl = p.imageUrl;
    const original = p.originalImageUrl || null;
    const exists = await (async (url: string) => {
      try {
        // Try HEAD first
        const res = await fetch(url, { method: 'HEAD' });
        if (res.ok) return true;
      } catch (e) {
        // ignore
      }
      // Fallback to Image load
      return new Promise<boolean>((resolve) => {
        const img = new window.Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
      });
    })(tryUrl).catch(() => false);

    if (exists) setImageSrc(tryUrl);
    else if (original) setImageSrc(original);
    else setImageSrc(tryUrl);
  }

  // React to profilePic changes
  useEffect(() => {
    checkAndSetImage(profilePic);
  }, [profilePic]);

  // Optional section background from public/storage: tade-bg.jpg, falling back to tade-bg.png.
  const [backgroundSrc, setBackgroundSrc] = useState<string | null>(null);
  useEffect(() => {
    let mounted = true;
    (async () => {
      for (const candidate of ['/storage/tade-bg.jpg', '/storage/tade-bg.png']) {
        try {
          const res = await fetch(candidate, { method: 'HEAD' });
          if (res.ok && (res.headers.get('content-type') || '').startsWith('image')) {
            if (mounted) setBackgroundSrc(candidate);
            return;
          }
        } catch {
          // try the next candidate
        }
      }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <section id="about" className="relative isolate flex-1 overflow-hidden py-16 md:py-24 bg-secondary">
      {backgroundSrc && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-cover bg-[center_20%] bg-no-repeat"
            style={{ backgroundImage: `url('${backgroundSrc}')` }}
          />
          {/* Keeps the heading and summary readable over any photo, in both themes. */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/75 to-background/90" />
        </>
      )}
      <div className="container">
        <SectionHeader
          eyebrow="About"
          icon={UserCircle2}
          title="About Me"
          action={isAdmin && (
            <Dialog open={isAboutDialogOpen} onOpenChange={setIsAboutDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Pencil className="mr-2 h-4 w-4" />
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
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center animate-fade-in">
            {profilePic && (
              <div className="relative">
                <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-secondary shadow-xl">
                  <Image
                    src={imageSrc || profilePic.imageUrl}
                    alt={profilePic.description}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 192px, 256px"
                    priority
                    data-ai-hint={profilePic.imageHint}
                    key={imageSrc || profilePic.imageUrl}
                  />
                </div>
                {isAdmin && (
                  <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="icon" className="absolute -bottom-3 right-0 rounded-full">
                        <Pencil className="h-4 w-4" />
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
              </div>
            )}
          </div>
          <div className="md:col-span-2 animate-fade-in-up">
            <p className="max-w-prose text-base sm:text-lg text-muted-foreground leading-relaxed">
              {aboutMe}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
