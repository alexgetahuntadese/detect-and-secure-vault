import {
  Calculator,
  Microscope,
  Globe,
  Users,
  Atom,
  Dna,
  FlaskConical,
  Zap,
  Ruler,
  MapPin,
  Clock8,
  DollarSign,
  Briefcase,
  BookA,
  Scale,
  Activity,
  Laptop,
  Languages
} from 'lucide-react';

interface Subject {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  chapters: string[];
}

interface Subjects {
  [key: string]: Subject;
}

// Grade 12 Natural Science subjects
const grade12NaturalScienceSubjects: Subjects = {
  biology: {
    name: 'Biology',
    icon: Dna,
    chapters: [
      'Unit 1: Application of Biology',
      'Unit 2: Microorganisms',
      'Unit 3: Energy transformation',
      'Unit 4: Evolution',
      'Unit 5: Human Body System',
      'Unit 6: Climate Change'
    ]
  },
  chemistry: {
    name: 'Chemistry',
    icon: FlaskConical,
    chapters: [
      'Chapter 1: Atomic Structure and Periodic Properties',
      'Chapter 2: Chemical Bonding',
      'Chapter 3: States of Matter',
      'Chapter 4: Solutions',
      'Chapter 5: Chemical Kinetics',
      'Chapter 6: Chemical Equilibrium',
      'Chapter 7: Acids and Bases',
      'Chapter 8: Redox Reactions and Electrochemistry',
      'Chapter 9: Organic Chemistry'
    ]
  },
  physics: {
    name: 'Physics',
    icon: Zap,
    chapters: [
      'Chapter 1: Mechanics',
      'Chapter 2: Thermal Physics',
      'Chapter 3: Oscillations and Waves',
      'Chapter 4: Electricity and Magnetism',
      'Chapter 5: Electromagnetic Induction',
      'Chapter 6: Alternating Current',
      'Chapter 7: Electromagnetic Waves',
      'Chapter 8: Optics',
      'Chapter 9: Modern Physics'
    ]
  },
  technicalDrawing: {
    name: 'Technical Drawing',
    icon: Ruler,
    chapters: [
      'Chapter 1: Introduction to Technical Drawing',
      'Chapter 2: Geometric Construction',
      'Chapter 3: Orthographic Projection',
      'Chapter 4: Isometric Drawing',
      'Chapter 5: Sectional Views',
      'Chapter 6: Working Drawings',
      'Chapter 7: Computer-Aided Design (CAD)'
    ]
  },
  agriculture: {
    name: 'Agriculture',
    icon: Microscope,
    chapters: [
      'Unit 1: Crop Production',
      'Unit 2: Livestock Management',
      'Unit 3: Soil Science and Fertility',
      'Unit 4: Agricultural Economics',
      'Unit 5: Agricultural Technology',
      'Unit 6: Sustainable Agriculture'
    ]
  }
};

// Grade 12 Social Science subjects
const grade12SocialScienceSubjects: Subjects = {
  geography: {
    name: 'Geography',
    icon: MapPin,
    chapters: [
      'Chapter 1: Physical Geography of the World',
      'Chapter 2: Population and Settlement',
      'Chapter 3: Economic Geography',
      'Chapter 4: Political Geography',
      'Chapter 5: Environmental Geography',
      'Chapter 6: Regional Geography of Africa',
      'Chapter 7: Geography of Ethiopia and the Horn',
      'Chapter 8: Geographic Information Systems (GIS)'
    ]
  },
  history: {
    name: 'History',
    icon: Clock8,
    chapters: [
      'Chapter 1: The Ancient World',
      'Chapter 2: Medieval Period',
      'Chapter 3: The Modern World (1500-1800)',
      'Chapter 4: Age of Revolution and Nationalism',
      'Chapter 5: The 20th Century World',
      'Chapter 6: Contemporary World',
      'Chapter 7: African History',
      'Chapter 8: Ethiopian History'
    ]
  },
  economics: {
    name: 'Economics',
    icon: DollarSign,
    chapters: [
      'Chapter 1: Introduction to Economics',
      'Chapter 2: Demand, Supply and Market Equilibrium',
      'Chapter 3: Consumer Behavior and Demand Analysis',
      'Chapter 4: Production and Cost Analysis',
      'Chapter 5: Market Structure and Pricing',
      'Chapter 6: Factor Markets',
      'Chapter 7: National Income and Economic Growth',
      'Chapter 8: Money, Banking and Monetary Policy',
      'Chapter 9: International Trade and Finance'
    ]
  },
  generalBusiness: {
    name: 'General Business',
    icon: Briefcase,
    chapters: [
      'Chapter 1: Introduction to Business',
      'Chapter 2: Business Organization and Management',
      'Chapter 3: Marketing Management',
      'Chapter 4: Financial Management',
      'Chapter 5: Human Resource Management',
      'Chapter 6: Production and Operations Management',
      'Chapter 7: Business Ethics and Social Responsibility',
      'Chapter 8: Entrepreneurship and Small Business'
    ]
  }
};

