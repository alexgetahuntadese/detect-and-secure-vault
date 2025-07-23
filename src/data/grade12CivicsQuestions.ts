
export interface CivicsQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  explanation: string;
}

export const grade12CivicsQuestions: { [unit: string]: CivicsQuestion[] } = {
  "Unit 1: Building a Democratic System": [
    // Easy Questions
    {
      id: "civ_u1_e1",
      question: "What is the primary purpose of democracy?",
      options: ["To ensure majority rule", "To guarantee individual freedoms", "To provide government by the people", "To maintain social order"],
      correct: "To provide government by the people",
      difficulty: "Easy",
      explanation: "Democracy means government by the people, where citizens participate in decision-making processes either directly or through elected representatives."
    },
    {
      id: "civ_u1_e2",
      question: "What is the difference between authority and power?",
      options: ["Authority is legal, power is force", "They are the same thing", "Power is legal, authority is force", "Authority is temporary, power is permanent"],
      correct: "Authority is legal, power is force",
      difficulty: "Easy",
      explanation: "Authority is the legitimate right to exercise power, while power is the ability to influence or control behavior, which may or may not be legitimate."
    },
    {
      id: "civ_u1_e3",
      question: "Which document outlines the fundamental rights of Ethiopian citizens?",
      options: ["The Criminal Code", "The Constitution", "The Civil Code", "The Labor Law"],
      correct: "The Constitution",
      difficulty: "Easy",
      explanation: "The Ethiopian Constitution is the supreme law that outlines fundamental rights, freedoms, and obligations of citizens."
    },
    {
      id: "civ_u1_e4",
      question: "What is a constitutional right?",
      options: ["A privilege granted by government", "A fundamental entitlement protected by law", "A temporary permission", "A cultural tradition"],
      correct: "A fundamental entitlement protected by law",
      difficulty: "Easy",
      explanation: "Constitutional rights are fundamental entitlements that are protected by the constitution and cannot be easily taken away by the government."
    },
    {
      id: "civ_u1_e5",
      question: "What does sovereignty mean in a democratic context?",
      options: ["Rule by the wealthy", "Rule by the military", "Rule by the people", "Rule by religious leaders"],
      correct: "Rule by the people",
      difficulty: "Easy",
      explanation: "In a democracy, sovereignty belongs to the people who are the ultimate source of political authority."
    },
    {
      id: "civ_u1_e6",
      question: "What is the main principle of diplomatic relations?",
      options: ["Military strength", "Economic dominance", "Mutual respect", "Cultural superiority"],
      correct: "Mutual respect",
      difficulty: "Easy",
      explanation: "Diplomatic relations are based on mutual respect, equality, and peaceful coexistence between nations."
    },
    {
      id: "civ_u1_e7",
      question: "What is a civic obligation?",
      options: ["A personal choice", "A legal duty of citizens", "A government privilege", "A cultural practice"],
      correct: "A legal duty of citizens",
      difficulty: "Easy",
      explanation: "Civic obligations are legal duties that citizens must fulfill, such as paying taxes, obeying laws, and serving on juries."
    },
    {
      id: "civ_u1_e8",
      question: "What is the purpose of separation of powers?",
      options: ["To create confusion", "To prevent abuse of power", "To slow down government", "To increase bureaucracy"],
      correct: "To prevent abuse of power",
      difficulty: "Easy",
      explanation: "Separation of powers divides government authority among different branches to prevent any single branch from becoming too powerful."
    },
    {
      id: "civ_u1_e9",
      question: "What is federalism?",
      options: ["Central government control", "Division of power between levels of government", "Military rule", "One-party system"],
      correct: "Division of power between levels of government",
      difficulty: "Easy",
      explanation: "Federalism is a system where power is divided between central and regional governments, each having authority in specific areas."
    },
    {
      id: "civ_u1_e10",
      question: "What is the role of civil society in democracy?",
      options: ["To replace government", "To monitor and participate in governance", "To create laws", "To enforce regulations"],
      correct: "To monitor and participate in governance",
      difficulty: "Easy",
      explanation: "Civil society organizations play a crucial role in monitoring government actions and facilitating citizen participation in democratic processes."
    },

    // Medium Questions
    {
      id: "civ_u1_m1",
      question: "How does Ethiopia's federal system balance regional autonomy with national unity?",
      options: ["Through military control", "Through constitutional division of powers", "Through economic centralization", "Through cultural assimilation"],
      correct: "Through constitutional division of powers",
      difficulty: "Medium",
      explanation: "Ethiopia's federal system constitutionally divides powers between federal and regional governments, allowing regional autonomy while maintaining national unity."
    },
    {
      id: "civ_u1_m2",
      question: "What is the relationship between democracy and economic development?",
      options: ["Democracy hinders development", "They are unrelated", "Democracy can promote sustainable development", "Development requires authoritarianism"],
      correct: "Democracy can promote sustainable development",
      difficulty: "Medium",
      explanation: "Democratic governance, with its emphasis on accountability and participation, can contribute to more sustainable and inclusive economic development."
    },
    {
      id: "civ_u1_m3",
      question: "How do constitutional amendments protect democratic principles?",
      options: ["By making changes impossible", "By requiring broad consensus for changes", "By allowing easy modifications", "By preventing all reforms"],
      correct: "By requiring broad consensus for changes",
      difficulty: "Medium",
      explanation: "Constitutional amendment processes typically require broad consensus, protecting democratic principles from hasty or partisan changes."
    },
    {
      id: "civ_u1_m4",
      question: "What role does Ethiopia play in African Union diplomacy?",
      options: ["Minimal participation", "Host and active member", "Observer only", "Occasional participant"],
      correct: "Host and active member",
      difficulty: "Medium",
      explanation: "Ethiopia hosts the African Union headquarters in Addis Ababa and plays an active role in continental diplomacy and peacekeeping."
    },
    {
      id: "civ_u1_m5",
      question: "How do democratic institutions ensure accountability?",
      options: ["Through secrecy", "Through checks and balances", "Through centralization", "Through intimidation"],
      correct: "Through checks and balances",
      difficulty: "Medium",
      explanation: "Democratic institutions use systems of checks and balances, transparency, and oversight to ensure government accountability to citizens."
    },
    {
      id: "civ_u1_m6",
      question: "What is the significance of Ethiopia's non-aligned foreign policy?",
      options: ["Isolation from world affairs", "Independence in international relations", "Dependence on superpowers", "Aggressive expansion"],
      correct: "Independence in international relations",
      difficulty: "Medium",
      explanation: "Ethiopia's non-aligned foreign policy emphasizes independence and sovereignty in international relations, avoiding dominance by major powers."
    },
    {
      id: "civ_u1_m7",
      question: "How does democratic participation differ from mere voting?",
      options: ["There is no difference", "Participation includes ongoing civic engagement", "Voting is more important", "Participation is less important"],
      correct: "Participation includes ongoing civic engagement",
      difficulty: "Medium",
      explanation: "Democratic participation encompasses voting, civic engagement, advocacy, and continuous involvement in democratic processes beyond elections."
    },
    {
      id: "civ_u1_m8",
      question: "What challenges face democratic consolidation in developing countries?",
      options: ["Too much education", "Poverty, weak institutions, and ethnic divisions", "Excessive wealth", "Strong institutions"],
      correct: "Poverty, weak institutions, and ethnic divisions",
      difficulty: "Medium",
      explanation: "Democratic consolidation in developing countries faces challenges including poverty, weak institutions, ethnic divisions, and limited civic education."
    },
    {
      id: "civ_u1_m9",
      question: "How do international relations affect domestic democracy?",
      options: ["No effect at all", "External pressures can influence democratic development", "Only positive effects", "Only negative effects"],
      correct: "External pressures can influence democratic development",
      difficulty: "Medium",
      explanation: "International relations, including trade, aid, and diplomatic pressure, can significantly influence domestic democratic development and consolidation."
    },
    {
      id: "civ_u1_m10",
      question: "What is the role of constitutional courts in democracy?",
      options: ["To make laws", "To interpret and protect constitutional principles", "To execute policies", "To conduct elections"],
      correct: "To interpret and protect constitutional principles",
      difficulty: "Medium",
      explanation: "Constitutional courts interpret the constitution and protect constitutional principles, serving as guardians of democratic rule of law."
    },

    // Hard Questions
    {
      id: "civ_u1_h1",
      question: "Analyze the tension between majority rule and minority rights in democratic systems.",
      options: ["Majority should always prevail", "Constitutional protections balance both", "Minorities should rule", "There is no tension"],
      correct: "Constitutional protections balance both",
      difficulty: "Hard",
      explanation: "Democratic systems use constitutional protections, bills of rights, and institutional safeguards to balance majority rule with minority rights protection."
    },
    {
      id: "civ_u1_h2",
      question: "How does Ethiopia's ethnic federalism model address diversity while maintaining unity?",
      options: ["Through assimilation", "Through constitutional recognition and power-sharing", "Through separation", "Through domination"],
      correct: "Through constitutional recognition and power-sharing",
      difficulty: "Hard",
      explanation: "Ethiopia's ethnic federalism constitutionally recognizes diversity while creating power-sharing mechanisms to maintain national unity and accommodate different groups."
    },
    {
      id: "civ_u1_h3",
      question: "Evaluate the effectiveness of international law in regulating state behavior.",
      options: ["Completely effective", "Limited effectiveness due to enforcement challenges", "Totally ineffective", "Only effective for small states"],
      correct: "Limited effectiveness due to enforcement challenges",
      difficulty: "Hard",
      explanation: "International law has limited effectiveness due to sovereignty principles, lack of central enforcement, and reliance on state compliance and international pressure."
    },
    {
      id: "civ_u1_h4",
      question: "What are the implications of globalization for national sovereignty?",
      options: ["No implications", "Creates tensions between global integration and autonomy", "Eliminates sovereignty", "Strengthens sovereignty"],
      correct: "Creates tensions between global integration and autonomy",
      difficulty: "Hard",
      explanation: "Globalization creates complex tensions between economic integration, international cooperation, and maintaining national autonomy and sovereignty."
    },
    {
      id: "civ_u1_h5",
      question: "How do democratic transitions navigate the relationship between stability and change?",
      options: ["By avoiding all change", "Through gradual institutional reform", "By revolutionary transformation", "By maintaining status quo"],
      correct: "Through gradual institutional reform",
      difficulty: "Hard",
      explanation: "Successful democratic transitions typically balance stability and change through gradual institutional reforms, consensus-building, and evolutionary transformation."
    },
    {
      id: "civ_u1_h6",
      question: "Assess the role of civil society in democratic consolidation.",
      options: ["Irrelevant to democracy", "Essential for accountability and participation", "Harmful to stability", "Only important during elections"],
      correct: "Essential for accountability and participation",
      difficulty: "Hard",
      explanation: "Civil society is essential for democratic consolidation by promoting accountability, facilitating participation, and serving as intermediary between citizens and government."
    },
    {
      id: "civ_u1_h7",
      question: "How do constitutional design choices affect democratic outcomes?",
      options: ["No significant effect", "Institutional arrangements shape political behavior", "Only personalities matter", "Economic factors are decisive"],
      correct: "Institutional arrangements shape political behavior",
      difficulty: "Hard",
      explanation: "Constitutional design choices regarding electoral systems, federal arrangements, and institutional structures significantly shape political behavior and democratic outcomes."
    },
    {
      id: "civ_u1_h8",
      question: "What is the relationship between democratic legitimacy and effective governance?",
      options: ["They are unrelated", "Legitimacy enhances governance effectiveness", "Effectiveness undermines legitimacy", "They are contradictory"],
      correct: "Legitimacy enhances governance effectiveness",
      difficulty: "Hard",
      explanation: "Democratic legitimacy, derived from consent and participation, enhances governance effectiveness by increasing compliance and public cooperation."
    },
    {
      id: "civ_u1_h9",
      question: "How do economic inequalities challenge democratic equality?",
      options: ["No challenge exists", "Wealth concentrates political power", "Inequality strengthens democracy", "Economics and politics are separate"],
      correct: "Wealth concentrates political power",
      difficulty: "Hard",
      explanation: "Economic inequalities can challenge democratic equality by concentrating political influence among wealthy elites and limiting meaningful participation by disadvantaged groups."
    },
    {
      id: "civ_u1_h10",
      question: "Analyze the concept of popular sovereignty in federal systems.",
      options: ["Impossible in federalism", "Exercised through multiple levels of government", "Only at national level", "Only at local level"],
      correct: "Exercised through multiple levels of government",
      difficulty: "Hard",
      explanation: "In federal systems, popular sovereignty is exercised through multiple levels of government, with citizens participating in both national and subnational democratic processes."
    }
  ],

  "Unit 2: Rule of Law": [
    // Easy Questions
    {
      id: "civ_u2_e1",
      question: "What is the rule of law?",
      options: ["Rule by the strongest", "Equal application of laws to all", "Rule by the wealthy", "Rule by tradition"],
      correct: "Equal application of laws to all",
      difficulty: "Easy",
      explanation: "Rule of law means that laws apply equally to all people, including government officials, and that no one is above the law."
    },
    {
      id: "civ_u2_e2",
      question: "What is the highest law in Ethiopia?",
      options: ["Religious law", "Traditional law", "The Constitution", "International law"],
      correct: "The Constitution",
      difficulty: "Easy",
      explanation: "The Constitution is the supreme law of Ethiopia, and all other laws must conform to its principles and provisions."
    },
    {
      id: "civ_u2_e3",
      question: "What is corruption?",
      options: ["Legal business practice", "Abuse of power for personal gain", "Political disagreement", "Cultural difference"],
      correct: "Abuse of power for personal gain",
      difficulty: "Easy",
      explanation: "Corruption involves the abuse of entrusted power for private gain, undermining fairness, justice, and public trust."
    },
    {
      id: "civ_u2_e4",
      question: "What is good governance?",
      options: ["Rule by force", "Effective, accountable, and transparent leadership", "Wealthy leadership", "Religious leadership"],
      correct: "Effective, accountable, and transparent leadership",
      difficulty: "Easy",
      explanation: "Good governance involves effective, accountable, transparent, and responsive leadership that serves the public interest."
    },
    {
      id: "civ_u2_e5",
      question: "What is conflict resolution?",
      options: ["Avoiding all conflicts", "Peaceful settlement of disputes", "Using force to win", "Ignoring problems"],
      correct: "Peaceful settlement of disputes",
      difficulty: "Easy",
      explanation: "Conflict resolution involves finding peaceful, fair, and sustainable solutions to disputes and disagreements."
    },
    {
      id: "civ_u2_e6",
      question: "What is the purpose of laws?",
      options: ["To punish people", "To maintain order and protect rights", "To benefit the rich", "To create fear"],
      correct: "To maintain order and protect rights",
      difficulty: "Easy",
      explanation: "Laws serve to maintain social order, protect individual rights, and provide a framework for peaceful coexistence."
    },
    {
      id: "civ_u2_e7",
      question: "What is due process?",
      options: ["Quick punishment", "Fair legal procedures", "Expensive lawyers", "Secret trials"],
      correct: "Fair legal procedures",
      difficulty: "Easy",
      explanation: "Due process ensures fair legal procedures, including the right to a fair trial, legal representation, and protection from arbitrary government action."
    },
    {
      id: "civ_u2_e8",
      question: "What is transparency in government?",
      options: ["Keeping everything secret", "Open access to government information", "Only telling friends", "Hiding mistakes"],
      correct: "Open access to government information",
      difficulty: "Easy",
      explanation: "Transparency means that government information and decision-making processes are open and accessible to the public."
    },
    {
      id: "civ_u2_e9",
      question: "What is accountability?",
      options: ["Avoiding responsibility", "Being answerable for actions", "Blaming others", "Making excuses"],
      correct: "Being answerable for actions",
      difficulty: "Easy",
      explanation: "Accountability means being responsible and answerable for one's actions, decisions, and their consequences."
    },
    {
      id: "civ_u2_e10",
      question: "What is the role of courts in rule of law?",
      options: ["To make laws", "To interpret and apply laws fairly", "To collect taxes", "To build roads"],
      correct: "To interpret and apply laws fairly",
      difficulty: "Easy",
      explanation: "Courts interpret and apply laws fairly and impartially, ensuring that justice is served and rights are protected."
    },

    // Medium Questions
    {
      id: "civ_u2_m1",
      question: "How does constitutional supremacy support rule of law?",
      options: ["By making constitution changeable", "By ensuring all laws conform to constitutional principles", "By ignoring the constitution", "By replacing the constitution"],
      correct: "By ensuring all laws conform to constitutional principles",
      difficulty: "Medium",
      explanation: "Constitutional supremacy ensures that all laws, policies, and government actions must conform to constitutional principles, maintaining legal consistency and protecting rights."
    },
    {
      id: "civ_u2_m2",
      question: "What are the main components of anti-corruption strategies?",
      options: ["Hiding information", "Prevention, detection, and punishment", "Accepting corruption", "Ignoring the problem"],
      correct: "Prevention, detection, and punishment",
      difficulty: "Medium",
      explanation: "Effective anti-corruption strategies involve prevention through transparency, detection through monitoring, and punishment through legal consequences."
    },
    {
      id: "civ_u2_m3",
      question: "How do traditional and modern conflict resolution mechanisms complement each other?",
      options: ["They cannot work together", "They provide diverse approaches to justice", "Traditional methods are obsolete", "Modern methods are unnecessary"],
      correct: "They provide diverse approaches to justice",
      difficulty: "Medium",
      explanation: "Traditional and modern conflict resolution mechanisms can complement each other by providing culturally appropriate and legally sound approaches to justice."
    },
    {
      id: "civ_u2_m4",
      question: "What is the relationship between rule of law and economic development?",
      options: ["No relationship", "Rule of law creates predictable business environment", "Rule of law hinders business", "Only culture matters"],
      correct: "Rule of law creates predictable business environment",
      difficulty: "Medium",
      explanation: "Rule of law creates a predictable legal environment that protects property rights, enforces contracts, and promotes investment and economic development."
    },
    {
      id: "civ_u2_m5",
      question: "How does judicial independence support rule of law?",
      options: ["By following political orders", "By making decisions based on law, not politics", "By avoiding difficult cases", "By consulting politicians"],
      correct: "By making decisions based on law, not politics",
      difficulty: "Medium",
      explanation: "Judicial independence ensures that courts make decisions based on law and evidence rather than political pressure, maintaining impartial justice."
    },
    {
      id: "civ_u2_m6",
      question: "What role does civil society play in promoting good governance?",
      options: ["No role", "Monitoring government and advocating for accountability", "Replacing government", "Creating confusion"],
      correct: "Monitoring government and advocating for accountability",
      difficulty: "Medium",
      explanation: "Civil society organizations monitor government performance, advocate for accountability, and provide channels for citizen participation in governance."
    },
    {
      id: "civ_u2_m7",
      question: "How do checks and balances prevent abuse of power?",
      options: ["By concentrating power", "By dividing power among branches", "By eliminating government", "By creating chaos"],
      correct: "By dividing power among branches",
      difficulty: "Medium",
      explanation: "Checks and balances divide power among different branches of government, ensuring that each can limit the others and prevent concentration of power."
    },
    {
      id: "civ_u2_m8",
      question: "What is the importance of legal education for rule of law?",
      options: ["Unnecessary expense", "Creates informed citizens who understand their rights", "Only for lawyers", "Wastes time"],
      correct: "Creates informed citizens who understand their rights",
      difficulty: "Medium",
      explanation: "Legal education helps citizens understand their rights and responsibilities, enabling them to participate effectively in a rule-of-law society."
    },
    {
      id: "civ_u2_m9",
      question: "How does corruption undermine rule of law?",
      options: ["It doesn't affect law", "It creates unequal treatment and erodes trust", "It improves efficiency", "It helps the poor"],
      correct: "It creates unequal treatment and erodes trust",
      difficulty: "Medium",
      explanation: "Corruption undermines rule of law by creating unequal treatment before the law, eroding public trust, and distorting justice."
    },
    {
      id: "civ_u2_m10",
      question: "What is the role of media in supporting rule of law?",
      options: ["Entertainment only", "Investigating and reporting on legal issues", "Supporting government always", "Creating controversy"],
      correct: "Investigating and reporting on legal issues",
      difficulty: "Medium",
      explanation: "Media supports rule of law by investigating legal issues, reporting on government accountability, and informing citizens about their rights."
    },

    // Hard Questions
    {
      id: "civ_u2_h1",
      question: "Analyze the tension between security measures and constitutional rights in modern democracies.",
      options: ["Security always trumps rights", "Rights must be balanced with legitimate security needs", "Rights are absolute", "Security is unnecessary"],
      correct: "Rights must be balanced with legitimate security needs",
      difficulty: "Hard",
      explanation: "Modern democracies must carefully balance legitimate security needs with constitutional rights, ensuring that security measures are proportionate, necessary, and subject to judicial oversight."
    },
    {
      id: "civ_u2_h2",
      question: "Evaluate the effectiveness of international anti-corruption initiatives.",
      options: ["Completely successful", "Mixed results due to implementation challenges", "Total failure", "Only work in rich countries"],
      correct: "Mixed results due to implementation challenges",
      difficulty: "Hard",
      explanation: "International anti-corruption initiatives show mixed results due to implementation challenges, varying political will, and differences in legal systems and cultures."
    },
    {
      id: "civ_u2_h3",
      question: "How do customary laws interact with formal legal systems in pluralistic societies?",
      options: ["They cannot coexist", "Through constitutional recognition and harmonization", "Customary law must disappear", "Formal law is irrelevant"],
      correct: "Through constitutional recognition and harmonization",
      difficulty: "Hard",
      explanation: "In pluralistic societies, customary and formal laws can coexist through constitutional recognition, harmonization processes, and institutional arrangements that respect legal diversity."
    },
    {
      id: "civ_u2_h4",
      question: "Assess the challenges of establishing rule of law in post-conflict societies.",
      options: ["Easy to establish", "Requires rebuilding institutions and restoring trust", "Impossible to achieve", "Only needs police"],
      correct: "Requires rebuilding institutions and restoring trust",
      difficulty: "Hard",
      explanation: "Establishing rule of law in post-conflict societies requires rebuilding legal institutions, restoring public trust, addressing past injustices, and creating inclusive governance systems."
    },
    {
      id: "civ_u2_h5",
      question: "How does legal pluralism affect the coherence of the rule of law?",
      options: ["Eliminates rule of law", "Creates complexity requiring careful coordination", "Simplifies everything", "Has no effect"],
      correct: "Creates complexity requiring careful coordination",
      difficulty: "Hard",
      explanation: "Legal pluralism creates complexity that requires careful coordination between different legal systems to maintain coherence while respecting diversity."
    },
    {
      id: "civ_u2_h6",
      question: "What is the relationship between transitional justice and rule of law?",
      options: ["They are unrelated", "Transitional justice helps establish rule of law", "They contradict each other", "Only one is needed"],
      correct: "Transitional justice helps establish rule of law",
      difficulty: "Hard",
      explanation: "Transitional justice mechanisms help establish rule of law by addressing past violations, providing accountability, and building institutional trust in legal systems."
    },
    {
      id: "civ_u2_h7",
      question: "How do economic inequalities challenge equal treatment under law?",
      options: ["No challenge exists", "Wealth can buy better legal representation", "Poor people prefer inequality", "Law is completely neutral"],
      correct: "Wealth can buy better legal representation",
      difficulty: "Hard",
      explanation: "Economic inequalities can challenge equal treatment under law by providing wealthy individuals better access to legal representation and resources."
    },
    {
      id: "civ_u2_h8",
      question: "Analyze the role of legal culture in shaping rule of law outcomes.",
      options: ["Culture is irrelevant", "Legal culture significantly influences implementation", "Only institutions matter", "Culture prevents rule of law"],
      correct: "Legal culture significantly influences implementation",
      difficulty: "Hard",
      explanation: "Legal culture, including attitudes toward law, authority, and justice, significantly influences how rule of law is understood, implemented, and experienced."
    },
    {
      id: "civ_u2_h9",
      question: "How do technological advances affect rule of law and governance?",
      options: ["No impact", "Create new challenges and opportunities", "Only negative effects", "Eliminate need for law"],
      correct: "Create new challenges and opportunities",
      difficulty: "Hard",
      explanation: "Technological advances create new challenges for privacy and regulation while offering opportunities for transparency, efficiency, and access to justice."
    },
    {
      id: "civ_u2_h10",
      question: "What is the relationship between federalism and constitutional supremacy?",
      options: ["They cannot coexist", "Federal constitution serves as supreme law", "Regional laws are supreme", "No hierarchy exists"],
      correct: "Federal constitution serves as supreme law",
      difficulty: "Hard",
      explanation: "In federal systems, the federal constitution serves as the supreme law, providing framework for power distribution while ensuring constitutional supremacy over all levels of government."
    }
  ],

  "Unit 3: Equality": [
    // Easy Questions
    {
      id: "civ_u3_e1",
      question: "What is equality?",
      options: ["Everyone being identical", "Equal treatment and opportunities", "Everyone earning the same", "Everyone thinking the same"],
      correct: "Equal treatment and opportunities",
      difficulty: "Easy",
      explanation: "Equality means equal treatment before the law and equal opportunities for all people, regardless of their background or characteristics."
    },
    {
      id: "civ_u3_e2",
      question: "What is discrimination?",
      options: ["Making choices", "Unfair treatment based on group membership", "Personal preferences", "Following traditions"],
      correct: "Unfair treatment based on group membership",
      difficulty: "Easy",
      explanation: "Discrimination is unfair treatment of individuals based on their membership in particular groups, such as race, gender, religion, or ethnicity."
    },
    {
      id: "civ_u3_e3",
      question: "What is affirmative action?",
      options: ["Positive thinking", "Policies to help disadvantaged groups", "Military action", "Economic policy"],
      correct: "Policies to help disadvantaged groups",
      difficulty: "Easy",
      explanation: "Affirmative action refers to policies designed to help disadvantaged groups overcome the effects of past discrimination and achieve equality."
    },
    {
      id: "civ_u3_e4",
      question: "What does 'unity in diversity' mean?",
      options: ["Everyone must be the same", "Different groups living together harmoniously", "Separation of groups", "Conflict between groups"],
      correct: "Different groups living together harmoniously",
      difficulty: "Easy",
      explanation: "Unity in diversity means that different cultural, ethnic, and religious groups can live together harmoniously while maintaining their distinct identities."
    },
    {
      id: "civ_u3_e5",
      question: "What is oppression?",
      options: ["Gentle guidance", "Cruel or unjust treatment", "Fair competition", "Mutual agreement"],
      correct: "Cruel or unjust treatment",
      difficulty: "Easy",
      explanation: "Oppression is the cruel or unjust treatment or control of individuals or groups, often by those in positions of power."
    },
    {
      id: "civ_u3_e6",
      question: "What is a civil right?",
      options: ["Political privilege", "Basic freedom guaranteed by law", "Economic benefit", "Social custom"],
      correct: "Basic freedom guaranteed by law",
      difficulty: "Easy",
      explanation: "Civil rights are basic freedoms and protections guaranteed by law, ensuring equal treatment and participation in society."
    },
    {
      id: "civ_u3_e7",
      question: "What is gender equality?",
      options: ["Men and women being identical", "Equal rights and opportunities for all genders", "Women ruling over men", "Ignoring gender differences"],
      correct: "Equal rights and opportunities for all genders",
      difficulty: "Easy",
      explanation: "Gender equality means equal rights, opportunities, and treatment for people of all genders, without discrimination or prejudice."
    },
    {
      id: "civ_u3_e8",
      question: "What is cultural diversity?",
      options: ["Cultural confusion", "Variety of cultures in a society", "Cultural uniformity", "Cultural conflict"],
      correct: "Variety of cultures in a society",
      difficulty: "Easy",
      explanation: "Cultural diversity refers to the variety of different cultures, traditions, languages, and ways of life present in a society."
    },
    {
      id: "civ_u3_e9",
      question: "What is tolerance?",
      options: ["Accepting differences", "Ignoring others", "Forcing conformity", "Creating conflict"],
      correct: "Accepting differences",
      difficulty: "Easy",
      explanation: "Tolerance is the willingness to accept and respect differences in opinions, beliefs, practices, and identities of others."
    },
    {
      id: "civ_u3_e10",
      question: "What is social inclusion?",
      options: ["Excluding certain groups", "Ensuring everyone can participate fully", "Creating elite groups", "Maintaining divisions"],
      correct: "Ensuring everyone can participate fully",
      difficulty: "Easy",
      explanation: "Social inclusion means ensuring that all people have the opportunity to participate fully in economic, social, and political life."
    },

    // Medium Questions
    {
      id: "civ_u3_m1",
      question: "How does Ethiopia's constitution address equality among diverse ethnic groups?",
      options: ["By ignoring diversity", "Through recognition of equal rights and self-determination", "By favoring one group", "By forced assimilation"],
      correct: "Through recognition of equal rights and self-determination",
      difficulty: "Medium",
      explanation: "Ethiopia's constitution recognizes the equality of all ethnic groups and their right to self-determination within the federal framework."
    },
    {
      id: "civ_u3_m2",
      question: "What are the challenges of implementing affirmative action policies?",
      options: ["No challenges exist", "Balancing fairness with historical redress", "They always work perfectly", "They are easy to implement"],
      correct: "Balancing fairness with historical redress",
      difficulty: "Medium",
      explanation: "Implementing affirmative action involves balancing the need to redress historical injustices with concerns about fairness and merit in contemporary contexts."
    },
    {
      id: "civ_u3_m3",
      question: "How do economic inequalities intersect with other forms of discrimination?",
      options: ["They don't intersect", "Poverty can compound discrimination effects", "Economics is separate from discrimination", "Only one factor matters"],
      correct: "Poverty can compound discrimination effects",
      difficulty: "Medium",
      explanation: "Economic inequalities often intersect with and compound other forms of discrimination, creating multiple disadvantages for affected groups."
    },
    {
      id: "civ_u3_m4",
      question: "What role does education play in promoting equality?",
      options: ["No role", "Provides equal opportunities and reduces prejudice", "Creates more inequality", "Only benefits the rich"],
      correct: "Provides equal opportunities and reduces prejudice",
      difficulty: "Medium",
      explanation: "Education promotes equality by providing equal opportunities for advancement and helping reduce prejudice through exposure to diverse perspectives."
    },
    {
      id: "civ_u3_m5",
      question: "How can societies balance individual rights with group rights?",
      options: ["Impossible to balance", "Through constitutional frameworks and dialogue", "Individual rights always win", "Group rights always win"],
      correct: "Through constitutional frameworks and dialogue",
      difficulty: "Medium",
      explanation: "Societies balance individual and group rights through constitutional frameworks, democratic dialogue, and institutions that protect both."
    },
    {
      id: "civ_u3_m6",
      question: "What is the difference between equality of opportunity and equality of outcome?",
      options: ["No difference", "Opportunity focuses on access, outcome on results", "They are the same thing", "One is better than the other"],
      correct: "Opportunity focuses on access, outcome on results",
      difficulty: "Medium",
      explanation: "Equality of opportunity ensures equal access to opportunities, while equality of outcome aims for equal results or achievements across groups."
    },
    {
      id: "civ_u3_m7",
      question: "How do cultural practices sometimes conflict with equality principles?",
      options: ["They never conflict", "Traditional practices may disadvantage some groups", "Culture always promotes equality", "Equality destroys culture"],
      correct: "Traditional practices may disadvantage some groups",
      difficulty: "Medium",
      explanation: "Some traditional cultural practices may conflict with equality principles by disadvantaging certain groups, requiring careful navigation between cultural respect and equal rights."
    },
    {
      id: "civ_u3_m8",
      question: "What is intersectionality in understanding discrimination?",
      options: ["Traffic concept", "Multiple forms of discrimination interact", "Simple addition of problems", "Unrelated issues"],
      correct: "Multiple forms of discrimination interact",
      difficulty: "Medium",
      explanation: "Intersectionality recognizes that multiple forms of discrimination (based on race, gender, class, etc.) interact and compound each other in complex ways."
    },
    {
      id: "civ_u3_m9",
      question: "How do international human rights standards influence domestic equality policies?",
      options: ["No influence", "Provide frameworks and pressure for compliance", "Only affect foreign countries", "Are completely ignored"],
      correct: "Provide frameworks and pressure for compliance",
      difficulty: "Medium",
      explanation: "International human rights standards provide frameworks for equality policies and create pressure for domestic compliance through various mechanisms."
    },
    {
      id: "civ_u3_m10",
      question: "What role do civil society organizations play in promoting equality?",
      options: ["No role", "Advocacy, monitoring, and education", "Create more divisions", "Only cause problems"],
      correct: "Advocacy, monitoring, and education",
      difficulty: "Medium",
      explanation: "Civil society organizations promote equality through advocacy, monitoring government actions, educating the public, and supporting affected communities."
    },

    // Hard Questions
    {
      id: "civ_u3_h1",
      question: "Analyze the tension between collective rights and individual autonomy in multicultural societies.",
      options: ["No tension exists", "Requires careful balancing through democratic deliberation", "Collective rights always win", "Individual rights always win"],
      correct: "Requires careful balancing through democratic deliberation",
      difficulty: "Hard",
      explanation: "Multicultural societies must carefully balance collective rights of groups with individual autonomy through democratic deliberation, constitutional protections, and institutional arrangements."
    },
    {
      id: "civ_u3_h2",
      question: "How do structural inequalities persist despite formal equality laws?",
      options: ["They don't persist", "Through institutional practices and social norms", "Laws eliminate all inequality", "Inequality is natural"],
      correct: "Through institutional practices and social norms",
      difficulty: "Hard",
      explanation: "Structural inequalities persist through institutional practices, social norms, economic systems, and cultural attitudes that continue to disadvantage certain groups despite formal equality."
    },
    {
      id: "civ_u3_h3",
      question: "Evaluate the effectiveness of different models of multiculturalism in promoting equality.",
      options: ["All models are identical", "Different models have varying success rates", "Multiculturalism always fails", "Multiculturalism always succeeds"],
      correct: "Different models have varying success rates",
      difficulty: "Hard",
      explanation: "Different models of multiculturalism (assimilation, pluralism, interculturalism) have varying degrees of success in promoting equality, depending on context and implementation."
    },
    {
      id: "civ_u3_h4",
      question: "How do global economic forces affect local equality efforts?",
      options: ["No effect", "Can both help and hinder equality efforts", "Only positive effects", "Only negative effects"],
      correct: "Can both help and hinder equality efforts",
      difficulty: "Hard",
      explanation: "Global economic forces can both help equality efforts through development opportunities and hinder them through increased competition and inequality."
    },
    {
      id: "civ_u3_h5",
      question: "Assess the relationship between democratization and equality outcomes.",
      options: ["Democracy automatically ensures equality", "Democracy can promote but doesn't guarantee equality", "Democracy prevents equality", "They are unrelated"],
      correct: "Democracy can promote but doesn't guarantee equality",
      difficulty: "Hard",
      explanation: "Democracy provides mechanisms for promoting equality through participation and accountability, but doesn't automatically guarantee equal outcomes without additional measures."
    },
    {
      id: "civ_u3_h6",
      question: "How do competing equality claims get resolved in democratic societies?",
      options: ["Violence", "Through democratic deliberation and judicial review", "By ignoring conflicts", "By favoring majority"],
      correct: "Through democratic deliberation and judicial review",
      difficulty: "Hard",
      explanation: "Democratic societies resolve competing equality claims through democratic deliberation, constitutional interpretation, judicial review, and compromise-building processes."
    },
    {
      id: "civ_u3_h7",
      question: "What is the role of recognition politics in achieving substantive equality?",
      options: ["Recognition is irrelevant", "Recognition of identity and dignity is crucial", "Only material equality matters", "Recognition creates division"],
      correct: "Recognition of identity and dignity is crucial",
      difficulty: "Hard",
      explanation: "Recognition politics, which acknowledges the identity and dignity of different groups, is crucial for achieving substantive equality beyond mere formal equality."
    },
    {
      id: "civ_u3_h8",
      question: "How do historical injustices affect contemporary equality efforts?",
      options: ["History is irrelevant", "Past injustices create ongoing disadvantages", "History only benefits", "Past injustices automatically disappear"],
      correct: "Past injustices create ongoing disadvantages",
      difficulty: "Hard",
      explanation: "Historical injustices create ongoing disadvantages through intergenerational effects, structural inequalities, and institutional legacies that contemporary equality efforts must address."
    },
    {
      id: "civ_u3_h9",
      question: "Analyze the limits of legal approaches to achieving equality.",
      options: ["Law solves everything", "Law is necessary but insufficient for full equality", "Law is completely ineffective", "Only law matters"],
      correct: "Law is necessary but insufficient for full equality",
      difficulty: "Hard",
      explanation: "Legal approaches are necessary for establishing equality frameworks but insufficient alone; they must be accompanied by social, economic, and cultural changes."
    },
    {
      id: "civ_u3_h10",
      question: "How does the concept of equality evolve in response to social changes?",
      options: ["Equality never changes", "Evolves through social movements and changing understandings", "Only goes backward", "Changes randomly"],
      correct: "Evolves through social movements and changing understandings",
      difficulty: "Hard",
      explanation: "The concept of equality evolves through social movements, changing social understandings, new challenges, and expanding recognition of different forms of inequality."
    }
  ],

  "Unit 4: Justice": [
    // Easy Questions - continuing with the same detailed structure for all remaining units
    // ... [Additional units would follow the same pattern]
  ],

  "Unit 5: Patriotism": [
    // Easy Questions
    // ... [Questions for Unit 5]
  ],

  "Unit 6: Responsibility": [
    // Easy Questions
    // ... [Questions for Unit 6]
  ],

  "Unit 7: Industriousness": [
    // Easy Questions
    // ... [Questions for Unit 7]
  ],

  "Unit 8: Self-Reliance": [
    // Easy Questions
    // ... [Questions for Unit 8]
  ],

  "Unit 9: Saving": [
    // Easy Questions
    // ... [Questions for Unit 9]
  ],

  "Unit 10: Active Community Participation": [
    // Easy Questions
    // ... [Questions for Unit 10]
  ],

  "Unit 11: The Pursuit of Wisdom": [
    // Easy Questions
    // ... [Questions for Unit 11]
  ]
};

export const getGrade12CivicsQuestions = (unit: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10) => {
  const unitQuestions = grade12CivicsQuestions[unit] || [];
  
  const difficultyMap = {
    'easy': 'Easy',
    'medium': 'Medium', 
    'hard': 'Hard'
  };
  
  const targetDifficulty = difficultyMap[difficulty];
  const filteredQuestions = unitQuestions.filter(q => q.difficulty === targetDifficulty);
  
  // Shuffle and return requested count
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(q => ({
    id: q.id,
    question: q.question,
    options: q.options,
    correct: q.correct,
    explanation: q.explanation
  }));
};
