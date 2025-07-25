
export interface Grade11MathQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  chapter: string;
  subject: string;
}

// Empty mathematics data - ready for questions to be added
export const grade11Mathematics: { [chapter: string]: Grade11MathQuestion[] } = {};

export const getGrade11MathQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): Grade11MathQuestion[] => {
  const chapterQuestions = grade11Mathematics[chapter] || [];
  const difficultyMap = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  const targetDifficulty = difficultyMap[difficulty];
  
  const filteredQuestions = chapterQuestions.filter(q => q.difficulty === targetDifficulty);
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
