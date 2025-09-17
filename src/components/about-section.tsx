import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutSection() {
  const profilePic = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1 flex justify-center animate-fade-in">
          {profilePic && (
             <Image
              src={profilePic.imageUrl}
              alt={profilePic.description}
              width={300}
              height={300}
              className="rounded-full aspect-square object-cover border-4 border-primary shadow-lg"
              data-ai-hint={profilePic.imageHint}
            />
          )}
        </div>
        <div className="md:col-span-2 animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Passionate developer aiming to become a Computer Scientist specializing in Cybersecurity, AI, and Full-Stack Development. With a strong foundation in modern web technologies and a drive for continuous learning, I am dedicated to building efficient, scalable, and secure applications. I thrive in collaborative environments and am always eager to take on new challenges that push the boundaries of technology.
          </p>
        </div>
      </div>
    </section>
  );
}
