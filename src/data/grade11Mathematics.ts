
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

export const grade11Mathematics: { [chapter: string]: Grade11MathQuestion[] } = {
  'Chapter 1: Relations and Functions': [
    {
      id: 'g11math_rel_e1',
      question: 'What is a relation?',
      options: ['A set of ordered pairs', 'A single number', 'A mathematical operation', 'A graph'],
      correct: 'A set of ordered pairs',
      explanation: 'A relation is a set of ordered pairs that shows a relationship between elements of two sets.',
      difficulty: 'Easy',
      chapter: 'Chapter 1: Relations and Functions',
      subject: 'Mathematics'
    },
    {
      id: 'g11math_rel_m1',
      question: 'When is a relation called a function?',
      options: ['When each input has exactly one output', 'When it has many inputs', 'When it is linear', 'When it passes through origin'],
      correct: 'When each input has exactly one output',
      explanation: 'A relation is a function if each element in the domain corresponds to exactly one element in the range.',
      difficulty: 'Medium',
      chapter: 'Chapter 1: Relations and Functions',
      subject: 'Mathematics'
    },
    {
      id: 'g11math_rel_h1',
      question: 'What is the domain of f(x) = 1/(x-2)?',
      options: ['All real numbers except x = 2', 'All real numbers', 'x > 2', 'x < 2'],
      correct: 'All real numbers except x = 2',
      explanation: 'The function is undefined when the denominator equals zero, so x ≠ 2.',
      difficulty: 'Hard',
      chapter: 'Chapter 1: Relations and Functions',
      subject: 'Mathematics'
    }
  ],
  'Chapter 2: Quadratic Functions': [
    {
      id: 'g11math_quad_e1',
      question: 'What is the general form of a quadratic function?',
      options: ['f(x) = ax² + bx + c', 'f(x) = ax + b', 'f(x) = ax³ + bx² + cx + d', 'f(x) = a/x'],
      correct: 'f(x) = ax² + bx + c',
      explanation: 'A quadratic function has the form f(x) = ax² + bx + c where a ≠ 0.',
      difficulty: 'Easy',
      chapter: 'Chapter 2: Quadratic Functions',
      subject: 'Mathematics'
    },
    {
      id: 'g11math_quad_m1',
      question: 'What is the vertex of the parabola y = x² - 4x + 3?',
      options: ['(2, -1)', '(0, 3)', '(4, 3)', '(-2, 15)'],
      correct: '(2, -1)',
      explanation: 'Using the vertex formula x = -b/2a, we get x = 4/2 = 2. Substituting: y = 4 - 8 + 3 = -1.',
      difficulty: 'Medium',
      chapter: 'Chapter 2: Quadratic Functions',
      subject: 'Mathematics'
    },
    {
      id: 'g11math_quad_h1',
      question: 'Find the discriminant of 2x² - 5x + 3 = 0',
      options: ['1', '25', '-49', '49'],
      correct: '1',
      explanation: 'Discriminant = b² - 4ac = (-5)² - 4(2)(3) = 25 - 24 = 1.',
      difficulty: 'Hard',
      chapter: 'Chapter 2: Quadratic Functions',
      subject: 'Mathematics'
    }
  ]
};

export const getGrade11MathQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): Grade11MathQuestion[] => {
  const chapterQuestions = grade11Mathematics[chapter] || [];
  const difficultyMap = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  const targetDifficulty = difficultyMap[difficulty];
  
  const filteredQuestions = chapterQuestions.filter(q => q.difficulty === targetDifficulty);
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
