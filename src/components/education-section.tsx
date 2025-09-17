
import { education, educationIcons } from '@/app/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
  const edu = education[0];
  const DegreeIcon = educationIcons.degree;
  const InstitutionIcon = educationIcons.institution;
  const CgpaIcon = educationIcons.cgpa;
  const ExitExamIcon = educationIcons.exitExam;

  return (
    <section id="education" className="py-20 lg:py-32 bg-secondary flex-1 flex items-center">
      <div className="container">
        <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
                <GraduationCap className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            </div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">My academic background and qualifications.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="bg-muted p-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  <DegreeIcon className="h-8 w-8" />
                </div>
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
        </div>
      </div>
    </section>
  );
}
