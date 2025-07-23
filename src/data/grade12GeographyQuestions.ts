
export interface GeographyQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade12GeographyQuestions: { [unit: string]: GeographyQuestion[] } = {
  "Unit 1: Major Geological Processes Associated with Plate Tectonics": [
    // Easy Questions
    {
      id: "geo12_u1_e1",
      question: "What is plate tectonics?",
      options: ["The theory of moving continents", "The study of earthquakes", "The formation of mountains", "Weather patterns"],
      correct: "The theory of moving continents",
      explanation: "Plate tectonics is the theory that Earth's outer shell is divided into several plates that glide over the mantle.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u1_e2",
      question: "What causes earthquakes?",
      options: ["Movement of tectonic plates", "Wind erosion", "Ocean currents", "Solar radiation"],
      correct: "Movement of tectonic plates",
      explanation: "Earthquakes are caused by sudden movements along fractures in the Earth's crust due to tectonic plate movements.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u1_e3",
      question: "Which type of boundary creates new oceanic crust?",
      options: ["Divergent boundary", "Convergent boundary", "Transform boundary", "Continental boundary"],
      correct: "Divergent boundary",
      explanation: "Divergent boundaries are where new oceanic crust is created as plates move apart and magma rises.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u1_e4",
      question: "What is the Ring of Fire?",
      options: ["Area of frequent earthquakes and volcanoes", "Desert region", "Ocean current", "Mountain range"],
      correct: "Area of frequent earthquakes and volcanoes",
      explanation: "The Ring of Fire is a region around the Pacific Ocean where many earthquakes and volcanic eruptions occur.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "geo12_u1_m1",
      question: "What happens at a convergent plate boundary?",
      options: ["Plates move apart", "Plates collide and one subducts", "Plates slide past each other", "Plates remain stationary"],
      correct: "Plates collide and one subducts",
      explanation: "At convergent boundaries, plates collide and typically one plate is forced beneath another in a process called subduction.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u1_m2",
      question: "Which geological process is responsible for forming the Himalayas?",
      options: ["Continental-continental collision", "Oceanic-oceanic collision", "Transform faulting", "Volcanic activity"],
      correct: "Continental-continental collision",
      explanation: "The Himalayas were formed by the collision of the Indian and Eurasian continental plates.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u1_m3",
      question: "What is seafloor spreading?",
      options: ["Ocean water expansion", "Creation of new oceanic crust at mid-ocean ridges", "Continental drift", "Tsunami formation"],
      correct: "Creation of new oceanic crust at mid-ocean ridges",
      explanation: "Seafloor spreading is the process where new oceanic crust is formed at mid-ocean ridges and spreads outward.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "geo12_u1_h1",
      question: "What is the relationship between the age of oceanic crust and its distance from mid-ocean ridges?",
      options: ["Older crust is closer to ridges", "Younger crust is farther from ridges", "Age increases with distance from ridges", "No relationship exists"],
      correct: "Age increases with distance from ridges",
      explanation: "Oceanic crust becomes progressively older as distance from mid-ocean ridges increases due to seafloor spreading.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u1_h2",
      question: "Which mechanism drives plate motion according to current theory?",
      options: ["Convection currents in the mantle", "Earth's rotation", "Gravitational pull of the moon", "Solar radiation"],
      correct: "Convection currents in the mantle",
      explanation: "Mantle convection currents are the primary driving force behind plate tectonic movement.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u1_h3",
      question: "What type of volcanic activity is associated with subduction zones?",
      options: ["Explosive, andesitic volcanism", "Gentle, basaltic volcanism", "No volcanic activity", "Only geothermal activity"],
      correct: "Explosive, andesitic volcanism",
      explanation: "Subduction zones are characterized by explosive volcanic eruptions with intermediate to felsic magma composition.",
      difficulty: "Hard"
    }
  ],

