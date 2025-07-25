
import { BrainCircuit, Atom, BookCopy, Lightbulb, Sprout, Globe2, GraduationCap, FileCode2, UsersRound, Landmark, Languages } from "lucide-react";

export interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard'; // Made optional to support existing question files
}

export const grade12Subjects = {
  physics: {
    name: 'Physics',
    icon: Atom,
    chapters: [
      'Chapter 1: Electrostatics',
      'Chapter 2: Capacitance',
      'Chapter 3: Current Electricity',
      'Chapter 4: Magnetism',
      'Chapter 5: Electromagnetic Induction',
      'Chapter 6: Wave Motion',
      'Chapter 7: Physical Optics',
      'Chapter 8: Modern Physics'
    ]
  },
  chemistry: {
    name: 'Chemistry',
    icon: BrainCircuit,
    chapters: [
      'Chapter 1: Chemical Equilibrium',
      'Chapter 2: Chemical Kinetics',
      'Chapter 3: Chemical Thermodynamics',
      'Chapter 4: Electrochemistry',
      'Chapter 5: Non-metals and their Compounds',
      'Chapter 6: Transition Metals',
      'Chapter 7: Organic Chemistry I',
      'Chapter 8: Organic Chemistry II'
    ]
  },
  biology: {
    name: 'Biology',
    icon: BookCopy,
    chapters: [
      'Chapter 1: Coordination',
      'Chapter 2: Reproduction',
      'Chapter 3: Inheritance',
      'Chapter 4: Variation',
      'Chapter 5: Evolution',
      'Chapter 6: Ecology'
    ]
  }
};

export const grade11Subjects = {
  agriculture: {
    name: 'Agriculture',
    icon: Sprout,
    chapters: [
      'Chapter 1: Introduction to Crop Production',
      'Chapter 2: Field Crops Production and Management',
      'Chapter 3: Industrial Crops Production and Management',
      'Chapter 4: Introduction to Farm Animals',
      'Chapter 5: Animal Feeds and Feeding Practices',
      'Chapter 6: Animal Genetics and Breeding Practices',
      'Chapter 7: Farm Animals Housing',
      'Chapter 8: Basic Animal Health and Disease Control',
      'Chapter 9: Dairy Cattle Production and Management',
      'Chapter 10: Introduction to Natural Resources',
      'Chapter 11: Management of Natural Resources',
      'Chapter 12: Concepts of Biodiversity',
      'Chapter 13: Climate Change adaptation and Mitigation',
      'Chapter 14: Mechanized Farming',
      'Chapter 15: Introduction to Human Nutrition',
      'Chapter 16: Diversified Food Production and Consumption'
    ]
  }
};

export const grade12SocialScienceSubjects = {
  geography: {
    name: 'Geography',
    icon: Globe2,
    chapters: [
      'Chapter 1: Population',
      'Chapter 2: Settlement',
      'Chapter 3: Primary Economic Activities',
      'Chapter 4: Secondary Economic Activities',
      'Chapter 5: Tertiary and Quaternary Economic Activities',
      'Chapter 6: Economic Development and Planning',
      'Chapter 7: Regional Integration and Globalization'
    ]
  },
  history: {
    name: 'History',
    icon: Landmark,
    chapters: [
      'Chapter 1: The World on the Eve of the 19th Century',
      'Chapter 2: Africa in the 19th Century',
      'Chapter 3: World War I',
      'Chapter 4: Inter-War Years',
      'Chapter 5: World War II',
      'Chapter 6: The Cold War Era',
      'Chapter 7: Decolonization and the Rise of the Third World',
      'Chapter 8: Globalization'
    ]
  },
  civics: {
    name: 'Civic Education',
    icon: UsersRound,
    chapters: [
      'Chapter 1: Understanding Civics and Ethics',
      'Chapter 2: The Constitution and Constitutionalism',
      'Chapter 3: Human Rights',
      'Chapter 4: Democracy',
      'Chapter 5: Rule of Law',
      'Chapter 6: Federalism',
      'Chapter 7: Elections',
      'Chapter 8: Good Governance',
      'Chapter 9: Active Citizenship'
    ]
  },
  economics: {
    name: 'Economics',
    icon: GraduationCap,
    chapters: [
      'Chapter 1: Introduction to Economics',
      'Chapter 2: Basic Concepts of Economics',
      'Chapter 3: Microeconomics',
      'Chapter 4: Macroeconomics',
      'Chapter 5: International Economics',
      'Chapter 6: Development Economics'
    ]
  }
};

