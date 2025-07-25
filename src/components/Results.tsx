
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Clock, RotateCcw, ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

interface ResultsProps {
  score: number;
  totalQuestions: number;
  timeTaken: string;
  onRetakeQuiz: () => void;
  questions: Question[];
  selectedAnswers: { [key: number]: string };
}

const Results = ({ 
  score, 
  totalQuestions, 
  timeTaken, 
  onRetakeQuiz, 
  questions, 
  selectedAnswers 
}: ResultsProps) => {
  const navigate = useNavigate();
  const params = useParams();
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-500';
    if (percentage >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreBadgeColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getPerformanceMessage = (percentage: number) => {
    if (percentage >= 90) return 'Excellent! Outstanding performance!';
    if (percentage >= 80) return 'Great job! Very good understanding!';
    if (percentage >= 70) return 'Good work! You\'re on the right track!';
    if (percentage >= 60) return 'Fair performance. Keep practicing!';
    if (percentage >= 50) return 'You\'re improving. More study needed!';
    return 'Keep studying and try again!';
  };

  const handleBackToChapters = () => {
    if (params.grade && params.subject) {
      navigate(`/grade/${params.grade}/subject/${params.subject}/chapters`);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/5 border-white/20 text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold mb-4 text-white">Quiz Complete!</CardTitle>
          <div className="space-y-4">
            <div className={`text-6xl font-bold ${getScoreColor(percentage)}`}>
              {percentage}%
            </div>
            <Badge 
              className={`${getScoreBadgeColor(percentage)} text-white text-lg px-4 py-2`}
            >
              {score} out of {totalQuestions} correct
            </Badge>
            <p className="text-lg text-gray-300">
              {getPerformanceMessage(percentage)}
            </p>
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <Clock className="h-5 w-5" />
            <span>Time taken: {timeTaken}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onRetakeQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Retake Quiz
            </Button>
            <Button 
              variant="outline"
              onClick={handleBackToChapters}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Chapters
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white mb-4">Question Review</h3>
        {questions.map((question, index) => {
          const userAnswer = selectedAnswers[index];
          const isCorrect = userAnswer === question.correct;
          
          return (
            <Card key={question.id} className="bg-white/5 border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-gray-600 text-white">
                    Question {index + 1}
                  </Badge>
                  {isCorrect ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-500" />
                  )}
                </div>
                <CardTitle className="text-lg font-medium text-white">
                  {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {question.options && question.options.map((option, optionIndex) => {
                  let buttonClass = "w-full justify-start text-left h-auto p-3 ";
                  
                  if (option === question.correct) {
                    buttonClass += "bg-green-600 border-green-500 text-white";
                  } else if (option === userAnswer && !isCorrect) {
                    buttonClass += "bg-red-600 border-red-500 text-white";
                  } else {
                    buttonClass += "bg-white/5 border-white/20 text-gray-300";
                  }

                  return (
                    <Button
                      key={optionIndex}
                      variant="outline"
                      className={buttonClass}
                      disabled
                    >
                      <span className="mr-3 font-semibold">
                        {String.fromCharCode(65 + optionIndex)}.
                      </span>
                      {option}
                    </Button>
                  );
                })}
                
                {question.explanation && (
                  <div className="mt-4 p-4 bg-blue-900/30 border border-blue-500/30 rounded-lg">
                    <h4 className="font-semibold text-blue-300 mb-2">Explanation:</h4>
                    <p className="text-gray-300">{question.explanation}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