  "Unit 2: Climate Change": [
    // Easy Questions
    {
      id: "geo12_u2_e1",
      question: "What is the greenhouse effect?",
      options: ["Trapping of heat in Earth's atmosphere", "Cooling of the planet", "Formation of clouds", "Ocean currents"],
      correct: "Trapping of heat in Earth's atmosphere",
      explanation: "The greenhouse effect is the process by which certain gases in the atmosphere trap heat from the sun.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u2_e2",
      question: "Which gas is the primary contributor to human-caused climate change?",
      options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Argon"],
      correct: "Carbon dioxide",
      explanation: "Carbon dioxide from burning fossil fuels is the main greenhouse gas contributing to climate change.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u2_e3",
      question: "What is global warming?",
      options: ["Increase in Earth's average temperature", "Decrease in Earth's temperature", "Changes in weather patterns", "Melting of ice only"],
      correct: "Increase in Earth's average temperature",
      explanation: "Global warming refers to the long-term increase in Earth's average surface temperature due to human activities.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "geo12_u2_m1",
      question: "What is the main cause of sea level rise?",
      options: ["Thermal expansion of oceans and melting ice", "Increased rainfall", "Ocean currents", "Tidal changes"],
      correct: "Thermal expansion of oceans and melting ice",
      explanation: "Sea level rise is primarily caused by thermal expansion of warming oceans and melting of glaciers and ice sheets.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u2_m2",
      question: "Which feedback mechanism amplifies climate change?",
      options: ["Ice-albedo feedback", "Cloud formation", "Ocean absorption", "Forest growth"],
      correct: "Ice-albedo feedback",
      explanation: "As ice melts, darker surfaces absorb more heat, leading to more warming and more melting.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "geo12_u2_h1",
      question: "What is the carbon cycle's role in climate regulation?",
      options: ["Regulates atmospheric CO2 levels", "Controls ocean salinity", "Determines wind patterns", "Affects soil formation"],
      correct: "Regulates atmospheric CO2 levels",
      explanation: "The carbon cycle naturally regulates atmospheric CO2 levels through exchanges between atmosphere, oceans, and biosphere.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u2_h2",
      question: "How do aerosols affect climate?",
      options: ["Can both cool and warm the atmosphere", "Only warm the atmosphere", "Only cool the atmosphere", "Have no effect"],
      correct: "Can both cool and warm the atmosphere",
      explanation: "Aerosols can have cooling effects by reflecting sunlight or warming effects by absorbing radiation.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u2_h3",
      question: "What is climate sensitivity?",
      options: ["Temperature change from CO2 doubling", "Rate of ice melting", "Ocean temperature change", "Precipitation change"],
      correct: "Temperature change from CO2 doubling",
      explanation: "Climate sensitivity measures how much global temperature would increase if atmospheric CO2 concentrations doubled.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u2_h4",
      question: "What role do forests play in climate regulation?",
      options: ["Carbon sequestration and albedo effects", "Only oxygen production", "Only water cycle", "Only wildlife habitat"],
      correct: "Carbon sequestration and albedo effects",
      explanation: "Forests regulate climate by absorbing CO2, affecting local albedo, and influencing water and energy cycles.",
      difficulty: "Hard"
    }
  ],

  "Unit 3: Population Policies Programs and the Environment": [
    // Easy Questions
    {
      id: "geo12_u3_e1",
      question: "What is population density?",
      options: ["Number of people per unit area", "Total population", "Birth rate", "Death rate"],
      correct: "Number of people per unit area",
      explanation: "Population density is the number of people living in a specific area, usually measured per square kilometer.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u3_e2",
      question: "What is demographic transition?",
      options: ["Change in population growth patterns", "Migration patterns", "Age distribution", "Gender ratio"],
      correct: "Change in population growth patterns",
      explanation: "Demographic transition describes the change from high birth and death rates to low birth and death rates.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u3_e3",
      question: "What is carrying capacity?",
      options: ["Maximum population an environment can sustain", "Current population", "Population growth rate", "Birth rate"],
      correct: "Maximum population an environment can sustain",
      explanation: "Carrying capacity is the maximum number of individuals an environment can support indefinitely.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "geo12_u3_m1",
      question: "How does population growth affect resource consumption?",
      options: ["Increases demand for natural resources", "Decreases resource use", "No effect on resources", "Only affects renewable resources"],
      correct: "Increases demand for natural resources",
      explanation: "Population growth increases demand for food, water, energy, and other natural resources.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u3_m2",
      question: "What is sustainable population management?",
      options: ["Balancing population with resource availability", "Reducing population only", "Increasing population only", "Ignoring environmental limits"],
      correct: "Balancing population with resource availability",
      explanation: "Sustainable population management aims to balance human population with environmental carrying capacity.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "geo12_u3_h1",
      question: "What is the ecological footprint?",
      options: ["Measure of human impact on environment", "Population size", "Economic development", "Life expectancy"],
      correct: "Measure of human impact on environment",
      explanation: "Ecological footprint measures the amount of natural resources required to support a population's lifestyle.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u3_h2",
      question: "How do family planning programs affect environmental sustainability?",
      options: ["Reduce population pressure on resources", "Increase resource consumption", "Have no environmental impact", "Only affect economic growth"],
      correct: "Reduce population pressure on resources",
      explanation: "Family planning programs can help achieve sustainable population levels, reducing pressure on natural resources.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u3_h3",
      question: "What is the relationship between education and population growth?",
      options: ["Higher education correlates with lower birth rates", "Education increases birth rates", "No relationship exists", "Only affects mortality"],
      correct: "Higher education correlates with lower birth rates",
      explanation: "Education, especially for women, is strongly correlated with lower fertility rates and slower population growth.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u3_h4",
      question: "How does urbanization affect environmental impact?",
      options: ["Concentrates impact but can increase efficiency", "Only negative impacts", "Only positive impacts", "No environmental effect"],
      correct: "Concentrates impact but can increase efficiency",
      explanation: "Urbanization concentrates environmental impacts but can also improve resource efficiency through economies of scale.",
      difficulty: "Hard"
    }
  ],

