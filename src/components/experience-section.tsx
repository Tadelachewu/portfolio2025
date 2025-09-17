import { experience } from '@/app/portfolio-data';
import { Briefcase, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
                <Briefcase className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
            </div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">My professional journey and key contributions.</p>
        </div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-border rounded-full"></div>

          {experience.map((item, index) => (
            <div key={index} className={`mb-12 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="hidden md:block w-5/12"></div>
              
              {/* Timeline Dot */}
              <div className="z-10 absolute left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
                <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center ring-4 ring-background">
                  <Briefcase className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>
              
              {/* Timeline Card */}
              <div className="w-full md:w-5/12 bg-card p-6 rounded-lg shadow-lg border border-border transition-all hover:shadow-xl hover:border-primary">
                <p className="text-sm text-muted-foreground mb-1">{item.duration}</p>
                <h3 className="text-xl font-bold text-primary">{item.role}</h3>
                <p className="text-md font-semibold text-muted-foreground mb-4">{item.company}</p>
                <ul className="space-y-2">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
