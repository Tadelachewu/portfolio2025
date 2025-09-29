
'use client';

import { skillIcons as initialSkillIcons } from '@/app/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, PlusCircle, CodeXml, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { AddSkillForm } from '@/components/forms/add-skill-form';
import { useState } from 'react';
import type { skills } from '@/app/portfolio-data';
import { useAuth } from '@/hooks/use-auth';
import { EditSkillForm } from './forms/edit-skill-form';

type SkillsSectionProps = {
  skills: typeof skills;
  setSkills: React.Dispatch<React.SetStateAction<typeof skills>>;
  skillIcons: typeof initialSkillIcons;
  setSkillIcons: React.Dispatch<React.SetStateAction<typeof initialSkillIcons>>;
};

export default function SkillsSection({ skills, setSkills, skillIcons, setSkillIcons }: SkillsSectionProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editState, setEditState] = useState<{ dialogOpen: boolean; category?: string, skill?: string }>({ dialogOpen: false });

  const { isAdmin } = useAuth();

  const handleDeleteSkill = (category: string, skillToDelete: string) => {
    setSkills(prevSkills => 
        prevSkills.map(cat => 
            cat.category === category 
            ? { ...cat, items: cat.items.filter(item => item !== skillToDelete) }
            : cat
        )
    );
    setSkillIcons(prevIcons => {
        const newIcons = { ...prevIcons };
        delete (newIcons as any)[skillToDelete];
        return newIcons;
    });
  };

  return (
    <section id="skills" className="py-20 lg:py-32 flex-1 flex items-center">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
            <div className='text-left'>
                <div className="flex items-center gap-4 mb-4">
                    <Wrench className="h-10 w-10 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Technical Skills</h2>
                </div>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">A snapshot of the technologies and tools I work with.</p>
            </div>
            {isAdmin && (
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                      <PlusCircle className="mr-2 h-5 w-5"/>
                      Add Skill
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add New Skill</DialogTitle>
                    <DialogDescription>
                      Select a category and enter the skill name.
                    </DialogDescription>
                  </DialogHeader>
                  <AddSkillForm setDialogOpen={setIsAddDialogOpen} setSkills={setSkills} setSkillIcons={setSkillIcons}/>
                </DialogContent>
              </Dialog>
            )}
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
                    const Icon = skillIcons[item] || CodeXml;
                    return (
                      <li key={itemIndex} className="flex items-center justify-between gap-3 group">
                        <div className="flex items-center gap-3">
                            {Icon && <Icon className="w-5 h-5 text-accent" />}
                            <span className="font-medium">{item}</span>
                        </div>
                        {isAdmin && (
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setEditState({ dialogOpen: true, category: skillCategory.category, skill: item })}>
                                    <Pencil className="h-4 w-4" />
                                </Button>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive hover:text-destructive">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                        <AlertDialogTitle>Delete "{item}"?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete this skill.
                                        </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => handleDeleteSkill(skillCategory.category, item)}>Delete</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={editState.dialogOpen} onOpenChange={(isOpen) => setEditState({ ...editState, dialogOpen: isOpen })}>
             {editState.skill && editState.category && (
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Skill</DialogTitle>
                        <DialogDescription>
                        Make changes to your skill here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <EditSkillForm
                        setDialogOpen={(isOpen) => setEditState({ ...editState, dialogOpen: isOpen })}
                        setSkills={setSkills}
                        setSkillIcons={setSkillIcons}
                        currentCategory={editState.category}
                        currentSkillName={editState.skill}
                    />
                </DialogContent>
             )}
        </Dialog>

      </div>
    </section>
  );
}