  "Unit 4: Solutions to Environmental and Sustainability Problems": [
    // Easy Questions
    {
      id: "geo12_u4_e1",
      question: "What is renewable energy?",
      options: ["Energy from sources that naturally replenish", "Energy from fossil fuels", "Nuclear energy", "Coal energy"],
      correct: "Energy from sources that naturally replenish",
      explanation: "Renewable energy comes from natural sources that are constantly replenished, like solar and wind.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u4_e2",
      question: "What is recycling?",
      options: ["Converting waste into reusable materials", "Throwing away waste", "Burning waste", "Burying waste"],
      correct: "Converting waste into reusable materials",
      explanation: "Recycling is the process of converting waste materials into new materials and objects.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u4_e3",
      question: "What is sustainable development?",
      options: ["Development that meets present needs without compromising future", "Any economic growth", "Industrial development", "Urban expansion"],
      correct: "Development that meets present needs without compromising future",
      explanation: "Sustainable development meets current needs while ensuring future generations can meet their own needs.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "geo12_u4_m1",
      question: "What is carbon sequestration?",
      options: ["Capturing and storing atmospheric carbon", "Releasing carbon into atmosphere", "Using carbon for energy", "Trading carbon credits"],
      correct: "Capturing and storing atmospheric carbon",
      explanation: "Carbon sequestration involves capturing atmospheric CO2 and storing it to reduce greenhouse gas levels.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u4_m2",
      question: "What is the circular economy?",
      options: ["Economic model that eliminates waste", "Traditional linear economy", "Service-based economy", "Agricultural economy"],
      correct: "Economic model that eliminates waste",
      explanation: "The circular economy is designed to eliminate waste and keep materials in use for as long as possible.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "geo12_u4_h1",
      question: "What is ecosystem restoration?",
      options: ["Returning degraded ecosystems to natural state", "Creating new ecosystems", "Studying ecosystems", "Protecting existing ecosystems"],
      correct: "Returning degraded ecosystems to natural state",
      explanation: "Ecosystem restoration involves assisting the recovery of ecosystems that have been degraded, damaged, or destroyed.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u4_h2",
      question: "How does green technology address environmental challenges?",
      options: ["Provides clean alternatives to harmful practices", "Only focuses on energy", "Replaces all traditional technology", "Has no environmental benefit"],
      correct: "Provides clean alternatives to harmful practices",
      explanation: "Green technology offers environmentally friendly alternatives that reduce pollution and resource consumption.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u4_h3",
      question: "What is adaptive management in environmental conservation?",
      options: ["Flexible approach that learns from outcomes", "Fixed management strategy", "Emergency response only", "Top-down management"],
      correct: "Flexible approach that learns from outcomes",
      explanation: "Adaptive management is a flexible approach that adjusts strategies based on monitoring results and changing conditions.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u4_h4",
      question: "What role does international cooperation play in solving global environmental problems?",
      options: ["Essential for addressing transboundary issues", "Unnecessary for environmental issues", "Only for local problems", "Slows down solutions"],
      correct: "Essential for addressing transboundary issues",
      explanation: "International cooperation is crucial for addressing global environmental challenges that cross national boundaries.",
      difficulty: "Hard"
    }
  ],

