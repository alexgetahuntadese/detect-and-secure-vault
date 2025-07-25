import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
// import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Play, CheckCircle, Clock, BookOpen, Target } from 'lucide-react';
import { grade12Mathematics } from '@/data/grade12Mathematics';
import { grade12BiologyQuestions } from '@/data/grade12BiologyQuestions';
import { grade12ChemistryQuestions } from '@/data/grade12ChemistryQuestions';
import { grade12PhysicsQuestions } from '@/data/grade12PhysicsQuestions';
import { grade12EnglishQuestions } from '@/data/grade12EnglishQuestions';
import { grade12AgricultureQuestions } from '@/data/grade12AgricultureQuestions';
import { grade12GeographyQuestions } from '@/data/grade12GeographyQuestions';
import { grade12HistoryQuestions } from '@/data/grade12HistoryQuestions';
import { grade12CivicsQuestions } from '@/data/grade12CivicsQuestions';
import { grade12ITQuestions } from '@/data/grade12ITQuestions';

const ChaptersPage = () => {
  const navigate = useNavigate();
  const { grade, subject } = useParams();
  const decodedSubject = decodeURIComponent(subject || '');

  // Get chapters based on subject and grade
  const getChaptersForSubject = () => {
    if (decodedSubject === 'Mathematics' && grade === '12') {
      return Object.keys(grade12Mathematics).map((chapterName, index) => {
        const questions = grade12Mathematics[chapterName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: chapterName,
          description: getChapterDescription(chapterName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }
    
    if (decodedSubject === 'Biology' && grade === '12') {
      return Object.keys(grade12BiologyQuestions).map((chapterName, index) => {
        const questions = grade12BiologyQuestions[chapterName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: chapterName,
          description: getBiologyChapterDescription(chapterName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }
    
    if (decodedSubject === 'Chemistry' && grade === '12') {
      return Object.keys(grade12ChemistryQuestions).map((unitName, index) => {
        const unitData = grade12ChemistryQuestions[unitName];
        const easyQuestions = unitData.easy.length;
        const mediumQuestions = unitData.medium.length;
        const hardQuestions = unitData.hard.length;
        const totalQuestions = easyQuestions + mediumQuestions + hardQuestions;
        
        return {
          id: index + 1,
          title: unitName,
          description: getChemistryUnitDescription(unitName),
          duration: getDurationEstimate(totalQuestions),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: totalQuestions,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }
    
    if (decodedSubject === 'Physics' && grade === '12') {
      return Object.keys(grade12PhysicsQuestions).map((unitName, index) => {
        const questions = grade12PhysicsQuestions[unitName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: unitName,
          description: getPhysicsUnitDescription(unitName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }
    
    if (decodedSubject === 'English' && grade === '12') {
      return Object.keys(grade12EnglishQuestions).map((unitName, index) => {
        const questions = grade12EnglishQuestions[unitName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: unitName,
          description: getEnglishUnitDescription(unitName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }
    
    if (decodedSubject === 'Agriculture' && grade === '12') {
      return Object.keys(grade12AgricultureQuestions).map((unitName, index) => {
        const questions = grade12AgricultureQuestions[unitName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: unitName,
          description: getAgricultureUnitDescription(unitName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    if (decodedSubject === 'Geography' && grade === '12') {
      return Object.keys(grade12GeographyQuestions).map((unitName, index) => {
        const questions = grade12GeographyQuestions[unitName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: unitName,
          description: getGeographyUnitDescription(unitName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    if (decodedSubject === 'History' && grade === '12') {
      return Object.keys(grade12HistoryQuestions).map((unitName, index) => {
        const questions = grade12HistoryQuestions[unitName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: unitName,
          description: getHistoryUnitDescription(unitName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    if (decodedSubject === 'Civic Education' && grade === '12') {
      return Object.keys(grade12CivicsQuestions).map((unitName, index) => {
        const questions = grade12CivicsQuestions[unitName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: unitName,
          description: getCivicsUnitDescription(unitName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    if (decodedSubject === 'Information Technology' && grade === '12') {
      return Object.keys(grade12ITQuestions).map((unitName, index) => {
        const questions = grade12ITQuestions[unitName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: unitName,
          description: getITUnitDescription(unitName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }
    
    return [
      {
        id: 1,
        title: 'Introduction to Numbers',
        description: 'Basic concepts of numbers, counting, and number systems',
        duration: '2-3 hours',
        difficulty: 'Beginner',
        progress: 100,
        isCompleted: true,
        questionsCount: 25,
        difficultyBreakdown: { easy: 10, medium: 10, hard: 5 }
      },
      {
        id: 2,
        title: 'Addition and Subtraction',
        description: 'Learn fundamental arithmetic operations',
        duration: '3-4 hours',
        difficulty: 'Beginner',
        progress: 75,
        isCompleted: false,
        questionsCount: 30,
        difficultyBreakdown: { easy: 12, medium: 12, hard: 6 }
      },
      {
        id: 3,
        title: 'Multiplication and Division',
        description: 'Master multiplication tables and division concepts',
        duration: '4-5 hours',
        difficulty: 'Intermediate',
        progress: 45,
        isCompleted: false,
        questionsCount: 35,
        difficultyBreakdown: { easy: 10, medium: 15, hard: 10 }
      },
      {
        id: 4,
        title: 'Fractions and Decimals',
        description: 'Understanding parts of a whole and decimal notation',
        duration: '3-4 hours',
        difficulty: 'Intermediate',
        progress: 0,
        isCompleted: false,
        questionsCount: 28,
        difficultyBreakdown: { easy: 8, medium: 12, hard: 8 }
      },
      {
        id: 5,
        title: 'Geometry Basics',
        description: 'Shapes, angles, and basic geometric concepts',
        duration: '2-3 hours',
        difficulty: 'Intermediate',
        progress: 0,
        isCompleted: false,
        questionsCount: 22,
        difficultyBreakdown: { easy: 8, medium: 10, hard: 4 }
      },
      {
        id: 6,
        title: 'Measurement and Units',
        description: 'Length, weight, volume, and unit conversions',
        duration: '2-3 hours',
        difficulty: 'Beginner',
        progress: 0,
        isCompleted: false,
        questionsCount: 20,
        difficultyBreakdown: { easy: 10, medium: 8, hard: 2 }
      },
    ];
  };

  const getChapterDescription = (chapterName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Sequence and Series": "Learn arithmetic and geometric sequences, series, and their applications in problem solving",
      "Unit 2: Introduction to Calculus": "Explore limits, derivatives, and basic integration concepts",
      "Unit 3: Statistics": "Master statistical measures, data analysis, and probability distributions",
      "Unit 4: Probability": "Understand probability theory, events, and statistical inference",
      "Unit 5: Mathematical Application in Business": "Apply mathematical concepts to business problems and financial calculations"
    };
    return descriptions[chapterName] || "Comprehensive study of mathematical concepts and problem-solving techniques";
  };

  const getBiologyChapterDescription = (chapterName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Application of Biology": "Explore the practical applications of biological principles in medicine, agriculture, and biotechnology",
      "Unit 2: Microorganisms": "Study bacteria, viruses, fungi, and their roles in ecosystems and human health",
      "Unit 3: Energy transformation": "Understand cellular respiration, photosynthesis, and energy flow in biological systems",
      "Unit 4: Evolution": "Learn about natural selection, genetic variation, and the mechanisms of evolutionary change",
      "Unit 5: Human Body System": "Examine the structure and function of major organ systems in the human body",
      "Unit 6: Climate Change": "Investigate the biological impacts of climate change on ecosystems and biodiversity"
    };
    return descriptions[chapterName] || "Comprehensive study of biological concepts and life processes";
  };

  const getChemistryUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: ACID-BASE EQUILIBRIUM": "Master pH calculations, buffer systems, and acid-base titrations for chemical analysis",
      "Unit 2: ELECTROCHEMISTRY": "Explore galvanic cells, electrolysis, and electrochemical processes in industry",
      "Unit 3: INDUSTRIAL CHEMISTRY": "Study large-scale chemical processes including Haber process and Contact process",
      "Unit 4: POLYMERS": "Learn about polymer synthesis, properties, and applications in modern materials",
      "Unit 5: INTRODUCTION TO ENVIRONMENTAL CHEMISTRY": "Investigate chemical pollutants, water treatment, and environmental protection"
    };
    return descriptions[unitName] || "Comprehensive study of chemical principles and their real-world applications";
  };

  const getPhysicsUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Application of physics in other fields": "Explore how physics principles are applied in medicine, agriculture, and technology",
      "Unit 2: Two-dimensional motion": "Master projectile motion, circular motion, and vector analysis in two dimensions",
      "Unit 3: Fluid Mechanics": "Study pressure, buoyancy, Bernoulli's principle, and fluid dynamics",
      "Unit 4: Electromagnetism": "Learn electric and magnetic fields, electromagnetic induction, and Maxwell's equations",
      "Unit 5: Basics of electronics": "Understand semiconductors, diodes, transistors, and digital electronics fundamentals"
    };
    return descriptions[unitName] || "Comprehensive study of physics principles and their practical applications";
  };

  const getEnglishUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Sustainable Development": "Explore sustainable development concepts, environmental protection, and global challenges",
      "Unit 2: Time Management": "Master effective time management strategies, productivity techniques, and goal setting",
      "Unit 3: Evidence on Traffic Accident": "Analyze traffic safety data, accident reports, and evidence-based solutions",
      "Unit 4: Natural Resource Management": "Study conservation strategies, resource sustainability, and environmental stewardship",
      "Unit 5: Mechanized Agriculture": "Learn about modern farming techniques, agricultural technology, and food security",
      "Unit 6: Green Economies": "Understand sustainable economic models, environmental economics, and green innovations",
      "Unit 7: National Pride": "Explore cultural identity, patriotism, heritage preservation, and national values",
      "Unit 8: Telemedicine": "Discover digital healthcare, medical technology, and remote patient care systems",
      "Unit 9: Conflict Management": "Develop conflict resolution skills, peace-building strategies, and negotiation techniques",
      "Unit 10: Robotics": "Investigate robotics technology, automation, artificial intelligence, and future innovations"
    };
    return descriptions[unitName] || "Comprehensive study of English language and communication skills";
  };

  const getAgricultureUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Crop Production": "Learn crop cultivation techniques, planting methods, soil preparation, and harvest management",
      "Unit 2: Livestock Management": "Study animal husbandry, nutrition, breeding, health management, and livestock production systems",
      "Unit 3: Soil Science and Fertility": "Explore soil composition, fertility management, conservation practices, and sustainable soil use",
      "Unit 4: Agricultural Economics": "Understand farm economics, marketing, cooperatives, and agricultural finance systems",
      "Unit 5: Agricultural Technology": "Discover modern farming technologies, precision agriculture, and digital farming tools",
      "Unit 6: Sustainable Agriculture": "Learn sustainable farming practices, environmental conservation, and climate-smart agriculture"
    };
    return descriptions[unitName] || "Comprehensive study of agricultural principles and sustainable farming practices";
  };

  const getGeographyUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Major Geological Processes Associated with Plate Tectonics": "Study plate tectonics, earthquakes, volcanoes, and geological processes shaping Earth's surface",
      "Unit 2: Climate Change": "Explore global climate change, greenhouse effect, impacts, and adaptation strategies",
      "Unit 3: Population Policies Programs and the Environment": "Examine population dynamics, demographic policies, and their environmental implications",
      "Unit 4: Solutions to Environmental and Sustainability Problems": "Learn about renewable energy, conservation, sustainable development, and green technologies",
      "Unit 5: Challenges of Economic Development": "Investigate economic development challenges, poverty, inequality, and environmental trade-offs",
      "Unit 6: Solutions to Environmental and Sustainability Problems Solutions": "Discover conservation strategies, community-based solutions, and ecosystem management",
      "Unit 7: Contemporary Global Geographic Issues and Public Concerns": "Analyze globalization, urbanization, food security, and contemporary geographic challenges",
      "Unit 8: Geographical Enquiry and Map Making": "Master GIS, remote sensing, cartography, and geographic research methods"
    };
    return descriptions[unitName] || "Comprehensive study of geographic principles and contemporary issues";
  };

  const getHistoryUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Development of Capitalism and Nationalism from 1815 to 1914": "Explore the rise of capitalism, nationalism, and industrial society in 19th century Europe",
      "Unit 2: Africa and the Colonial Experience (1880s – 1960s)": "Study European colonization of Africa, resistance movements, and the path to independence",
      "Unit 3: Social, Economic, and Political Developments in Ethiopia, Mid, 19th C. to 1941": "Examine Ethiopian modernization, the Battle of Adwa, and resistance to colonialism",
      "Unit 4: Society and Politics in the Age of World Wars, 1914 - 1945": "Analyze the causes, conduct, and consequences of the two World Wars",
      "Unit 5: Global and Regional Developments Since 1945": "Investigate Cold War dynamics, decolonization, and post-war global transformations",
      "Unit 6: Ethiopia: Internal Developments and External Influences from 1941 to 1991": "Study Ethiopia under Haile Selassie and the Derg, including revolution and socialist transformation",
      "Unit 7: Africa since the 1960s": "Examine post-independence challenges, development efforts, and contemporary African politics",
      "Unit 8: Post-1991 Developments in Ethiopia": "Analyze Ethiopia's federal experiment, economic growth, and political transformation since 1991",
      "Unit 9: Indigenous Knowledge Systems and Heritages of Ethiopia": "Explore Ethiopian traditional knowledge, cultural heritage, and indigenous practices"
    };
    return descriptions[unitName] || "Comprehensive study of historical developments and their contemporary significance";
  };

  const getCivicsUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Building a Democratic System": "Explore democracy fundamentals, authority vs power, constitutional rights, and Ethiopian foreign relations",
      "Unit 2: Rule of Law": "Study constitutional supremacy, conflict management, anti-corruption measures, and good governance principles",
      "Unit 3: Equality": "Examine struggles against oppression, affirmative action policies, and unity in diversity concepts",
      "Unit 4: Justice": "Analyze equity principles, judicial systems, crime prevention, and taxation fairness",
      "Unit 5: Patriotism": "Learn qualities of patriots, Ethiopian historical heritage, and global citizenship responsibilities", 
      "Unit 6: Responsibility": "Understand personal and social duties, HIV/AIDS awareness, and international cooperation",
      "Unit 7: Industriousness": "Study work ethics, labor perspectives, and productivity in global contexts",
      "Unit 8: Self-Reliance": "Develop independence skills, moral decision-making, and personal autonomy",
      "Unit 9: Saving": "Master economic principles, saving methods, and money and capital management",
      "Unit 10: Active Community Participation": "Engage in civic activities, leadership development, and community involvement",
      "Unit 11: The Pursuit of Wisdom": "Cultivate knowledge, reading habits, and information literacy skills"
    };
    return descriptions[unitName] || "Comprehensive study of civic and ethical education principles";
  };

  const getITUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Information Systems and Their Applications": "Explore E-learning, E-government, E-banking, E-libraries, E-commerce, and system analysis methodologies",
      "Unit 2: Emerging Technologies": "Study cloud computing, big data analytics, AI fundamentals, digital identity, and ethical implications of technology",
      "Unit 3: Database Management System": "Master data modeling, relational databases, SQL programming, and database design principles",
      "Unit 4: Web Authoring": "Learn HTML/CSS coding, website planning, design principles, and web accessibility standards",
      "Unit 5: Maintenance and Troubleshooting": "Understand hardware/software diagnostics, system maintenance, and preventive care strategies",
      "Unit 6: Fundamentals of Programming": "Develop programming logic, pseudocode writing, flowchart design, and basic syntax skills"
    };
    return descriptions[unitName] || "Comprehensive study of information technology concepts and practical applications";
  };

  const getDurationEstimate = (questionCount: number) => {
    const hours = Math.ceil(questionCount / 8); // Roughly 8 questions per hour
    return `${hours}-${hours + 1} hours`;
  };

  const getDominantDifficulty = (easy: number, medium: number, hard: number) => {
    if (hard >= easy && hard >= medium) return 'Advanced';
    if (medium >= easy) return 'Intermediate';
    return 'Beginner';
  };

  const chapters = getChaptersForSubject();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-600 hover:bg-green-700';
      case 'Medium': return 'bg-yellow-600 hover:bg-yellow-700';
      case 'Hard': return 'bg-red-600 hover:bg-red-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  const handleStartQuiz = (chapterTitle: string, difficulty: 'Easy' | 'Medium' | 'Hard') => {
    const chapterSlug = encodeURIComponent(chapterTitle);
    navigate(`/grade/${grade}/subject/${encodeURIComponent(decodedSubject)}/chapter/${chapterSlug}/difficulty/${difficulty.toLowerCase()}/quiz`);
  };

  const overallProgress = Math.round(chapters.reduce((acc, chapter) => acc + chapter.progress, 0) / chapters.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20 mr-4"
            onClick={() => navigate(`/grade/${grade}/subjects`)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Subjects
          </Button>
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            {decodedSubject} Chapters
          </h1>
          <p className="text-xl text-blue-200 mb-6">
            Grade {grade} • Choose a chapter to start your quiz
          </p>
          
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium">Overall Progress</span>
              <span className="font-bold text-blue-300">
                {overallProgress}%
              </span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500" 
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter) => (
            <Card 
              key={chapter.id}
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 transition-all duration-300 group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-blue-500">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-white">
                      {chapter.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs mt-1">
                      Chapter {chapter.id}
                    </Badge>
                  </div>
                </div>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {chapter.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Chapter Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{chapter.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="mr-2 h-4 w-4" />
                    <span>{chapter.questionsCount} questions</span>
                  </div>
                </div>

                {/* Difficulty Breakdown */}
                <div className="bg-white/5 rounded-lg p-3 space-y-2">
                  <h4 className="text-white font-medium text-sm flex items-center">
                    <Target className="mr-1 h-3 w-3" />
                    Questions by Difficulty
                  </h4>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className="text-green-400 font-bold">{chapter.difficultyBreakdown.easy}</div>
                      <div className="text-gray-400">Easy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-yellow-400 font-bold">{chapter.difficultyBreakdown.medium}</div>
                      <div className="text-gray-400">Medium</div>
                    </div>
                    <div className="text-center">
                      <div className="text-red-400 font-bold">{chapter.difficultyBreakdown.hard}</div>
                      <div className="text-gray-400">Hard</div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                {chapter.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Progress</span>
                      <span className="font-medium text-blue-300">
                        {chapter.progress}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-blue-500" 
                        style={{ width: `${chapter.progress}%` }}
                      />
                    </div>
                  </div>
                )}
                
                {/* Difficulty Selection Buttons */}
                <div className="space-y-2">
                  <h4 className="text-white font-medium text-sm">Choose Difficulty Level:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {(['Easy', 'Medium', 'Hard'] as const).map((difficulty) => (
                      <Button
                        key={difficulty}
                        size="sm"
                        className={`text-xs text-white border-0 ${getDifficultyColor(difficulty)} transition-all duration-200`}
                        onClick={() => handleStartQuiz(chapter.title, difficulty)}
                        disabled={chapter.difficultyBreakdown[difficulty.toLowerCase() as keyof typeof chapter.difficultyBreakdown] === 0}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <Play className="mr-1 h-3 w-3" />
                            {difficulty}
                          </div>
                          <div className="flex items-center text-xs opacity-75">
                            <Clock className="mr-1 h-2 w-2" />
                            {difficulty === 'Easy' ? '30m' : difficulty === 'Medium' ? '45m' : '60m'}
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChaptersPage;
