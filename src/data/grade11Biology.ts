
export interface Grade11BiologyQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  chapter: string;
  subject: string;
}

export const grade11Biology: { [chapter: string]: Grade11BiologyQuestion[] } = {
  'Chapter 1: Cell Biology': [
    {
      id: 'g11bio_cell_e1',
      question: 'What is the basic unit of life?',
      options: ['Cell', 'Tissue', 'Organ', 'System'],
      correct: 'Cell',
      explanation: 'The cell is the basic structural and functional unit of all known living organisms.',
      difficulty: 'Easy',
      chapter: 'Chapter 1: Cell Biology',
      subject: 'Biology'
    },
    {
      id: 'g11bio_cell_m1',
      question: 'What is the function of mitochondria?',
      options: ['Energy production', 'Protein synthesis', 'Waste removal', 'Cell division'],
      correct: 'Energy production',
      explanation: 'Mitochondria are known as the powerhouses of the cell, producing ATP for cellular energy.',
      difficulty: 'Medium',
      chapter: 'Chapter 1: Cell Biology',
      subject: 'Biology'
    },
    {
      id: 'g11bio_cell_h1',
      question: 'Which process occurs in the cristae of mitochondria?',
      options: ['Electron transport chain', 'Glycolysis', 'Transcription', 'Translation'],
      correct: 'Electron transport chain',
      explanation: 'The cristae contain the enzymes and proteins necessary for the electron transport chain and ATP synthesis.',
      difficulty: 'Hard',
      chapter: 'Chapter 1: Cell Biology',
      subject: 'Biology'
    }
  ],
  'Chapter 2: Genetics': [
    {
      id: 'g11bio_gen_e1',
      question: 'What is a gene?',
      options: ['A unit of heredity', 'A type of protein', 'A cell organelle', 'A type of carbohydrate'],
      correct: 'A unit of heredity',
      explanation: 'A gene is a unit of heredity that determines characteristics passed from parents to offspring.',
      difficulty: 'Easy',
      chapter: 'Chapter 2: Genetics',
      subject: 'Biology'
    },
    {
      id: 'g11bio_gen_m1',
      question: 'What is the relationship between genes, chromosomes, and DNA?',
      options: ['Genes are segments of DNA located on chromosomes', 'They are all the same thing', 'Chromosomes contain genes but not DNA', 'DNA is separate from genes and chromosomes'],
      correct: 'Genes are segments of DNA located on chromosomes',
      explanation: 'Genes are specific sequences of DNA that are organized into structures called chromosomes.',
      difficulty: 'Medium',
      chapter: 'Chapter 2: Genetics',
      subject: 'Biology'
    },
    {
      id: 'g11bio_gen_h1',
      question: 'In a dihybrid cross between AaBb × AaBb, what is the expected phenotypic ratio?',
      options: ['9:3:3:1', '3:1', '1:1', '1:2:1'],
      correct: '9:3:3:1',
      explanation: 'In a dihybrid cross, the phenotypic ratio is 9:3:3:1 when both traits show complete dominance.',
      difficulty: 'Hard',
      chapter: 'Chapter 2: Genetics',
      subject: 'Biology'
    }
  ]
};

export const getGrade11BiologyQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): Grade11BiologyQuestion[] => {
  const chapterQuestions = grade11Biology[chapter] || [];
  const difficultyMap = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  const targetDifficulty = difficultyMap[difficulty];
  
  const filteredQuestions = chapterQuestions.filter(q => q.difficulty === targetDifficulty);
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
