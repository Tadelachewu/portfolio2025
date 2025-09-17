
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/app/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Lightbulb } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
                <Lightbulb className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            </div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Here are some of the projects I'm proud to have worked on.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.image);
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
                  <Button asChild variant="outline" disabled={project.github === '#'}>
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  {project.live !== '#' ? (
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
