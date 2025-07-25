
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { grade12MathematicsQuestions } from '@/data/grade12Mathematics';
import { grade12PhysicsQuestions } from '@/data/grade12PhysicsQuestions';
import { grade12ChemistryQuestions } from '@/data/grade12ChemistryQuestions';
import { grade12BiologyQuestions } from '@/data/grade12BiologyQuestions';
import { grade12EnglishQuestions } from '@/data/grade12EnglishQuestions';
import { grade12CivicsQuestions } from '@/data/grade12CivicsQuestions';
import { grade12HistoryQuestions } from '@/data/grade12HistoryQuestions';
import { grade12ITQuestions } from '@/data/grade12ITQuestions';
import { grade12AgricultureQuestions } from '@/data/grade12AgricultureQuestions';
import { getGrade12GeographyQuestions } from '@/data/grade12GeographyQuestions';
import QuestionCard from '@/components/QuestionCard';
import Results from '@/components/Results';
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

// Helper function to get questions from different subjects
const getQuestionsForSubject = (subject: string, chapter: string, difficulty: string, count: number = 10): Question[] => {
  let allQuestions: any[] = [];
  
  switch (subject) {
    case 'Mathematics':
      allQuestions = grade12MathematicsQuestions[chapter] || [];
      break;
    case 'Physics':
      allQuestions = grade12PhysicsQuestions[chapter] || [];
      break;
    case 'Chemistry':
      allQuestions = grade12ChemistryQuestions[chapter] || [];
      break;
    case 'Biology':
      allQuestions = grade12BiologyQuestions[chapter] || [];
      break;
    case 'English':
      allQuestions = grade12EnglishQuestions[chapter] || [];
      break;
    case 'Civics':
      allQuestions = grade12CivicsQuestions[chapter] || [];
      break;
    case 'History':
      allQuestions = grade12HistoryQuestions[chapter] || [];
      break;
    case 'IT':
      allQuestions = grade12ITQuestions[chapter] || [];
      break;
    case 'Agriculture':
      allQuestions = grade12AgricultureQuestions[chapter] || [];
      break;
    case 'Geography':
      return getGrade12GeographyQuestions(chapter, difficulty.toLowerCase() as 'easy' | 'medium' | 'hard', count);
    default:
      return [];
  }

  // Filter by difficulty if the questions have difficulty property
  const filteredQuestions = allQuestions.filter(q => {
    if (q.difficulty) {
      return q.difficulty.toLowerCase() === difficulty.toLowerCase();
    }
    return true; // If no difficulty property, include all questions
  });

  // Convert to standard Question format and shuffle
  const convertedQuestions = filteredQuestions.map(q => ({
    id: q.id,
    question: q.question,
    options: q.options,
    correct: q.correct,
    explanation: q.explanation
  }));

  const shuffled = convertedQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const QuizPage = () => {
  const [searchParams] = useSearchParams();
  const subject = searchParams.get('subject');
  const chapter = searchParams.get('chapter');
  const difficulty = searchParams.get('difficulty');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initializeQuestions = () => {
    if (subject && chapter && difficulty) {
      const fetchedQuestions = getQuestionsForSubject(subject, chapter, difficulty, 10);
      
      if (fetchedQuestions.length > 0) {
        setQuestions(fetchedQuestions);
        setCurrentQuestionIndex(0);
        setSelectedAnswers({});
        setShowResults(false);
        setStartTime(Date.now());
        setElapsedTime(0);
        setIsLoading(false);
      } else {
        console.log('No questions found for:', { subject, chapter, difficulty });
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    initializeQuestions();
  }, [subject, chapter, difficulty]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!showResults && !isLoading) {
      intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [showResults, startTime, isLoading]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: answer });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = (): number => {
    let correctAnswersCount = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correctAnswersCount++;
      }
    });
    return correctAnswersCount;
  };

  const formatTime = (ms: number): string => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);
  
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMilliseconds = String(milliseconds).padStart(2, '0');
  
    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
  };

  const handleRetakeQuiz = () => {
    initializeQuestions();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-white">
        {subject} - {chapter} ({difficulty})
      </h2>
      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[400px]" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
        </div>
      ) : showResults ? (
        <Results 
          score={calculateScore()} 
          totalQuestions={questions.length} 
          timeTaken={formatTime(elapsedTime)}
          onRetakeQuiz={handleRetakeQuiz}
          questions={questions}
          selectedAnswers={selectedAnswers}
        />
      ) : (
        <>
          <p className="text-gray-500 mb-2">
            Time Elapsed: <span className="font-bold">{formatTime(elapsedTime)}</span>
          </p>
          {questions.length > 0 && (
            <QuestionCard
              question={questions[currentQuestionIndex]}
              selectedAnswer={selectedAnswers[currentQuestionIndex]}
              onAnswerSelect={handleAnswerSelect}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
            />
          )}
          <Button onClick={handleNextQuestion} disabled={!selectedAnswers[currentQuestionIndex]}>
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next Question'}
          </Button>
        </>
      )}
    </div>
  );
};

export default QuizPage;