  "Unit 5: Challenges of Economic Development": [
    // Easy Questions
    {
      id: "geo12_u5_e1",
      question: "What is economic development?",
      options: ["Improvement in economic well-being and living standards", "Only GDP growth", "Industrial growth", "Population growth"],
      correct: "Improvement in economic well-being and living standards",
      explanation: "Economic development encompasses improvements in economic well-being, living standards, and quality of life.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u5_e2",
      question: "What is poverty?",
      options: ["Lack of basic necessities for adequate living", "Low income only", "Unemployment", "Rural living"],
      correct: "Lack of basic necessities for adequate living",
      explanation: "Poverty is the state of lacking sufficient money or material possessions for basic needs.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u5_e3",
      question: "What is income inequality?",
      options: ["Unequal distribution of income among population", "Low wages", "Unemployment", "Economic growth"],
      correct: "Unequal distribution of income among population",
      explanation: "Income inequality refers to the uneven distribution of income across different segments of the population.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "geo12_u5_m1",
      question: "How does environmental degradation affect economic development?",
      options: ["Reduces natural capital and long-term growth", "Has no economic impact", "Only affects agriculture", "Increases short-term profits"],
      correct: "Reduces natural capital and long-term growth",
      explanation: "Environmental degradation depletes natural resources and ecosystem services needed for sustainable economic growth.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u5_m2",
      question: "What is the resource curse?",
      options: ["Negative effects of natural resource abundance", "Benefits of having resources", "Lack of natural resources", "Resource depletion"],
      correct: "Negative effects of natural resource abundance",
      explanation: "The resource curse refers to the paradox where countries with abundant natural resources may experience slower economic growth.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "geo12_u5_h1",
      question: "What is the environmental Kuznets curve?",
      options: ["Relationship between income and environmental quality", "Population growth curve", "Resource depletion curve", "Economic growth model"],
      correct: "Relationship between income and environmental quality",
      explanation: "The environmental Kuznets curve suggests environmental degradation initially increases with income then decreases.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u5_h2",
      question: "How does globalization affect local environments?",
      options: ["Can increase environmental pressure through trade", "Only positive environmental effects", "No environmental impact", "Only affects developed countries"],
      correct: "Can increase environmental pressure through trade",
      explanation: "Globalization can increase environmental pressure through expanded production, trade, and resource extraction.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u5_h3",
      question: "What is green growth?",
      options: ["Economic growth while reducing environmental impact", "Any economic growth", "Growth in green industries only", "Agricultural growth"],
      correct: "Economic growth while reducing environmental impact",
      explanation: "Green growth aims to achieve economic growth while reducing environmental impacts and improving resource efficiency.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u5_h4",
      question: "How do trade policies affect environmental sustainability?",
      options: ["Can either promote or hinder environmental protection", "Always harm environment", "Always help environment", "Have no environmental effect"],
      correct: "Can either promote or hinder environmental protection",
      explanation: "Trade policies can either support environmental goals through green standards or undermine them through resource exploitation.",
      difficulty: "Hard"
    }
  ],