// Grade 12 Other subjects
const grade12OtherSubjects: Subjects = {
  english: {
    name: 'English',
    icon: BookA,
    chapters: [
      'Chapter 1: Reading Comprehension and Critical Analysis',
      'Chapter 2: Grammar and Language Usage',
      'Chapter 3: Writing Skills and Composition',
      'Chapter 4: Literature and Literary Analysis',
      'Chapter 5: Speaking and Listening Skills',
      'Chapter 6: Research and Academic Writing'
    ]
  },
  civics: {
    name: 'Civics',
    icon: Scale,
    chapters: [
      'Chapter 1: Principles of Democracy',
      'Chapter 2: Constitutional Government',
      'Chapter 3: Rule of Law and Human Rights',
      'Chapter 4: Citizenship and Civic Participation',
      'Chapter 5: Political Parties and Elections',
      'Chapter 6: International Relations and Organizations'
    ]
  },
  physicalEducation: {
    name: 'Physical Education',
    icon: Activity,
    chapters: [
      'Chapter 1: Health and Wellness',
      'Chapter 2: Exercise Physiology',
      'Chapter 3: Sports and Games',
      'Chapter 4: Physical Fitness and Training',
      'Chapter 5: Sports Psychology',
      'Chapter 6: Sports Management and Organization'
    ]
  },
  mathematics: {
    name: 'Mathematics',
    icon: Calculator,
    chapters: [
      'Unit 1: Sequence and Series',
      'Unit 2: Introduction to Calculus',
      'Unit 3: Statistics',
      'Unit 4: Introduction to Linear Programming',
      'Unit 5: Mathematical Application in Business'
    ]
  },
  it: {
    name: 'IT',
    icon: Laptop,
    chapters: [
      'Chapter 1: Computer Systems and Architecture',
      'Chapter 2: Operating Systems',
      'Chapter 3: Programming Fundamentals',
      'Chapter 4: Database Management Systems',
      'Chapter 5: Computer Networks and Internet',
      'Chapter 6: Web Development',
      'Chapter 7: Computer Security',
      'Chapter 8: Emerging Technologies'
    ]
  },
  nationalLanguage: {
    name: 'National Language',
    icon: Languages,
    chapters: [
      'Chapter 1: Amharic Grammar and Syntax',
      'Chapter 2: Classical Amharic Literature',
      'Chapter 3: Modern Amharic Literature',
      'Chapter 4: Poetry and Prose Analysis',
      'Chapter 5: Creative Writing',
      'Chapter 6: Cultural and Historical Context'
    ]
  }
};

// Grade 11 Natural Science subjects
const grade11NaturalScienceSubjects = {
  biology: {
    name: 'Biology',
    icon: Dna,
    chapters: [
      'Cell Biology and Genetics',
      'Human Biology and Health',
      'Ecology and Environment',
      'Plant Biology',
      'Animal Biology',
      'Evolution and Biodiversity'
    ]
  },
  chemistry: {
    name: 'Chemistry',
    icon: FlaskConical,
    chapters: [
      'Atomic Structure and Periodicity',
      'Chemical Bonding',
      'States of Matter',
      'Chemical Reactions',
      'Organic Chemistry Basics',
      'Acids, Bases and Salts'
    ]
  },
  physics: {
    name: 'Physics',
    icon: Zap,
    chapters: [
      'Mechanics and Motion',
      'Forces and Energy',
      'Heat and Temperature',
      'Waves and Sound',
      'Light and Optics',
      'Electricity and Magnetism'
    ]
  },
  mathematics: {
    name: 'Mathematics',
    icon: Calculator,
    chapters: [
      'Advanced Algebra',
      'Functions and Graphs',
      'Trigonometry',
      'Coordinate Geometry',
      'Statistics and Probability',
      'Calculus Introduction'
    ]
  }
};

