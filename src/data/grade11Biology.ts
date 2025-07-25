
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
  'Unit 1: Biology and Technology': [
    {
      id: 'g11bio_biotech_e1',
      question: 'What is the basic unit of life?',
      options: ['Cell', 'Tissue', 'Organ', 'System'],
      correct: 'Cell',
      explanation: 'The cell is the basic structural and functional unit of all known living organisms.',
      difficulty: 'Easy',
      chapter: 'Unit 1: Biology and Technology',
      subject: 'Biology'
    },
    {
      id: 'g11bio_biotech_m1',
      question: 'What is biotechnology?',
      options: ['Use of living organisms in technology', 'Study of cells', 'Chemical processes', 'Physical processes'],
      correct: 'Use of living organisms in technology',
      explanation: 'Biotechnology involves using living organisms, cells, or biological processes to develop products and technologies.',
      difficulty: 'Medium',
      chapter: 'Unit 1: Biology and Technology',
      subject: 'Biology'
    },
    {
      id: 'g11bio_biotech_h1',
      question: 'Which of the following is an example of genetic engineering?',
      options: ['Insulin production in bacteria', 'Plant photosynthesis', 'Animal respiration', 'Cell division'],
      correct: 'Insulin production in bacteria',
      explanation: 'Genetic engineering involves modifying organisms to produce desired products, like using bacteria to produce human insulin.',
      difficulty: 'Hard',
      chapter: 'Unit 1: Biology and Technology',
      subject: 'Biology'
    }
  ],
  'Unit 2: Characteristics of animals': [
    {
      id: 'g11bio_animals_e1',
      question: 'What is the main characteristic that distinguishes animals from plants?',
      options: ['Movement and heterotrophy', 'Cell wall presence', 'Photosynthesis', 'Root system'],
      correct: 'Movement and heterotrophy',
      explanation: 'Animals are characterized by their ability to move and obtain food from other organisms (heterotrophy).',
      difficulty: 'Easy',
      chapter: 'Unit 2: Characteristics of animals',
      subject: 'Biology'
    },
    {
      id: 'g11bio_animals_m1',
      question: 'Which phylum includes animals with radial symmetry?',
      options: ['Cnidaria', 'Arthropoda', 'Chordata', 'Mollusca'],
      correct: 'Cnidaria',
      explanation: 'Cnidarians like jellyfish and sea anemones exhibit radial symmetry around a central axis.',
      difficulty: 'Medium',
      chapter: 'Unit 2: Characteristics of animals',
      subject: 'Biology'
    },
    {
      id: 'g11bio_animals_h1',
      question: 'What type of body cavity do arthropods have?',
      options: ['Hemocoel', 'Coelom', 'Pseudocoelom', 'No body cavity'],
      correct: 'Hemocoel',
      explanation: 'Arthropods have a hemocoel, an open body cavity where organs are bathed in hemolymph.',
      difficulty: 'Hard',
      chapter: 'Unit 2: Characteristics of animals',
      subject: 'Biology'
    }
  ],
  'Unit 3: Enzymes': [
    {
      id: 'g11bio_enzymes_e1',
      question: 'What are enzymes?',
      options: ['Biological catalysts', 'Energy sources', 'Structural proteins', 'Genetic material'],
      correct: 'Biological catalysts',
      explanation: 'Enzymes are proteins that act as biological catalysts, speeding up chemical reactions in living organisms.',
      difficulty: 'Easy',
      chapter: 'Unit 3: Enzymes',
      subject: 'Biology'
    },
    {
      id: 'g11bio_enzymes_m1',
      question: 'What happens to enzyme activity at very high temperatures?',
      options: ['Enzyme denatures', 'Activity increases indefinitely', 'No change occurs', 'Enzyme multiplies'],
      correct: 'Enzyme denatures',
      explanation: 'At very high temperatures, enzymes lose their shape (denature) and become inactive.',
      difficulty: 'Medium',
      chapter: 'Unit 3: Enzymes',
      subject: 'Biology'
    },
    {
      id: 'g11bio_enzymes_h1',
      question: 'What is the induced fit model of enzyme action?',
      options: ['Enzyme changes shape to fit substrate', 'Substrate changes to fit enzyme', 'Both remain rigid', 'Random collision theory'],
      correct: 'Enzyme changes shape to fit substrate',
      explanation: 'The induced fit model suggests that enzymes change their shape slightly to better accommodate the substrate.',
      difficulty: 'Hard',
      chapter: 'Unit 3: Enzymes',
      subject: 'Biology'
    }
  ],
  'Unit 4: Genetics': [
    {
      id: 'g11bio_genetics_e1',
      question: 'What is a gene?',
      options: ['A unit of heredity', 'A type of protein', 'A cell organelle', 'A type of carbohydrate'],
      correct: 'A unit of heredity',
      explanation: 'A gene is a unit of heredity that determines characteristics passed from parents to offspring.',
      difficulty: 'Easy',
      chapter: 'Unit 4: Genetics',
      subject: 'Biology'
    },
    {
      id: 'g11bio_genetics_m1',
      question: 'What is the relationship between genes, chromosomes, and DNA?',
      options: ['Genes are segments of DNA located on chromosomes', 'They are all the same thing', 'Chromosomes contain genes but not DNA', 'DNA is separate from genes and chromosomes'],
      correct: 'Genes are segments of DNA located on chromosomes',
      explanation: 'Genes are specific sequences of DNA that are organized into structures called chromosomes.',
      difficulty: 'Medium',
      chapter: 'Unit 4: Genetics',
      subject: 'Biology'
    },
    {
      id: 'g11bio_genetics_h1',
      question: 'In a dihybrid cross between AaBb × AaBb, what is the expected phenotypic ratio?',
      options: ['9:3:3:1', '3:1', '1:1', '1:2:1'],
      correct: '9:3:3:1',
      explanation: 'In a dihybrid cross, the phenotypic ratio is 9:3:3:1 when both traits show complete dominance.',
      difficulty: 'Hard',
      chapter: 'Unit 4: Genetics',
      subject: 'Biology'
    }
  ],
  'Unit 5: The human body systems': [
    {
      id: 'g11bio_human_e1',
      question: 'Which system is responsible for transporting oxygen in the body?',
      options: ['Circulatory system', 'Nervous system', 'Digestive system', 'Excretory system'],
      correct: 'Circulatory system',
      explanation: 'The circulatory system, including the heart and blood vessels, transports oxygen throughout the body.',
      difficulty: 'Easy',
      chapter: 'Unit 5: The human body systems',
      subject: 'Biology'
    },
    {
      id: 'g11bio_human_m1',
      question: 'What is the main function of the nephron?',
      options: ['Filter blood and form urine', 'Pump blood', 'Digest food', 'Transmit nerve signals'],
      correct: 'Filter blood and form urine',
      explanation: 'The nephron is the functional unit of the kidney that filters blood and produces urine.',
      difficulty: 'Medium',
      chapter: 'Unit 5: The human body systems',
      subject: 'Biology'
    },
    {
      id: 'g11bio_human_h1',
      question: 'Which hormone regulates blood glucose levels?',
      options: ['Insulin', 'Thyroxine', 'Adrenaline', 'Growth hormone'],
      correct: 'Insulin',
      explanation: 'Insulin, produced by the pancreas, regulates blood glucose levels by promoting glucose uptake by cells.',
      difficulty: 'Hard',
      chapter: 'Unit 5: The human body systems',
      subject: 'Biology'
    }
  ],
  'Unit 6: Population and natural resources': [
    {
      id: 'g11bio_population_e1',
      question: 'What is population ecology?',
      options: ['Study of population dynamics', 'Study of individual organisms', 'Study of cell structure', 'Study of genetic variation'],
      correct: 'Study of population dynamics',
      explanation: 'Population ecology studies how populations of organisms change in size and composition over time.',
      difficulty: 'Easy',
      chapter: 'Unit 6: Population and natural resources',
      subject: 'Biology'
    },
    {
      id: 'g11bio_population_m1',
      question: 'What is carrying capacity?',
      options: ['Maximum population an environment can support', 'Minimum population needed for survival', 'Rate of population growth', 'Number of births per year'],
      correct: 'Maximum population an environment can support',
      explanation: 'Carrying capacity is the maximum number of individuals an environment can sustain indefinitely.',
      difficulty: 'Medium',
      chapter: 'Unit 6: Population and natural resources',
      subject: 'Biology'
    },
    {
      id: 'g11bio_population_h1',
      question: 'Which type of population growth shows a J-shaped curve?',
      options: ['Exponential growth', 'Logistic growth', 'Zero growth', 'Negative growth'],
      correct: 'Exponential growth',
      explanation: 'Exponential growth produces a J-shaped curve when resources are unlimited and there are no limiting factors.',
      difficulty: 'Hard',
      chapter: 'Unit 6: Population and natural resources',
      subject: 'Biology'
    }
  ]
};

// Export chapter names for easy access
export const grade11BiologyChapters = Object.keys(grade11Biology);

export const getGrade11BiologyQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): Grade11BiologyQuestion[] => {
  const chapterQuestions = grade11Biology[chapter] || [];
  const difficultyMap = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  const targetDifficulty = difficultyMap[difficulty];
  
  const filteredQuestions = chapterQuestions.filter(q => q.difficulty === targetDifficulty);
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const getAllGrade11BiologyQuestions = (): Grade11BiologyQuestion[] => {
  return Object.values(grade11Biology).flat();
};
