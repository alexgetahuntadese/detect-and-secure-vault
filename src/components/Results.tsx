
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Clock, RotateCcw } from 'lucide-react';

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

  return (
    <div className="space-y-6">
      <Card className="bg-white/5 border-white/20 text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold mb-4">Quiz Results</CardTitle>
          <div className="space-y-4">
            <div className={`text-6xl font-bold ${getScoreColor(percentage)}`}>
              {percentage}%
            </div>
            <Badge 
              className={`${getScoreBadgeColor(percentage)} text-white text-lg px-4 py-2`}
            >
              {score} out of {totalQuestions} correct
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <Clock className="h-5 w-5" />
            <span>Time taken: {timeTaken}</span>
          </div>
          <Button 
            onClick={onRetakeQuiz}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Retake Quiz
          </Button>
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
                <CardTitle className="text-lg font-medium">
                  {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {question.options.map((option, optionIndex) => {
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
                
                <div className="mt-4 p-4 bg-blue-900/30 border border-blue-500/30 rounded-lg">
                  <h4 className="font-semibold text-blue-300 mb-2">Explanation:</h4>
                  <p className="text-gray-300">{question.explanation}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
