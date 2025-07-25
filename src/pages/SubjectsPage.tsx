import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSubjectsForGrade } from '@/data/naturalScienceQuizzes';
import SubjectCard from '@/components/SubjectCard';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

const SubjectsPage = () => {
  const { grade } = useParams();
  const navigate = useNavigate();
  const [naturalSciences, setNaturalSciences] = useState<any[]>([]);
  const [socialSciences, setSocialSciences] = useState<any[]>([]);
  const [languages, setLanguages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const gradeNumber = parseInt(grade || '12', 10);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSelectQuiz = (quiz: any) => {
    // Placeholder for quiz selection logic
    console.log('Quiz selected:', quiz);
  };

  useEffect(() => {
    const loadSubjects = () => {
      setLoading(true);
      try {
        const allSubjects = getSubjectsForGrade(gradeNumber);
        
        if (gradeNumber === 11) {
          // For Grade 11, we currently only have Agriculture
          setNaturalSciences([allSubjects.agriculture]);
          setSocialSciences([]);
          setLanguages([]);
        } else if (gradeNumber === 12) {
          setNaturalSciences(Object.values(allSubjects).filter((subject: any) =>
            ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Agriculture', 'Geography'].includes(subject.name)
          ));
          setSocialSciences(Object.values(allSubjects).filter((subject: any) =>
            ['Civics', 'History'].includes(subject.name)
          ));
          setLanguages(Object.values(allSubjects).filter((subject: any) =>
            ['English'].includes(subject.name)
          ));
        }
      } catch (error) {
        console.error('Error loading subjects:', error);
        setError(`Failed to load Grade ${gradeNumber} subjects`);
      } finally {
        setLoading(false);
      }
    };

    loadSubjects();
  }, [gradeNumber]);

  if (loading) {
    return (
      <div className="container mx-auto p-4 min-h-screen bg-slate-900">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="text-white hover:bg-slate-800 mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h2 className="text-2xl font-semibold text-white">
            Loading Grade {gradeNumber} Subjects...
          </h2>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-4 w-[250px] bg-slate-700" />
          <Skeleton className="h-4 w-[400px] bg-slate-700" />
          <Skeleton className="h-24 bg-slate-700" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 min-h-screen bg-slate-900">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="text-white hover:bg-slate-800 mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h2 className="text-2xl font-semibold text-white">
            Error Loading Subjects
          </h2>
        </div>
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
          <p className="text-red-400 text-lg mb-4">{error}</p>
          <Button onClick={handleBack} className="bg-blue-600 hover:bg-blue-700 text-white">
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 min-h-screen bg-slate-900">
      <div className="flex items-center mb-6">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="text-white hover:bg-slate-800 mr-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-semibold text-white">
          Grade {gradeNumber} Subjects
        </h1>
      </div>

      {naturalSciences.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Natural Sciences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {naturalSciences.map((subject, index) => (
              <SubjectCard
                key={index}
                subject={subject}
                progress={{ completed: 5, total: subject.chapters.length, percentage: (5 / subject.chapters.length) * 100 }}
                grade={gradeNumber}
                onSelectQuiz={handleSelectQuiz}
              />
            ))}
          </div>
        </section>
      )}

      {socialSciences.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Social Sciences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialSciences.map((subject, index) => (
              <SubjectCard
                key={index}
                subject={subject}
                progress={{ completed: 3, total: subject.chapters.length, percentage: (3 / subject.chapters.length) * 100 }}
                grade={gradeNumber}
                onSelectQuiz={handleSelectQuiz}
              />
            ))}
          </div>
        </section>
      )}

      {languages.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {languages.map((subject, index) => (
              <SubjectCard
                key={index}
                subject={subject}
                progress={{ completed: 2, total: subject.chapters.length, percentage: (2 / subject.chapters.length) * 100 }}
                grade={gradeNumber}
                onSelectQuiz={handleSelectQuiz}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SubjectsPage;
