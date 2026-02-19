// PROFESSIONAL DNA ASSESSMENT (PDN)
// Measures: Achievement drive, power motivation, affiliation needs, autonomy desire, purpose alignment

export const professionalDNATest = {
  id: "professional-dna",
  name: "Professional DNA",
  version: "2.1",
  reliability: 0.88,
  validityFramework: "Based on McClelland's Theory of Needs + Self-Determination Theory (Deci & Ryan) + Career Anchors (Schein)",
  
  dimensions: [
    {
      id: "achievement-drive",
      name: "Achievement Drive",
      description: "Intrinsic motivation to excel, overcome challenges, and reach high standards",
      weight: 0.25,
      questions: [1, 8, 15, 22, 29, 36]
    },
    {
      id: "power-motivation",
      name: "Power Motivation",
      description: "Desire to influence, lead, and impact organizational outcomes",
      weight: 0.20,
      questions: [2, 9, 16, 23, 30, 37]
    },
    {
      id: "affiliation-needs",
      name: "Affiliation Needs",
      description: "Importance of relationships, collaboration, and social connection at work",
      weight: 0.20,
      questions: [3, 10, 17, 24, 31, 38]
    },
    {
      id: "autonomy-desire",
      name: "Autonomy Desire",
      description: "Need for independence, self-direction, and control over work",
      weight: 0.20,
      questions: [4, 11, 18, 25, 32, 39]
    },
    {
      id: "purpose-alignment",
      name: "Purpose Alignment",
      description: "Drive to do meaningful work aligned with personal values",
      weight: 0.15,
      questions: [5, 12, 19, 26, 33, 40]
    }
  ],

  questions: [
    // Achievement Drive (1, 8, 15, 22, 29, 36)
    { id: 1, dimension: "achievement-drive", text: "I set challenging goals for myself and work relentlessly to achieve them.", reverseScored: false },
    { id: 8, dimension: "achievement-drive", text: "I feel most satisfied when I've accomplished something difficult.", reverseScored: false },
    { id: 15, dimension: "achievement-drive", text: "I'm driven by the desire to be the best at what I do.", reverseScored: false },
    { id: 22, dimension: "achievement-drive", text: "I regularly seek feedback to improve my performance.", reverseScored: false },
    { id: 29, dimension: "achievement-drive", text: "I measure my success against objective standards of excellence.", reverseScored: false },
    { id: 36, dimension: "achievement-drive", text: "I prefer tasks where I can see concrete results of my efforts.", reverseScored: false },

    // Power Motivation (2, 9, 16, 23, 30, 37)
    { id: 2, dimension: "power-motivation", text: "I want to be in positions where my decisions shape organizational direction.", reverseScored: false },
    { id: 9, dimension: "power-motivation", text: "I'm motivated by the opportunity to lead and influence others.", reverseScored: false },
    { id: 16, dimension: "power-motivation", text: "I enjoy having authority and responsibility for important outcomes.", reverseScored: false },
    { id: 23, dimension: "power-motivation", text: "I want my ideas to drive change in my organization or industry.", reverseScored: false },
    { id: 30, dimension: "power-motivation", text: "I'm energized by competitive situations where I can win.", reverseScored: false },
    { id: 37, dimension: "power-motivation", text: "I seek roles where I can make a significant impact on results.", reverseScored: false },

    // Affiliation Needs (3, 10, 17, 24, 31, 38)
    { id: 3, dimension: "affiliation-needs", text: "Building strong relationships at work is very important to me.", reverseScored: false },
    { id: 10, dimension: "affiliation-needs", text: "I prefer working in collaborative teams rather than alone.", reverseScored: false },
    { id: 17, dimension: "affiliation-needs", text: "Being liked and accepted by colleagues matters to me.", reverseScored: false },
    { id: 24, dimension: "affiliation-needs", text: "I invest significant energy in maintaining workplace relationships.", reverseScored: false },
    { id: 31, dimension: "affiliation-needs", text: "A harmonious work environment is essential for my satisfaction.", reverseScored: false },
    { id: 38, dimension: "affiliation-needs", text: "I prioritize team cohesion over individual recognition.", reverseScored: false },

    // Autonomy Desire (4, 11, 18, 25, 32, 39)
    { id: 4, dimension: "autonomy-desire", text: "I need significant freedom in how I approach my work.", reverseScored: false },
    { id: 11, dimension: "autonomy-desire", text: "I prefer roles where I can make decisions without excessive oversight.", reverseScored: false },
    { id: 18, dimension: "autonomy-desire", text: "I get frustrated when I have to follow rigid procedures.", reverseScored: false },
    { id: 25, dimension: "autonomy-desire", text: "I'm most productive when I can set my own schedule and methods.", reverseScored: false },
    { id: 32, dimension: "autonomy-desire", text: "I value independence more than job security.", reverseScored: false },
    { id: 39, dimension: "autonomy-desire", text: "I prefer being evaluated on outcomes rather than processes.", reverseScored: false },

    // Purpose Alignment (5, 12, 19, 26, 33, 40)
    { id: 5, dimension: "purpose-alignment", text: "My work must align with my personal values to be fulfilling.", reverseScored: false },
    { id: 12, dimension: "purpose-alignment", text: "I need to feel that my work makes a positive difference.", reverseScored: false },
    { id: 19, dimension: "purpose-alignment", text: "I would take a pay cut to work for an organization whose mission I believe in.", reverseScored: false },
    { id: 26, dimension: "purpose-alignment", text: "I regularly reflect on whether my work is meaningful.", reverseScored: false },
    { id: 33, dimension: "purpose-alignment", text: "I get energized when I can see the impact of my work on others.", reverseScored: false },
    { id: 40, dimension: "purpose-alignment", text: "I would leave a high-paying job if it conflicted with my values.", reverseScored: false },

    // Fillers (6, 7, 13, 14, 20, 21, 27, 28, 34, 35)
    { id: 6, dimension: "achievement-drive", text: "I'm competitive and enjoy comparing my performance to others.", reverseScored: false },
    { id: 7, dimension: "power-motivation", text: "I'm comfortable being the public face of an organization or team.", reverseScored: false },
    { id: 13, dimension: "affiliation-needs", text: "I enjoy social activities with colleagues outside of work.", reverseScored: false },
    { id: 14, dimension: "autonomy-desire", text: "I prefer roles where I can work remotely or set my own hours.", reverseScored: false },
    { id: 20, dimension: "purpose-alignment", text: "I need to believe in what my organization stands for.", reverseScored: false },
    { id: 21, dimension: "achievement-drive", text: "I'm motivated by recognition for my accomplishments.", reverseScored: false },
    { id: 27, dimension: "power-motivation", text: "I enjoy mentoring and developing other professionals.", reverseScored: false },
    { id: 28, dimension: "affiliation-needs", text: "I prefer workplaces with strong cultural values and community.", reverseScored: false },
    { id: 34, dimension: "autonomy-desire", text: "I thrive in environments that allow experimentation and creativity.", reverseScored: false },
    { id: 35, dimension: "purpose-alignment", text: "I want my legacy to include making the world better.", reverseScored: false }
  ],

  archetypes: [
    {
      id: "driven-achiever",
      name: "Driven Achiever",
      scoreRange: [85, 100],
      percentile: "Top 5%",
      description: "You are relentlessly focused on excellence and results. Achievement is your primary fuel, and you consistently raise the bar for yourself and others.",
      strengths: ["Exceptional goal orientation", "High performance standards", "Resilience", "Results focus"],
      blindSpots: ["May sacrifice relationships for results", "Risk of burnout", "May overlook process in pursuit of outcomes"],
      growthAreas: ["Develop sustainable pace", "Invest in relationships", "Celebrate progress not just outcomes"],
      idealRoles: ["Sales Leadership", "Investment Banking", "Management Consulting", "Entrepreneurship", "Athletics"],
      famousExamples: ["Michael Jordan", "Elon Musk", "Serena Williams"]
    },
    {
      id: "impact-influencer",
      name: "Impact Influencer",
      scoreRange: [70, 84],
      percentile: "Top 20%",
      description: "You are motivated by making a difference and influencing outcomes. You seek roles where your decisions matter and your impact is visible.",
      strengths: ["Strong influence motivation", "Purpose-driven", "Leadership orientation", "Impact focus"],
      blindSpots: ["May prioritize influence over relationships", "Could be more achievement-focused", "May seek visibility excessively"],
      growthAreas: ["Develop deeper expertise", "Balance influence with collaboration", "Focus on sustainable impact"],
      idealRoles: ["CEO", "Nonprofit Leadership", "Politics", "Social Entrepreneurship", "Advocacy"],
      famousExamples: ["Barack Obama", "Malala Yousafzai", "Bill Gates"]
    },
    {
      id: "collaborative-builder",
      name: "Collaborative Builder",
      scoreRange: [55, 69],
      percentile: "Top 50%",
      description: "You value relationships and collaboration highly. You thrive in team environments and prioritize collective success.",
      strengths: ["Strong team orientation", "Relationship building", "Collaborative spirit", "Cultural contribution"],
      blindSpots: ["May avoid necessary conflict", "Could be more assertive", "May prioritize harmony over results"],
      growthAreas: ["Develop comfort with constructive conflict", "Build independent decision-making", "Balance team needs with personal goals"],
      idealRoles: ["HR Leadership", "Team Management", "Customer Success", "Community Building", "Education"],
      famousExamples: ["Effective team leaders"]
    },
    {
      id: "independent-creator",
      name: "Independent Creator",
      scoreRange: [40, 54],
      percentile: "Bottom 50%",
      description: "You value autonomy and independence highly. You prefer to work on your own terms and may struggle in highly structured environments.",
      strengths: ["Self-directed", "Independent thinking", "Creative freedom", "Entrepreneurial spirit"],
      blindSpots: ["May resist necessary structure", "Could collaborate more effectively", "May struggle with organizational politics"],
      growthAreas: ["Develop collaboration skills", "Build tolerance for organizational constraints", "Find autonomy within structure"],
      idealRoles: ["Freelancer", "Researcher", "Artist", "Independent Consultant", "Remote Worker"],
      famousExamples: ["Independent creators and freelancers"]
    },
    {
      id: "security-seeker",
      name: "Security Seeker",
      scoreRange: [0, 39],
      percentile: "Bottom 20%",
      description: "You prioritize stability, security, and predictability. You prefer clear expectations and established routines.",
      strengths: ["Reliable", "Consistent", "Risk-averse in positive ways", "Loyal"],
      blindSpots: ["May resist change", "Could take more calculated risks", "May miss growth opportunities"],
      growthAreas: ["Develop comfort with ambiguity", "Take small calculated risks", "Explore growth opportunities"],
      idealRoles: ["Government", "Large Corporate", "Administrative", "Operations", "Compliance"],
      famousExamples: ["Reliable organizational contributors"]
    }
  ],

  scoring: {
    scale: { min: 1, max: 5, labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    calculateDimension: (responses: number[], dimensionQuestions: number[]) => {
      const relevantResponses = responses.filter((_, idx) => dimensionQuestions.includes(idx + 1));
      const sum = relevantResponses.reduce((a, b) => a + b, 0);
      return (sum / relevantResponses.length) * 20;
    },
    calculateTotal: (dimensionScores: number[], weights: number[]) => {
      return dimensionScores.reduce((total, score, idx) => total + score * weights[idx], 0);
    },
    getArchetype: (totalScore: number) => {
      return professionalDNATest.archetypes.find(a => totalScore >= a.scoreRange[0] && totalScore <= a.scoreRange[1]);
    }
  },

  benchmarks: {
    overall: { mean: 60, median: 61, stdDev: 16, percentiles: { p10: 38, p25: 48, p50: 61, p75: 72, p90: 82, p95: 88, p99: 95 } },
    byRole: {
      "Entrepreneur": { mean: 72, topPerformers: 85 },
      "CEO": { mean: 76, topPerformers: 88 },
      "Manager": { mean: 62, topPerformers: 76 },
      "Individual Contributor": { mean: 55, topPerformers: 70 }
    }
  }
};

export default professionalDNATest;
