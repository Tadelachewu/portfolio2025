
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Lightbulb, PlusCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AddProjectForm } from '@/components/forms/add-project-form';
import { useState, useEffect } from 'react';
import type { projects } from '@/app/portfolio-data';
import { useAuth } from '@/hooks/use-auth';

type ProjectsSectionProps = {
  projects: typeof projects;
  setProjects: React.Dispatch<React.SetStateAction<typeof projects>>;
};

export default function ProjectsSection({ projects, setProjects }: ProjectsSectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { isAdmin } = useAuth();
  
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


  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary flex-1 flex items-center">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
            <div className='text-left'>
                <div className="flex items-center gap-4 mb-4">
                    <Lightbulb className="h-10 w-10 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                </div>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Here are some of the projects I'm proud to have worked on.</p>
            </div>
            {isAdmin && (
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                  <AddProjectForm setDialogOpen={setIsDialogOpen} setProjects={setProjects} />
                </DialogContent>
              </Dialog>
            )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const projectImage = images.find(p => p.id === project.image);
            return (
              <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                {projectImage && (
                  <Image
                    src={projectImage.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint={projectImage.imageHint}
                    key={projectImage.imageUrl}
                  />
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4 text-base text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  {project.github && project.github !== '#' ? (
                    <Button asChild variant="outline">
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                  ) : (
                     <Button variant="outline" disabled>
                        <Github className="mr-2 h-4 w-4" />
                        Coming Soon
                      </Button>
                  )}
                  {project.live && project.live !== '#' ? (
                    <Button asChild>
                      <Link href={project.live} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  ) : (
                    <Button disabled>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
