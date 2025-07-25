
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { grade12Mathematics } from '@/data/grade12Mathematics';
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
  
  console.log('Getting questions for:', { subject, chapter, difficulty });
  
  switch (subject) {
    case 'Mathematics':
      const mathData = grade12Mathematics[chapter];
      allQuestions = Array.isArray(mathData) ? mathData : [];
      break;
    case 'Physics':
      const physicsData = grade12PhysicsQuestions[chapter];
      allQuestions = Array.isArray(physicsData) ? physicsData : [];
      break;
    case 'Chemistry':
      const chemData = grade12ChemistryQuestions[chapter];
      allQuestions = Array.isArray(chemData) ? chemData : [];
      break;
    case 'Biology':
      const bioData = grade12BiologyQuestions[chapter];
      allQuestions = Array.isArray(bioData) ? bioData : [];
      break;
    case 'English':
      const engData = grade12EnglishQuestions[chapter];
      allQuestions = Array.isArray(engData) ? engData : [];
      break;
    case 'Civics':
      const civicsData = grade12CivicsQuestions[chapter];
      allQuestions = Array.isArray(civicsData) ? civicsData : [];
      break;
    case 'History':
      const histData = grade12HistoryQuestions[chapter];
      allQuestions = Array.isArray(histData) ? histData : [];
      break;
    case 'IT':
      const itData = grade12ITQuestions[chapter];
      allQuestions = Array.isArray(itData) ? itData : [];
      break;
    case 'Agriculture':
      const agriData = grade12AgricultureQuestions[chapter];
      allQuestions = Array.isArray(agriData) ? agriData : [];
      break;
    case 'Geography':
      return getGrade12GeographyQuestions(chapter, difficulty.toLowerCase() as 'easy' | 'medium' | 'hard', count);
    default:
      console.warn('Unknown subject:', subject);
      return [];
  }

  console.log('Raw questions found:', allQuestions.length);

  // Filter by difficulty if the questions have difficulty property
  const filteredQuestions = allQuestions.filter(q => {
    if (q.difficulty) {
      return q.difficulty.toLowerCase() === difficulty.toLowerCase();
    }
    return true; // If no difficulty property, include all questions
  });

  console.log('Filtered questions by difficulty:', filteredQuestions.length);

  // Convert to standard Question format and shuffle
  const convertedQuestions = filteredQuestions.map((q, index) => ({
    id: q.id || `question-${index}-${Math.random().toString(36).substr(2, 9)}`,
    question: q.question || 'Question not available',
    options: Array.isArray(q.options) ? q.options : [],
    correct: q.correct || '',
    explanation: q.explanation || "No explanation provided."
  }));

  // Filter out questions with invalid data
  const validQuestions = convertedQuestions.filter(q => 
    q.question !== 'Question not available' && 
    q.options.length > 0 && 
    q.correct
  );

  const shuffled = validQuestions.sort(() => Math.random() - 0.5);
  const finalQuestions = shuffled.slice(0, count);
  
  console.log('Final questions to return:', finalQuestions.length);
  console.log('Sample question:', finalQuestions[0]);
  return finalQuestions;
};

const QuizPage = () => {
  const params = useParams();
  const subject = params.subject;
  const chapterId = params.chapterId ? decodeURIComponent(params.chapterId) : null;
  const difficulty = params.difficulty;
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initializeQuestions = () => {
    console.log('Initializing questions with params:', { subject, chapterId, difficulty });
    
    if (subject && chapterId && difficulty) {
      const fetchedQuestions = getQuestionsForSubject(subject, chapterId, difficulty, 10);
      
      if (fetchedQuestions.length > 0) {
        console.log('Questions loaded successfully:', fetchedQuestions.length);
        setQuestions(fetchedQuestions);
        setCurrentQuestionIndex(0);
        setSelectedAnswers({});
        setShowResults(false);
        setStartTime(Date.now());
        setElapsedTime(0);
      } else {
        console.error('No questions found for:', { subject, chapter: chapterId, difficulty });
        setQuestions([]);
      }
    } else {
      console.error('Missing required parameters:', { subject, chapterId, difficulty });
      setQuestions([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    initializeQuestions();
  }, [subject, chapterId, difficulty]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!showResults && !isLoading && startTime > 0 && questions.length > 0) {
      intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [showResults, startTime, isLoading, questions.length]);

  const handleAnswerSelect = (answer: string) => {
    console.log('Answer selected:', answer, 'for question index:', currentQuestionIndex);
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: answer });
  };

  const handleNextQuestion = () => {
    console.log('Next question clicked, current index:', currentQuestionIndex, 'total:', questions.length);
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

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Loading Quiz...
        </h2>
        <div className="space-y-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[400px]" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
        </div>
      </div>
    );
  }

  if (!subject || !chapterId || !difficulty) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Invalid Quiz Parameters
        </h2>
        <p className="text-white">Missing required parameters. Please navigate from the subjects page.</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          {subject} - {chapterId} ({difficulty})
        </h2>
        <p className="text-white">No questions available for this chapter and difficulty level.</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Quiz Error
        </h2>
        <p className="text-white">Unable to load the current question. Please try refreshing the page.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-white">
        {subject} - {chapterId} ({difficulty})
      </h2>
      {showResults ? (
        <Results 
          score={calculateScore()} 
          totalQuestions={questions.length} 
          timeTaken={formatTime(elapsedTime)}
          onRetakeQuiz={handleRetakeQuiz}
          questions={questions}
          selectedAnswers={selectedAnswers}
        />
      ) : (
        <div className="space-y-6">
          <p className="text-gray-300 mb-2">
            Time Elapsed: <span className="font-bold text-white">{formatTime(elapsedTime)}</span>
          </p>
          
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={selectedAnswers[currentQuestionIndex]}
            onAnswerSelect={handleAnswerSelect}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <Button 
              onClick={handleNextQuestion} 
              disabled={!selectedAnswers[currentQuestionIndex]}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next Question'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
