
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages, updatePlaceholderImage } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Globe, Lightbulb, PlusCircle, Pencil, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { AddProjectForm } from '@/components/forms/add-project-form';
import { EditImageForm } from '@/components/forms/edit-image-form';
import { EditProjectForm } from '@/components/forms/edit-project-form';
import { useState, useEffect } from 'react';
import type { projects } from '@/app/portfolio-data';
import { useAuth } from '@/hooks/use-auth';
import { usePagination } from '@/hooks/use-pagination';
import PaginationControls from '@/components/pagination-controls';
import SectionHeader from '@/components/section-header';

const PROJECTS_PER_PAGE = 6;

type ProjectsSectionProps = {
  projects: typeof projects;
  setProjects: React.Dispatch<React.SetStateAction<typeof projects>>;
};

export default function ProjectsSection({ projects, setProjects }: ProjectsSectionProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editImageState, setEditImageState] = useState<{ dialogOpen: boolean; imageId?: string; currentImageUrl?: string }>({ dialogOpen: false });
  const [editProjectState, setEditProjectState] = useState<{ dialogOpen: boolean; project?: typeof projects[0] }>({ dialogOpen: false });

  const { isAdmin } = useAuth();
  const pagination = usePagination(projects, { pageSize: PROJECTS_PER_PAGE, jumpOnAdd: 'last' });

  const [images, setImages] = useState(PlaceHolderImages);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedImages = localStorage.getItem('placeholderImages');
      if (storedImages) {
        setImages(JSON.parse(storedImages));
      }
    };
    window.addEventListener('storage', handleStorageChange);
    handleStorageChange();
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleImageUpdate = (id: string, newUrl: string) => {
    const updatedImages = updatePlaceholderImage(images, id, newUrl);
    setImages(updatedImages);
    window.dispatchEvent(new Event('storage'));
  };

  const handleDeleteProject = (titleToDelete: string) => {
    setProjects(prevProjects => prevProjects.filter(p => p.title !== titleToDelete));
  };


  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary scroll-mt-16">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          icon={Lightbulb}
          title="Featured Projects"
          description="Mobile apps, AI tools, bots and enterprise systems I have designed, built and shipped."
          action={isAdmin && (
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                      <PlusCircle className="mr-2 h-5 w-5"/>
                      Add Project
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle>Add New Project</DialogTitle>
                    <DialogDescription>
                      Fill out the form below to add a new project to your portfolio.
                    </DialogDescription>
                  </DialogHeader>
                  <AddProjectForm setDialogOpen={setIsAddDialogOpen} setProjects={setProjects} />
                </DialogContent>
              </Dialog>
            )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pagination.pageItems.map((project, index) => {
            const projectImage = images.find(p => p.id === project.image);

            function ProjectCard({ proj, projImage }: { proj: typeof projects[0]; projImage?: typeof images[0] }) {
              const localPath = projImage?.imagePath ?? (projImage ? `/images/${projImage.id}.png` : undefined);
              const fallback = projImage?.imageUrl;
              const [src, setSrc] = useState<string | undefined>(undefined);

              useEffect(() => {
                let mounted = true;
                async function checkAndSet() {
                  if (localPath) {
                    try {
                      const res = await fetch(localPath, { method: 'HEAD' });
                      if (res.ok) {
                        const ct = res.headers.get('content-type') || '';
                        if (ct.startsWith('image')) {
                          if (mounted) setSrc(localPath);
                          return;
                        }
                      }
                    } catch (e) {
                      // ignore and fallback
                    }
                  }
                  if (fallback && mounted) setSrc(fallback);
                }

                checkAndSet();
                return () => { mounted = false; };
              }, [localPath, fallback]);

              return (
                <Card key={index} className="group flex flex-col overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
                  <div className="relative aspect-[3/2] overflow-hidden border-b bg-muted">
                    {src && (
                      <>
                        <Image
                          src={src}
                          alt={proj.title}
                          width={600}
                          height={400}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          data-ai-hint={projImage?.imageHint}
                          onError={() => {
                            if (fallback && src !== fallback) setSrc(fallback);
                          }}
                          unoptimized
                          key={src}
                        />
                        {isAdmin && projImage && (
                          <Button
                            variant="outline"
                            size="icon"
                            className="absolute bottom-2 right-2 rounded-full"
                            onClick={() => setEditImageState({
                              dialogOpen: true,
                              imageId: projImage.id,
                              currentImageUrl: projImage.imageUrl
                            })}
                          >
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit Image</span>
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="font-headline text-xl font-semibold leading-snug">{proj.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{proj.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="rounded-md font-medium">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t pt-4">
                    <div className="flex flex-wrap gap-2">
                      {proj.github && proj.github !== '#' ? (
                        <Button asChild variant="outline" size="sm">
                          <Link href={proj.github} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" disabled>
                          <Github className="mr-2 h-4 w-4" />
                          Coming Soon
                        </Button>
                      )}
                      {proj.live && proj.live !== '#' ? (
                        <Button asChild size="sm">
                          <Link href={proj.live} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {proj.liveLabel ?? 'Live Demo'}
                          </Link>
                        </Button>
                      ) : (
                        <Button size="sm" disabled>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Coming Soon
                        </Button>
                      )}
                      {proj.web && (
                        <Button asChild variant="secondary" size="sm">
                          <Link href={proj.web} target="_blank">
                            <Globe className="mr-2 h-4 w-4" />
                            {proj.webLabel ?? 'Web App'}
                          </Link>
                        </Button>
                      )}
                    </div>
                    {isAdmin && (
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={() => setEditProjectState({ dialogOpen: true, project: proj })}>
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit Project</span>
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive" size="icon">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete Project</span>
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete this project.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDeleteProject(proj.title)}>Delete</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    )}
                    {isAdmin && (
                      <div className="ml-4 text-sm text-muted-foreground">
                        <a href={src} target="_blank" rel="noreferrer">Open image</a>
                      </div>
                    )}
                  </CardFooter>
                </Card>
              );
            }

            return <ProjectCard key={project.title} proj={project} projImage={projectImage} />;
          })}
        </div>
        <PaginationControls
          page={pagination.page}
          totalPages={pagination.totalPages}
          start={pagination.start}
          end={pagination.end}
          total={pagination.total}
          itemLabel="projects"
          onPageChange={pagination.setPage}
          scrollTargetId="projects"
        />
         <Dialog
            open={editImageState.dialogOpen}
            onOpenChange={(isOpen) => setEditImageState({ ...editImageState, dialogOpen: isOpen })}
          >
            {editImageState.imageId && editImageState.currentImageUrl && (
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <DialogTitle>Edit Project Image</DialogTitle>
                    <DialogDescription>
                      Update the URL for this project's image.
                    </DialogDescription>
                  </DialogHeader>
                  <EditImageForm
                    setDialogOpen={(isOpen) => setEditImageState({ ...editImageState, dialogOpen: isOpen })}
                    onImageUpdate={handleImageUpdate}
                    currentImageUrl={editImageState.currentImageUrl}
                    imageId={editImageState.imageId}
                  />
                </DialogContent>
            )}
        </Dialog>

        <Dialog open={editProjectState.dialogOpen} onOpenChange={(isOpen) => setEditProjectState({ ...editProjectState, dialogOpen: isOpen })}>
             {editProjectState.project && (
                <DialogContent className="sm:max-w-[625px]">
                    <DialogHeader>
                        <DialogTitle>Edit Project</DialogTitle>
                        <DialogDescription>
                        Make changes to your project here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <EditProjectForm
                        setDialogOpen={(isOpen) => setEditProjectState({ ...editProjectState, dialogOpen: isOpen })}
                        setProjects={setProjects}
                        project={editProjectState.project}
                    />
                </DialogContent>
             )}
        </Dialog>

      </div>
    </section>
  );
}