export const grade12OtherSubjects = {
  it: {
    name: 'Information Technology',
    icon: FileCode2,
    chapters: [
      'Chapter 1: Fundamentals of Computer and Information Communication Technology',
      'Chapter 2: Computer Hardware',
      'Chapter 3: Computer Software',
      'Chapter 4: System Development',
      'Chapter 5: Database Management System',
      'Chapter 6: Data Communication and Networking',
      'Chapter 7: The Internet and the World Wide Web',
      'Chapter 8: Multimedia',
      'Chapter 9: Graphics Design',
      'Chapter 10: Desktop Publishing',
      'Chapter 11: Computer Ethics, Security and Safety'
    ]
  },
  english: {
    name: 'English',
    icon: Languages,
    chapters: [
      'Chapter 1: Academic Reading Skills',
      'Chapter 2: Developing Vocabulary Skills',
      'Chapter 3: Grammar in Context',
      'Chapter 4: Writing Paragraphs',
      'Chapter 5: Writing Essays',
      'Chapter 6: Speaking Skills',
      'Chapter 7: Listening Skills'
    ]
  },
  agriculture: {
    name: 'Agriculture',
    icon: Sprout,
    chapters: [
      'Chapter 1: Soil and Water Conservation',
      'Chapter 2: Irrigation Agronomy',
      'Chapter 3: Crop Production',
      'Chapter 4: Horticulture',
      'Chapter 5: Agricultural Mechanization',
      'Chapter 6: Livestock Production',
      'Chapter 7: Range Land Management',
      'Chapter 8: Forestry',
      'Chapter 9: Fishery',
      'Chapter 10: Agricultural Marketing',
      'Chapter 11: Entrepreneurship in Agriculture'
    ]
  },
  aptitude: {
    name: 'Aptitude',
    icon: Lightbulb,
    chapters: [
      'Chapter 1: Verbal Reasoning',
      'Chapter 2: Numerical Reasoning',
      'Chapter 3: Abstract Reasoning',
      'Chapter 4: Spatial Reasoning',
      'Chapter 5: Logical Reasoning'
    ]
  }
};

export const getSubjectsForGrade = (grade: number) => {
  switch (grade) {
    case 11:
      return grade11Subjects;
    case 12:
      return grade12Subjects;
    default:
      return grade12Subjects;
  }
};

export const getSocialScienceSubjectsForGrade = (grade: number) => {
  switch (grade) {
    case 12:
      return grade12SocialScienceSubjects;
    default:
      return grade12SocialScienceSubjects;
  }
};

export const getOtherSubjectsForGrade = (grade: number) => {
  switch (grade) {
    case 12:
      return grade12OtherSubjects;
    default:
      return grade12OtherSubjects;
  }
};

// Import questions from various subject files
import { getGrade11AgricultureQuestions } from './grade11AgricultureQuestions';

export const getQuestionsForQuiz = (subject: string, chapter: string, difficulty: string, count: number = 10): Question[] => {
  const difficultyLevel = difficulty.toLowerCase() as 'easy' | 'medium' | 'hard';
  
  switch (subject.toLowerCase()) {
    case 'agriculture':
      return getGrade11AgricultureQuestions(chapter, difficultyLevel, count);
    default:
      console.warn(`No questions available for subject: ${subject}`);
      return [];
  }
};
