import { skills, skillIcons } from '@/app/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Technical Skills</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">A snapshot of the technologies and tools I work with.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillCategory, index) => (
            <Card key={index} className="flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">{skillCategory.category}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {skillCategory.items.map((item, itemIndex) => {
                    const Icon = skillIcons[item];
                    return (
                      <li key={itemIndex} className="flex items-center gap-3">
                        {Icon && <Icon className="w-5 h-5 text-accent" />}
                        <span className="font-medium">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
