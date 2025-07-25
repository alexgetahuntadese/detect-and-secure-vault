
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuizInterface from '@/components/QuizInterface';
import { getQuestionsForQuiz } from '@/data/naturalScienceQuizzes';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

const Grade11QuizPage = () => {
  const { grade, subject, chapterId, difficulty } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleBack = () => {
    navigate(`/grade/${grade}/subject/${subject}/chapters`);
  };

  const handleQuizComplete = (result: any) => {
    console.log('Quiz completed:', result);
  };

  useEffect(() => {
    const loadQuiz = async () => {
      setLoading(true);
      try {
        const decodedChapter = decodeURIComponent(chapterId || '');
        const questions = getQuestionsForQuiz(subject || '', decodedChapter, difficulty || 'easy', 10);
        
        if (questions.length === 0) {
          setError(`No questions available for ${subject} - ${decodedChapter} (${difficulty})`);
        } else {
          setQuiz({
            subject: subject,
            chapter: decodedChapter,
            chapters: [decodedChapter],
            difficulty: difficulty,
            duration: 30, // 30 minutes
            questions: questions.length,
            grade: parseInt(grade || '11', 10)
          });
        }
      } catch (error) {
        console.error('Error loading quiz:', error);
        setError('Failed to load quiz');
      } finally {
        setLoading(false);
      }
    };

    loadQuiz();
  }, [grade, subject, chapterId, difficulty]);

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
            Loading Quiz...
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

  if (error || !quiz) {
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
            Error Loading Quiz
          </h2>
        </div>
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
          <p className="text-red-400 text-lg mb-4">{error || 'Quiz not found'}</p>
          <Button onClick={handleBack} className="bg-blue-600 hover:bg-blue-700 text-white">
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <QuizInterface
      quiz={quiz}
      user={{ name: 'Student', id: '1' }}
      onComplete={handleQuizComplete}
      onBack={handleBack}
    />
  );
};

export default Grade11QuizPage;
