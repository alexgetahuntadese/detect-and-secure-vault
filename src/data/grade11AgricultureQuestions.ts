
export interface AgricultureQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade11AgricultureQuestions: { [chapter: string]: AgricultureQuestion[] } = {
  'Chapter 1: Introduction to Crop Production': [
    {
      id: 'agr11_intro_e1',
      question: 'What is crop production?',
      options: ['The cultivation of plants for food and other uses', 'Animal breeding', 'Soil testing', 'Water management'],
      correct: 'The cultivation of plants for food and other uses',
      explanation: 'Crop production is the practice of growing plants for food, fiber, fuel, and other agricultural products.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_m1',
      question: 'Which factors are essential for successful crop production?',
      options: ['Climate, soil, water, and seeds', 'Only water and soil', 'Only climate', 'Only good seeds'],
      correct: 'Climate, soil, water, and seeds',
      explanation: 'Successful crop production requires optimal climate conditions, fertile soil, adequate water supply, and quality seeds.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_h1',
      question: 'What is the difference between subsistence and commercial farming?',
      options: ['Subsistence is for family consumption, commercial is for market sale', 'No difference', 'Commercial uses more water', 'Subsistence uses modern technology'],
      correct: 'Subsistence is for family consumption, commercial is for market sale',
      explanation: 'Subsistence farming is primarily for family consumption while commercial farming focuses on producing crops for market sale and profit.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 2: Field Crops Production and Management': [
    {
      id: 'agr11_field_e1',
      question: 'What are field crops?',
      options: ['Crops grown in large fields like cereals and legumes', 'Garden vegetables', 'Fruit trees', 'Flowers'],
      correct: 'Crops grown in large fields like cereals and legumes',
      explanation: 'Field crops are plants grown extensively in large fields, including cereals like wheat, maize, and legumes like beans.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_m1',
      question: 'What is crop rotation?',
      options: ['Growing different crops in sequence on the same land', 'Turning crops upside down', 'Moving crops to different locations', 'Harvesting at different times'],
      correct: 'Growing different crops in sequence on the same land',
      explanation: 'Crop rotation involves growing different types of crops in a planned sequence on the same land to maintain soil fertility and reduce pest problems.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_h1',
      question: 'Why is nitrogen fixation important in legume crops?',
      options: ['It enriches soil with nitrogen naturally', 'It makes crops grow faster', 'It prevents diseases', 'It increases water retention'],
      correct: 'It enriches soil with nitrogen naturally',
      explanation: 'Legumes have symbiotic bacteria in their root nodules that fix atmospheric nitrogen, enriching the soil naturally and reducing the need for nitrogen fertilizers.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 3: Industrial Crops Production and Management': [
    {
      id: 'agr11_industrial_e1',
      question: 'What are industrial crops?',
      options: ['Crops grown for industrial purposes like cotton and sugarcane', 'Crops grown in factories', 'Crops for home use', 'Wild plants'],
      correct: 'Crops grown for industrial purposes like cotton and sugarcane',
      explanation: 'Industrial crops are grown primarily for industrial processing rather than direct consumption, including cotton, sugarcane, and oil seeds.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_m1',
      question: 'Which of these is an example of an industrial crop in Ethiopia?',
      options: ['Cotton', 'Tomato', 'Lettuce', 'Apple'],
      correct: 'Cotton',
      explanation: 'Cotton is a major industrial crop in Ethiopia, grown for textile production and export.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_h1',
      question: 'What are the main challenges in industrial crop production?',
      options: ['Market fluctuations, processing requirements, and quality standards', 'Only weather problems', 'Only soil issues', 'Only pest problems'],
      correct: 'Market fluctuations, processing requirements, and quality standards',
      explanation: 'Industrial crops face complex challenges including volatile market prices, specific processing requirements, and strict quality standards for industrial use.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 4: Introduction to Farm Animals': [
    {
      id: 'agr11_animals_e1',
      question: 'What are farm animals?',
      options: ['Domesticated animals raised for agricultural purposes', 'Wild animals', 'Pet animals only', 'Zoo animals'],
      correct: 'Domesticated animals raised for agricultural purposes',
      explanation: 'Farm animals are domesticated animals raised specifically for agricultural production including meat, milk, eggs, and other products.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_m1',
      question: 'Which animals are commonly raised in Ethiopian agriculture?',
      options: ['Cattle, sheep, goats, and chickens', 'Only cattle', 'Only chickens', 'Tigers and lions'],
      correct: 'Cattle, sheep, goats, and chickens',
      explanation: 'Ethiopia has diverse livestock including cattle, sheep, goats, chickens, and other animals that contribute significantly to agriculture.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_h1',
      question: 'What is the importance of livestock in mixed farming systems?',
      options: ['Provides manure, income diversification, and soil fertility', 'Only for meat production', 'Only for transportation', 'Only for companionship'],
      correct: 'Provides manure, income diversification, and soil fertility',
      explanation: 'In mixed farming systems, livestock provides multiple benefits including organic manure for crops, income diversification, and improved soil fertility through integrated management.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 5: Animal Feeds and Feeding Practices': [
    {
      id: 'agr11_feeds_e1',
      question: 'What is animal feed?',
      options: ['Food given to animals for nutrition', 'Water for animals', 'Medicine for animals', 'Shelter for animals'],
      correct: 'Food given to animals for nutrition',
      explanation: 'Animal feed is any nutritious substance provided to animals to meet their dietary requirements for growth, maintenance, and production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_m1',
      question: 'What are the main types of animal feeds?',
      options: ['Roughages, concentrates, and supplements', 'Only grass', 'Only grain', 'Only water'],
      correct: 'Roughages, concentrates, and supplements',
      explanation: 'Animal feeds are classified into roughages (high fiber feeds like hay), concentrates (high energy feeds like grains), and supplements (vitamins and minerals).',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_h1',
      question: 'How does balanced nutrition affect animal productivity?',
      options: ['Improves growth, reproduction, and disease resistance', 'Only affects growth', 'Has no effect', 'Only affects appetite'],
      correct: 'Improves growth, reproduction, and disease resistance',
      explanation: 'Balanced nutrition is crucial for optimal animal performance, affecting growth rates, reproductive efficiency, milk production, and immune system function.',
      difficulty: 'Hard'
    }
  ]
};

export const getGrade11AgricultureQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): AgricultureQuestion[] => {
  const chapterQuestions = grade11AgricultureQuestions[chapter] || [];
  const difficultyMap = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  const targetDifficulty = difficultyMap[difficulty];
  
  const filteredQuestions = chapterQuestions.filter(q => q.difficulty === targetDifficulty);
  
  // Shuffle and return requested count
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
