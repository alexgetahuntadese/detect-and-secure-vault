
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSubjectsForGrade, getSocialScienceSubjectsForGrade, getOtherSubjectsForGrade } from '@/data/naturalScienceQuizzes';
import SubjectSection from '@/components/SubjectSection';
import { Button } from "@/components/ui/button";
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
          // For Grade 11, we now have all subjects in one place
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

      <SubjectSection
        title={gradeNumber === 11 ? "All Subjects" : "Natural Sciences"}
        subjects={naturalScienceSubjects}
        badgeColor="bg-blue-100 text-blue-800"
        onSelectQuiz={handleSelectQuiz}
        grade={gradeNumber}
      />

      {gradeNumber === 12 && socialScienceSubjects.length > 0 && (
        <SubjectSection
          title="Social Sciences"
          subjects={socialScienceSubjects}
          badgeColor="bg-green-100 text-green-800"
          onSelectQuiz={handleSelectQuiz}
          grade={gradeNumber}
        />
      )}

      {gradeNumber === 12 && otherSubjects.length > 0 && (
        <SubjectSection
          title="Other Subjects"
          subjects={otherSubjects}
          badgeColor="bg-purple-100 text-purple-800"
          onSelectQuiz={handleSelectQuiz}
          grade={gradeNumber}
        />
      )}
    </div>
  );
};

export default SubjectsPage;