// Grade 11 Social Science subjects
const grade11SocialScienceSubjects = {
  geography: {
    name: 'Geography',
    icon: MapPin,
    chapters: [
      'Physical Geography',
      'Human Geography',
      'Climate and Weather',
      'Natural Resources',
      'Environmental Issues',
      'Regional Geography'
    ]
  },
  history: {
    name: 'History',
    icon: Clock8,
    chapters: [
      'Ancient World History',
      'Medieval History',
      'Modern World History',
      'African History',
      'Ethiopian History',
      'Contemporary Issues'
    ]
  },
  economics: {
    name: 'Economics',
    icon: DollarSign,
    chapters: [
      'Introduction to Economics',
      'Microeconomics',
      'Macroeconomics',
      'Market Systems',
      'Economic Development',
      'International Economics'
    ]
  },
  general_business: {
    name: 'General Business',
    icon: Briefcase,
    chapters: [
      'Business Fundamentals',
      'Marketing Principles',
      'Accounting Basics',
      'Management Concepts',
      'Entrepreneurship',
      'Business Ethics'
    ]
  }
};

// Grade 11 Other subjects
const grade11OtherSubjects = {
  english: {
    name: 'English',
    icon: BookA,
    chapters: [
      'Grammar and Language Use',
      'Reading Comprehension',
      'Writing Skills',
      'Literature Study',
      'Speaking and Listening',
      'Critical Analysis'
    ]
  },
  civics: {
    name: 'Civics & Ethical Education',
    icon: Scale,
    chapters: [
      'Democratic Principles',
      'Constitutional Government',
      'Human Rights',
      'Civic Responsibility',
      'Ethical Values',
      'Social Justice'
    ]
  },
  amharic: {
    name: 'Amharic',
    icon: Languages,
    chapters: [
      'Amharic Grammar',
      'Literature Analysis',
      'Poetry and Prose',
      'Creative Writing',
      'Cultural Context',
      'Language Skills'
    ]
  },
  ict: {
    name: 'Information Technology',
    icon: Laptop,
    chapters: [
      'Computer Fundamentals',
      'Software Applications',
      'Internet and Networks',
      'Programming Basics',
      'Database Concepts',
      'Digital Literacy'
    ]
  },
  physical_education: {
    name: 'Physical Education',
    icon: Activity,
    chapters: [
      'Health and Fitness',
      'Sports and Games',
      'Exercise Science',
      'Nutrition',
      'Safety and First Aid',
      'Team Sports'
    ]
  }
};

export const getSubjectsForGrade = (grade: number) => {
  switch (grade) {
    case 12:
      return grade12NaturalScienceSubjects;
    case 11:
      return grade11NaturalScienceSubjects;
    default:
      return {};
  }
};

export const getSocialScienceSubjectsForGrade = (grade: number) => {
  if (grade === 12) {
    return grade12SocialScienceSubjects;
  } else if (grade === 11) {
    return grade11SocialScienceSubjects;
  }
  return {};
};

export const getOtherSubjectsForGrade = (grade: number) => {
  if (grade === 12) {
    return grade12OtherSubjects;
  } else if (grade === 11) {
    return grade11OtherSubjects;
  }
  return {};
};

// Sample questions (can be expanded)
const sampleQuestions = {
  biology: {
    chapter1: [
      { question: 'What is the basic unit of life?', answer: 'Cell' },
      { question: 'What is the function of mitochondria?', answer: 'Energy production' }
    ]
  },
  physics: {
    chapter1: [
      { question: 'What is the unit of force?', answer: 'Newton' },
      { question: 'Define inertia.', answer: 'Resistance to change in motion' }
    ]
  }
};

export default sampleQuestions;