  "Unit 6: Solutions to Environmental and Sustainability Problems Solutions": [
    // Easy Questions
    {
      id: "geo12_u6_e1",
      question: "What is conservation?",
      options: ["Protection and preservation of natural resources", "Using resources quickly", "Industrial development", "Urban expansion"],
      correct: "Protection and preservation of natural resources",
      explanation: "Conservation involves the protection, preservation, and careful management of natural resources.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u6_e2",
      question: "What is environmental education?",
      options: ["Teaching about environmental issues and solutions", "Only outdoor activities", "Scientific research", "Government policy"],
      correct: "Teaching about environmental issues and solutions",
      explanation: "Environmental education aims to increase awareness and knowledge about environmental issues and promote sustainable behavior.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u6_e3",
      question: "What is community-based conservation?",
      options: ["Local communities managing their natural resources", "Government-only conservation", "International conservation", "Private conservation"],
      correct: "Local communities managing their natural resources",
      explanation: "Community-based conservation involves local communities in managing and protecting their natural resources.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "geo12_u6_m1",
      question: "What is ecosystem-based adaptation?",
      options: ["Using ecosystems to help adapt to climate change", "Only technological adaptation", "Economic adaptation", "Social adaptation only"],
      correct: "Using ecosystems to help adapt to climate change",
      explanation: "Ecosystem-based adaptation uses natural ecosystems to help communities adapt to climate change impacts.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u6_m2",
      question: "What is the role of indigenous knowledge in environmental solutions?",
      options: ["Provides traditional sustainable practices", "Is outdated and irrelevant", "Only applies to remote areas", "Conflicts with modern science"],
      correct: "Provides traditional sustainable practices",
      explanation: "Indigenous knowledge systems often contain valuable traditional practices for sustainable resource management.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "geo12_u6_h1",
      question: "What is payment for ecosystem services?",
      options: ["Compensating for environmental benefits provided", "Taxing environmental damage", "Free ecosystem services", "Government subsidies only"],
      correct: "Compensating for environmental benefits provided",
      explanation: "Payment for ecosystem services provides economic incentives for conserving and restoring ecosystems.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u6_h2",
      question: "How does participatory governance improve environmental management?",
      options: ["Involves stakeholders in decision-making", "Excludes public participation", "Only government decisions", "Reduces transparency"],
      correct: "Involves stakeholders in decision-making",
      explanation: "Participatory governance includes various stakeholders in environmental decision-making for better outcomes.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u6_h3",
      question: "What is integrated landscape management?",
      options: ["Coordinated management across land uses", "Single-use land management", "Urban planning only", "Agricultural management only"],
      correct: "Coordinated management across land uses",
      explanation: "Integrated landscape management coordinates different land uses to optimize multiple objectives sustainably.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u6_h4",
      question: "What role does technology transfer play in environmental solutions?",
      options: ["Shares clean technologies globally", "Keeps technology local", "Only transfers harmful technology", "Prevents innovation"],
      correct: "Shares clean technologies globally",
      explanation: "Technology transfer helps spread clean and sustainable technologies from developed to developing countries.",
      difficulty: "Hard"
    }
  ],

  "Unit 7: Contemporary Global Geographic Issues and Public Concerns": [
    // Easy Questions
    {
      id: "geo12_u7_e1",
      question: "What is globalization?",
      options: ["Increasing interconnectedness worldwide", "Only economic growth", "Cultural isolation", "Political independence"],
      correct: "Increasing interconnectedness worldwide",
      explanation: "Globalization refers to the increasing interconnectedness of countries through trade, culture, and communication.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u7_e2",
      question: "What is urban sprawl?",
      options: ["Uncontrolled expansion of urban areas", "Compact city development", "Rural development", "Population decline"],
      correct: "Uncontrolled expansion of urban areas",
      explanation: "Urban sprawl is the uncontrolled expansion of urban areas into surrounding regions.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u7_e3",
      question: "What is food security?",
      options: ["Access to sufficient, safe, and nutritious food", "Food storage only", "Agricultural production", "Food prices"],
      correct: "Access to sufficient, safe, and nutritious food",
      explanation: "Food security means having reliable access to sufficient quantities of affordable, nutritious food.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "geo12_u7_m1",
      question: "What is the digital divide?",
      options: ["Gap in access to digital technologies", "Computer programming", "Internet speed differences", "Technology costs"],
      correct: "Gap in access to digital technologies",
      explanation: "The digital divide refers to the gap between those who have access to digital technologies and those who don't.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u7_m2",
      question: "How does climate change affect migration patterns?",
      options: ["Creates climate refugees and displacement", "Has no effect on migration", "Only affects internal migration", "Reduces all migration"],
      correct: "Creates climate refugees and displacement",
      explanation: "Climate change can force people to migrate due to sea level rise, droughts, and extreme weather events.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "geo12_u7_h1",
      question: "What is geopolitics?",
      options: ["Politics influenced by geography", "Only domestic politics", "Economic policy", "Social policy"],
      correct: "Politics influenced by geography",
      explanation: "Geopolitics studies how geography influences political power and international relations.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u7_h2",
      question: "How do transnational corporations affect local environments?",
      options: ["Can have both positive and negative impacts", "Only positive impacts", "Only negative impacts", "No environmental impact"],
      correct: "Can have both positive and negative impacts",
      explanation: "TNCs can bring clean technology and investment but may also cause environmental degradation.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u7_h3",
      question: "What is the concept of global commons?",
      options: ["Shared resources beyond national jurisdiction", "Private property only", "National resources", "Local community resources"],
      correct: "Shared resources beyond national jurisdiction",
      explanation: "Global commons are shared resources like the atmosphere, oceans, and Antarctica that belong to all humanity.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u7_h4",
      question: "How does water scarcity affect global security?",
      options: ["Can lead to conflicts and instability", "Has no security implications", "Only affects agriculture", "Improves international cooperation"],
      correct: "Can lead to conflicts and instability",
      explanation: "Water scarcity can cause conflicts between and within countries, affecting regional and global security.",
      difficulty: "Hard"
    }
  ],

