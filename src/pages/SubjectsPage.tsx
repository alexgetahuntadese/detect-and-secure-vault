
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSubjectsForGrade, getSocialScienceSubjectsForGrade, getOtherSubjectsForGrade } from '@/data/naturalScienceQuizzes';
import SubjectCard from '@/components/SubjectCard';
import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

const SubjectsPage = () => {
  const { grade } = useParams();
  const navigate = useNavigate();
  const [naturalScienceSubjects, setNaturalScienceSubjects] = useState<any[]>([]);
  const [socialScienceSubjects, setSocialScienceSubjects] = useState<any[]>([]);
  const [otherSubjects, setOtherSubjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const gradeNumber = parseInt(grade || '12', 10);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSelectQuiz = (quiz: any) => {
    console.log('Quiz selected:', quiz);
  };

  // Mock progress data for demonstration
  const getMockProgress = () => ({
    completed: Math.floor(Math.random() * 10),
    total: 10,
    percentage: Math.floor(Math.random() * 100)
  });

  useEffect(() => {
    const loadSubjects = () => {
      setLoading(true);
      try {
        const naturalSubjects = getSubjectsForGrade(gradeNumber);
        setNaturalScienceSubjects(Object.values(naturalSubjects));

        if (gradeNumber === 12) {
          const socialSubjects = getSocialScienceSubjectsForGrade(gradeNumber);
          setSocialScienceSubjects(Object.values(socialSubjects));
          
          const otherSubs = getOtherSubjectsForGrade(gradeNumber);
          setOtherSubjects(Object.values(otherSubs));
        } else if (gradeNumber === 11) {
          setSocialScienceSubjects([]);
          setOtherSubjects([]);
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-48 bg-slate-700" />
          ))}
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

  const renderSubjectSection = (title: string, subjects: any[], badgeColor: string) => {
    if (subjects.length === 0) return null;

    return (
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <Badge variant="secondary" className={`ml-3 ${badgeColor}`}>
            {subjects.length} subjects
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <SubjectCard
              key={index}
              subject={subject}
              progress={getMockProgress()}
              grade={gradeNumber}
              onSelectQuiz={handleSelectQuiz}
            />
          ))}
        </div>
      </div>
    );
  };

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

      {renderSubjectSection(
        gradeNumber === 11 ? "All Subjects" : "Natural Sciences",
        naturalScienceSubjects,
        "bg-blue-100 text-blue-800"
      )}

      {gradeNumber === 12 && renderSubjectSection(
        "Social Sciences",
        socialScienceSubjects,
        "bg-green-100 text-green-800"
      )}

      {gradeNumber === 12 && renderSubjectSection(
        "Other Subjects",
        otherSubjects,
        "bg-purple-100 text-purple-800"
      )}
    </div>
  );
};

export default SubjectsPage;
