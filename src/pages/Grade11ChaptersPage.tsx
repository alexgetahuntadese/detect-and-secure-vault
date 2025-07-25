
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSubjectsForGrade } from '@/data/naturalScienceQuizzes';
import ChapterCard from '@/components/ChapterCard';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from "@/components/ui/skeleton";

const Grade11ChaptersPage = () => {
  const { grade, subject } = useParams();
  const navigate = useNavigate();
  const [subjectData, setSubjectData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const gradeNumber = parseInt(grade || '11', 10);

  const handleBack = () => {
    navigate(`/grade/${grade}/subjects`);
  };

  const handleSelectQuiz = (quiz: any) => {
    console.log('Quiz selected:', quiz);
  };

  useEffect(() => {
    const loadSubject = () => {
      setLoading(true);
      try {
        const subjects = getSubjectsForGrade(gradeNumber);
        const subjectKey = Object.keys(subjects).find(key => 
          subjects[key].name.toLowerCase() === subject?.toLowerCase()
        );
        
        if (subjectKey) {
          setSubjectData(subjects[subjectKey]);
        } else {
          setError(`Subject "${subject}" not found for Grade ${gradeNumber}`);
        }
      } catch (error) {
        console.error('Error loading subject:', error);
        setError(`Failed to load subject data`);
      } finally {
        setLoading(false);
      }
    };

    loadSubject();
  }, [gradeNumber, subject]);

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
            Loading Chapters...
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

  if (error || !subjectData) {
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
            Error Loading Chapters
          </h2>
        </div>
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
          <p className="text-red-400 text-lg mb-4">{error || 'Subject not found'}</p>
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
          Back to Subjects
        </Button>
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-blue-500">
            <subjectData.icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-white">
              Grade {gradeNumber} - {subjectData.name}
            </h1>
            <Badge variant="secondary" className="mt-2 bg-white/20 text-white">
              {subjectData.chapters.length} chapters
            </Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {subjectData.chapters.map((chapter: string, index: number) => (
          <ChapterCard
            key={index}
            chapter={chapter}
            subject={subjectData.name}
            subjectIcon={subjectData.icon}
            onSelectQuiz={handleSelectQuiz}
            grade={gradeNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default Grade11ChaptersPage;