  "Unit 8: Geographical Enquiry and Map Making": [
    // Easy Questions
    {
      id: "geo12_u8_e1",
      question: "What is a map scale?",
      options: ["Ratio of map distance to actual distance", "Size of the map", "Map colors", "Map symbols"],
      correct: "Ratio of map distance to actual distance",
      explanation: "Map scale shows the relationship between distances on the map and corresponding distances on the ground.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u8_e2",
      question: "What is GIS?",
      options: ["Geographic Information System", "Global Internet System", "General Information Service", "Geological Investigation System"],
      correct: "Geographic Information System",
      explanation: "GIS is a system for capturing, storing, analyzing, and presenting geographic data.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u8_e3",
      question: "What is remote sensing?",
      options: ["Gathering information from a distance", "Direct field observation", "Laboratory analysis", "Interview surveys"],
      correct: "Gathering information from a distance",
      explanation: "Remote sensing is the acquisition of information about objects or areas from a distance, typically from aircraft or satellites.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "geo12_u8_m1",
      question: "What is spatial analysis?",
      options: ["Analysis of geographic patterns and relationships", "Time series analysis", "Statistical analysis only", "Economic analysis"],
      correct: "Analysis of geographic patterns and relationships",
      explanation: "Spatial analysis examines the locations, attributes, and relationships of features in spatial data.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u8_m2",
      question: "What is GPS?",
      options: ["Global Positioning System", "Geographic Planning System", "General Purpose Software", "Geological Projection System"],
      correct: "Global Positioning System",
      explanation: "GPS is a satellite-based navigation system that provides location and time information anywhere on Earth.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "geo12_u8_h1",
      question: "What is cartographic generalization?",
      options: ["Simplifying map detail for clarity", "Making maps more complex", "Using only satellite data", "Avoiding map symbols"],
      correct: "Simplifying map detail for clarity",
      explanation: "Cartographic generalization involves simplifying geographic data to make maps readable at different scales.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u8_h2",
      question: "How does map projection affect data representation?",
      options: ["Can distort area, shape, distance, or direction", "Has no effect on accuracy", "Only affects color", "Only affects symbols"],
      correct: "Can distort area, shape, distance, or direction",
      explanation: "Map projections transform the curved Earth surface to flat maps, inevitably causing some distortion.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u8_h3",
      question: "What is spatial autocorrelation?",
      options: ["Tendency for nearby locations to have similar values", "Random spatial distribution", "Uniform spatial distribution", "Temporal correlation"],
      correct: "Tendency for nearby locations to have similar values",
      explanation: "Spatial autocorrelation measures the degree to which similar values cluster together in space.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u8_h4",
      question: "What is the role of metadata in geographic data?",
      options: ["Provides information about data quality and source", "Contains the actual geographic data", "Only for data storage", "Replaces the need for data"],
      correct: "Provides information about data quality and source",
      explanation: "Metadata describes the content, quality, condition, origin, and other characteristics of geographic data.",
      difficulty: "Hard"
    }
  ]
};

export const getGrade12GeographyQuestions = (unit: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10) => {
  const unitQuestions = grade12GeographyQuestions[unit];
  if (!unitQuestions) {
    console.log('No questions found for unit:', unit);
    return [];
  }

  const difficultyCapitalized = difficulty.charAt(0).toUpperCase() + difficulty.slice(1) as 'Easy' | 'Medium' | 'Hard';
  const filteredQuestions = unitQuestions.filter(q => q.difficulty === difficultyCapitalized);
  
  // Convert to standard Question format
  const convertedQuestions = filteredQuestions.map(q => ({
    id: q.id,
    question: q.question,
    options: q.options,
    correct: q.correct,
    explanation: q.explanation
  }));

  // Shuffle and return requested count
  const shuffled = convertedQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
