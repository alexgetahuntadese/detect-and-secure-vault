import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMathematicsQuestions } from '@/data/mathematicsQuestions';
import { getPhysicsQuestions } from '@/data/physicsQuestions';
import { getChemistryQuestions } from '@/data/chemistryQuestions';
import { getBiologyQuestions } from '@/data/biologyQuestions';
import { getEnglishQuestions } from '@/data/englishQuestions';
import { getCivicsQuestions } from '@/data/civicsQuestions';
import { getHistoryQuestions } from '@/data/historyQuestions';
import { getITQuestions } from '@/data/itQuestions';
import { getAgricultureQuestions } from '@/data/agricultureQuestions';
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

  useEffect(() => {
    if (subject && chapter && difficulty) {
      let questions: Question[] = [];
      
      if (subject === 'Mathematics') {
        const mathQuestions = getMathematicsQuestions(chapter, difficulty, 10);
        questions = mathQuestions;
      } else if (subject === 'Physics') {
        const physicsQuestions = getPhysicsQuestions(chapter, difficulty, 10);
        questions = physicsQuestions;
      } else if (subject === 'Chemistry') {
        const chemistryQuestions = getChemistryQuestions(chapter, difficulty, 10);
        questions = chemistryQuestions;
      } else if (subject === 'Biology') {
        const biologyQuestions = getBiologyQuestions(chapter, difficulty, 10);
        questions = biologyQuestions;
      } else if (subject === 'English') {
        const englishQuestions = getEnglishQuestions(chapter, difficulty.toLowerCase() as 'easy' | 'medium' | 'hard', 10);
        questions = englishQuestions;
      } else if (subject === 'Civics') {
        const civicsQuestions = getCivicsQuestions(chapter, difficulty, 10);
        questions = civicsQuestions;
      } else if (subject === 'History') {
        const historyQuestions = getHistoryQuestions(chapter, difficulty, 10);
        questions = historyQuestions;
      } else if (subject === 'IT') {
        const itQuestions = getITQuestions(chapter, difficulty, 10);
        questions = itQuestions;
      } else if (subject === 'Agriculture') {
        const agricultureQuestions = getAgricultureQuestions(chapter, difficulty, 10);
        questions = agricultureQuestions;
      } else if (subject === 'Geography') {
        const geographyQuestions = getGrade12GeographyQuestions(chapter, difficulty.toLowerCase() as 'easy' | 'medium' | 'hard', 10);
        questions = geographyQuestions;
      }

      if (questions.length > 0) {
        setQuestions(questions);
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
    if (subject && chapter && difficulty) {
      let questions: Question[] = [];
      
      if (subject === 'Mathematics') {
        const mathQuestions = getMathematicsQuestions(chapter, difficulty, 10);
        questions = mathQuestions;
      } else if (subject === 'Physics') {
        const physicsQuestions = getPhysicsQuestions(chapter, difficulty, 10);
        questions = physicsQuestions;
      } else if (subject === 'Chemistry') {
        const chemistryQuestions = getChemistryQuestions(chapter, difficulty, 10);
        questions = chemistryQuestions;
      } else if (subject === 'Biology') {
        const biologyQuestions = getBiologyQuestions(chapter, difficulty, 10);
        questions = biologyQuestions;
      } else if (subject === 'English') {
        const englishQuestions = getEnglishQuestions(chapter, difficulty.toLowerCase() as 'easy' | 'medium' | 'hard', 10);
        questions = englishQuestions;
      } else if (subject === 'Civics') {
        const civicsQuestions = getCivicsQuestions(chapter, difficulty, 10);
        questions = civicsQuestions;
      } else if (subject === 'History') {
        const historyQuestions = getHistoryQuestions(chapter, difficulty, 10);
        questions = historyQuestions;
      } else if (subject === 'IT') {
        const itQuestions = getITQuestions(chapter, difficulty, 10);
        questions = itQuestions;
      } else if (subject === 'Agriculture') {
        const agricultureQuestions = getAgricultureQuestions(chapter, difficulty, 10);
        questions = agricultureQuestions;
      } else if (subject === 'Geography') {
        const geographyQuestions = getGrade12GeographyQuestions(chapter, difficulty.toLowerCase() as 'easy' | 'medium' | 'hard', 10);
        questions = geographyQuestions;
      }

      if (questions.length > 0) {
        setQuestions(questions);
        setCurrentQuestionIndex(0);
        setSelectedAnswers({});
        setShowResults(false);
        setStartTime(Date.now());
        setElapsedTime(0);
      }
    }
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
