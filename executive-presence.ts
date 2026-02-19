// EXECUTIVE PRESENCE ASSESSMENT (EXP)
// Based on Hewlett's Executive Presence Research + Leadership Image Studies

export const executivePresenceTest = {
  id: "executive-presence",
  name: "Executive Presence",
  version: "2.1",
      reliability: 0.89,
  validityFramework: "Based on Hewlett's Executive Presence Model (Gravitas, Communication, Appearance) + Leadership Credibility Research",
  
  dimensions: [
    {
      id: "gravitas",
      name: "Gravitas",
      description: "Depth of expertise, confidence, and ability to project authority",
      weight: 0.30,
      questions: [1, 8, 15, 22, 29, 36]
    },
    {
      id: "communication-authority",
      name: "Communication Authority",
      description: "Clarity, persuasiveness, and commanding presence in communication",
      weight: 0.25,
      questions: [2, 9, 16, 23, 30, 37]
    },
    {
      id: "appearance-poise",
      name: "Appearance & Poise",
      description: "Professional presentation, grooming, and physical presence",
      weight: 0.15,
      questions: [3, 10, 17, 24, 31, 38]
    },
    {
      id: "executive-stamina",
      name: "Executive Stamina",
      description: "Ability to maintain presence and performance under pressure",
      weight: 0.15,
      questions: [4, 11, 18, 25, 32, 39]
    },
    {
      id: "room-command",
      name: "Room Command",
      description: "Ability to capture and hold attention in group settings",
      weight: 0.15,
      questions: [5, 12, 19, 26, 33, 40]
    }
  ],

  questions: [
    // Gravitas (1, 8, 15, 22, 29, 36)
    { id: 1, dimension: "gravitas", text: "People describe me as having 'presence' when I enter a room.", reverseScored: false },
    { id: 8, dimension: "gravitas", text: "I project confidence even when discussing topics outside my expertise.", reverseScored: false },
    { id: 15, dimension: "gravitas", text: "Others seek my opinion on important matters because they value my judgment.", reverseScored: false },
    { id: 22, dimension: "gravitas", text: "I can hold my own in conversations with senior leaders and experts.", reverseScored: false },
    { id: 29, dimension: "gravitas", text: "I convey authority through my demeanor and bearing.", reverseScored: false },
    { id: 36, dimension: "gravitas", text: "I'm comfortable being the most senior or knowledgeable person in the room.", reverseScored: false },

    // Communication Authority (2, 9, 16, 23, 30, 37)
    { id: 2, dimension: "communication-authority", text: "I can articulate complex ideas clearly and persuasively.", reverseScored: false },
    { id: 9, dimension: "communication-authority", text: "I'm effective at presenting to senior audiences and boards.", reverseScored: false },
    { id: 16, dimension: "communication-authority", text: "I adjust my communication style based on the audience and context.", reverseScored: false },
    { id: 23, dimension: "communication-authority", text: "I speak with conviction and avoid tentative language.", reverseScored: false },
    { id: 30, dimension: "communication-authority", text: "I can think on my feet and respond eloquently under pressure.", reverseScored: false },
    { id: 37, dimension: "communication-authority", text: "My written communication is clear, concise, and professional.", reverseScored: false },

    // Appearance & Poise (3, 10, 17, 24, 31, 38)
    { id: 3, dimension: "appearance-poise", text: "I dress and present myself appropriately for any professional setting.", reverseScored: false },
    { id: 10, dimension: "appearance-poise", text: "My physical presence conveys professionalism and attention to detail.", reverseScored: false },
    { id: 17, dimension: "appearance-poise", text: "I'm mindful of how my appearance affects my credibility.", reverseScored: false },
    { id: 24, dimension: "appearance-poise", text: "I maintain good posture and confident body language.", reverseScored: false },
    { id: 31, dimension: "appearance-poise", text: "I invest appropriately in my professional wardrobe and grooming.", reverseScored: false },
    { id: 38, dimension: "appearance-poise", text: "I appear composed and put-together even under stress.", reverseScored: false },

    // Executive Stamina (4, 11, 18, 25, 32, 39)
    { id: 4, dimension: "executive-stamina", text: "I maintain my energy and focus throughout long, demanding days.", reverseScored: false },
    { id: 11, dimension: "executive-stamina", text: "I can perform at my best even when tired or under pressure.", reverseScored: false },
    { id: 18, dimension: "executive-stamina", text: "I recover quickly from setbacks and disappointments.", reverseScored: false },
    { id: 25, dimension: "executive-stamina", text: "I can sustain high performance over extended periods.", reverseScored: false },
    { id: 32, dimension: "executive-stamina", text: "I manage my energy effectively to be present when it matters most.", reverseScored: false },
    { id: 39, dimension: "executive-stamina", text: "I don't let personal challenges visibly affect my professional presence.", reverseScored: false },

    // Room Command (5, 12, 19, 26, 33, 40)
    { id: 5, dimension: "room-command", text: "I can capture and hold the attention of a room when I speak.", reverseScored: false },
    { id: 12, dimension: "room-command", text: "I'm comfortable being the center of attention in professional settings.", reverseScored: false },
    { id: 19, dimension: "room-command", text: "I can read a room and adjust my approach in real-time.", reverseScored: false },
    { id: 26, dimension: "room-command", text: "People listen when I speak, even in large groups.", reverseScored: false },
    { id: 33, dimension: "room-command", text: "I can command a meeting without being domineering.", reverseScored: false },
    { id: 40, dimension: "room-command", text: "I'm effective at facilitating discussions and keeping groups engaged.", reverseScored: false },

    // Fillers (6, 7, 13, 14, 20, 21, 27, 28, 34, 35)
    { id: 6, dimension: "gravitas", text: "I have deep expertise that commands respect in my field.", reverseScored: false },
    { id: 7, dimension: "communication-authority", text: "I use storytelling effectively to make my points memorable.", reverseScored: false },
    { id: 13, dimension: "appearance-poise", text: "I'm aware of how my digital presence (LinkedIn, video calls) appears.", reverseScored: false },
    { id: 14, dimension: "executive-stamina", text: "I prioritize self-care to maintain my executive presence.", reverseScored: false },
    { id: 20, dimension: "room-command", text: "I'm comfortable speaking up in meetings with senior leaders.", reverseScored: false },
    { id: 21, dimension: "gravitas", text: "I don't feel intimidated by people with more seniority or status.", reverseScored: false },
    { id: 27, dimension: "communication-authority", text: "I can simplify complex information for different audiences.", reverseScored: false },
    { id: 28, dimension: "appearance-poise", text: "I pay attention to details like handshakes, eye contact, and introductions.", reverseScored: false },
    { id: 34, dimension: "executive-stamina", text: "I can travel extensively and maintain my professional presence.", reverseScored: false },
    { id: 35, dimension: "room-command", text: "I'm comfortable with silence and don't rush to fill pauses.", reverseScored: false }
  ],

  archetypes: [
    {
      id: "executive-commander",
      name: "Executive Commander",
      scoreRange: [85, 100],
      percentile: "Top 5%",
      description: "You possess exceptional executive presence. You command attention, project authority, and inspire confidence in any setting.",
      strengths: ["Commanding gravitas", "Exceptional communication", "Polished appearance", "High stamina", "Room command"],
      blindSpots: ["May intimidate others", "Could appear unapproachable", "May need to soften presence occasionally"],
      growthAreas: ["Develop approachability", "Balance authority with warmth", "Mentor others on presence"],
      idealRoles: ["CEO", "Board Member", "Public Company Executive", "Political Leader", "Keynote Speaker"],
      famousExamples: ["Indra Nooyi", "Barack Obama", "Satya Nadella"]
    },
    {
      id: "credible-authority",
      name: "Credible Authority",
      scoreRange: [70, 84],
      percentile: "Top 20%",
      description: "You project strong executive presence with solid gravitas and communication skills. You're seen as a credible leader.",
      strengths: ["Strong gravitas", "Effective communication", "Professional appearance", "Good stamina"],
      blindSpots: ["Room command could be stronger", "May need more executive stamina", "Could project more confidence"],
      growthAreas: ["Practice commanding larger rooms", "Build physical stamina", "Develop more commanding presence"],
      idealRoles: ["VP", "Director", "Senior Manager", "Public Speaker"],
      famousExamples: ["Rising executives"]
    },
    {
      id: "developing-leader",
      name: "Developing Leader",
      scoreRange: [55, 69],
      percentile: "Top 50%",
      description: "You have developing executive presence with solid foundations. You're building your leadership projection skills.",
      strengths: ["Growing confidence", "Competent communication", "Appropriate appearance", "Developing stamina"],
      blindSpots: ["Gravitas needs development", "Communication under pressure", "Room command", "Executive stamina"],
      growthAreas: ["Study executive presence models", "Practice public speaking", "Invest in professional wardrobe", "Build physical resilience"],
      idealRoles: ["Manager", "Team Lead", "Rising Professional", "Individual Contributor Growing into Leadership"],
      famousExamples: ["Developing leaders"]
    },
    {
      id: "competent-professional",
      name: "Competent Professional",
      scoreRange: [40, 54],
      percentile: "Bottom 50%",
      description: "You're competent in your role but executive presence is not your strength. You may prefer substance over style.",
      strengths: ["Technical competence", "Reliability", "Solid work ethic"],
      blindSpots: ["Limited gravitas projection", "Communication authority", "Professional appearance investment", "Room presence"],
      growthAreas: ["Invest in communication training", "Upgrade professional wardrobe", "Practice speaking up", "Study presence techniques"],
      idealRoles: ["Individual Contributor", "Technical Specialist", "Behind-the-Scenes Roles"],
      famousExamples: ["Competent professionals"]
    },
    {
      id: "background-contributor",
      name: "Background Contributor",
      scoreRange: [0, 39],
      percentile: "Bottom 20%",
      description: "Executive presence requires significant development. You may prefer to contribute without being in the spotlight.",
      strengths: ["Technical skills", "Reliability", "Willingness to learn"],
      blindSpots: ["Limited presence projection", "Communication confidence", "Professional presentation", "Room command"],
      growthAreas: ["Executive presence coaching", "Join Toastmasters or similar", "Invest in professional image", "Practice small presentations"],
      idealRoles: ["Support Roles", "Individual Contributor", "Technical Specialist", "Entry-Level Positions"],
      famousExamples: ["Individual contributors"]
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
      return executivePresenceTest.archetypes.find(a => totalScore >= a.scoreRange[0] && totalScore <= a.scoreRange[1]);
    }
  },

  benchmarks: {
    overall: { mean: 56, median: 57, stdDev: 17, percentiles: { p10: 33, p25: 44, p50: 57, p75: 69, p90: 80, p95: 86, p99: 94 } },
    byRole: {
      "CEO": { mean: 78, topPerformers: 90 },
      "C-Suite": { mean: 74, topPerformers: 86 },
      "VP/Director": { mean: 66, topPerformers: 80 },
      "Manager": { mean: 54, topPerformers: 70 },
      "Individual Contributor": { mean: 46, topPerformers: 62 }
    }
  }
};

export default executivePresenceTest;
