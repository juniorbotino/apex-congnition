// EMOTIONAL INTELLIGENCE ASSESSMENT (EQi)
// Based on Goleman's EQ Framework + Trait Emotional Intelligence (Petrides)

export const emotionalIntelligenceTest = {
  id: "emotional-intelligence",
  name: "Emotional Intelligence",
  version: "2.1",
  reliability: 0.92,
  validityFramework: "Based on Goleman's EQ Model + MSCEIT + Trait Emotional Intelligence Questionnaire",
  
  dimensions: [
    {
      id: "self-awareness",
      name: "Self-Awareness",
      description: "Recognition and understanding of one's own emotions and their impact",
      weight: 0.25,
      questions: [1, 8, 15, 22, 29, 36]
    },
    {
      id: "self-regulation",
      name: "Self-Regulation",
      description: "Ability to manage disruptive emotions and impulses effectively",
      weight: 0.20,
      questions: [2, 9, 16, 23, 30, 37]
    },
    {
      id: "social-awareness",
      name: "Social Awareness",
      description: "Capacity to read and understand others' emotions and perspectives",
      weight: 0.20,
      questions: [3, 10, 17, 24, 31, 38]
    },
    {
      id: "relationship-management",
      name: "Relationship Management",
      description: "Skill in building and maintaining healthy interpersonal connections",
      weight: 0.20,
      questions: [4, 11, 18, 25, 32, 39]
    },
    {
      id: "empathy",
      name: "Empathy",
      description: "Ability to understand and share the feelings of others",
      weight: 0.15,
      questions: [5, 12, 19, 26, 33, 40]
    }
  ],

  questions: [
    // Self-Awareness (1, 8, 15, 22, 29, 36)
    { id: 1, dimension: "self-awareness", text: "I can accurately identify my emotions as they occur.", reverseScored: false },
    { id: 8, dimension: "self-awareness", text: "I understand how my mood affects my decision-making.", reverseScored: false },
    { id: 15, dimension: "self-awareness", text: "I recognize the physical signs of stress or anxiety in my body.", reverseScored: false },
    { id: 22, dimension: "self-awareness", text: "I know my emotional triggers and can anticipate my reactions.", reverseScored: false },
    { id: 29, dimension: "self-awareness", text: "I'm honest with myself about my strengths and weaknesses.", reverseScored: false },
    { id: 36, dimension: "self-awareness", text: "I understand how my behavior impacts others emotionally.", reverseScored: false },

    // Self-Regulation (2, 9, 16, 23, 30, 37)
    { id: 2, dimension: "self-regulation", text: "I can calm myself down when I'm feeling angry or upset.", reverseScored: false },
    { id: 9, dimension: "self-regulation", text: "I think before reacting emotionally in difficult situations.", reverseScored: false },
    { id: 16, dimension: "self-regulation", text: "I don't let negative emotions derail my focus for long.", reverseScored: false },
    { id: 23, dimension: "self-regulation", text: "I can maintain composure even when provoked.", reverseScored: false },
    { id: 30, dimension: "self-regulation", text: "I have healthy ways of managing stress and pressure.", reverseScored: false },
    { id: 37, dimension: "self-regulation", text: "I don't let temporary emotions drive important decisions.", reverseScored: false },

    // Social Awareness (3, 10, 17, 24, 31, 38)
    { id: 3, dimension: "social-awareness", text: "I can read the emotional tone of a room quickly.", reverseScored: false },
    { id: 10, dimension: "social-awareness", text: "I notice when someone's emotional state changes, even if they don't say anything.", reverseScored: false },
    { id: 17, dimension: "social-awareness", text: "I understand the unspoken dynamics in group settings.", reverseScored: false },
    { id: 24, dimension: "social-awareness", text: "I pick up on subtle cues about how others are feeling.", reverseScored: false },
    { id: 31, dimension: "social-awareness", text: "I'm aware of the power dynamics and relationships in my organization.", reverseScored: false },
    { id: 38, dimension: "social-awareness", text: "I can tell when someone is holding back their true feelings.", reverseScored: false },

    // Relationship Management (4, 11, 18, 25, 32, 39)
    { id: 4, dimension: "relationship-management", text: "I'm skilled at navigating difficult conversations and conflicts.", reverseScored: false },
    { id: 11, dimension: "relationship-management", text: "I can build rapport quickly with people from different backgrounds.", reverseScored: false },
    { id: 18, dimension: "relationship-management", text: "I maintain positive relationships even with people I disagree with.", reverseScored: false },
    { id: 25, dimension: "relationship-management", text: "I know how to motivate and inspire different types of people.", reverseScored: false },
    { id: 32, dimension: "relationship-management", text: "I'm effective at influencing others without being manipulative.", reverseScored: false },
    { id: 39, dimension: "relationship-management", text: "I invest time in maintaining important professional relationships.", reverseScored: false },

    // Empathy (5, 12, 19, 26, 33, 40)
    { id: 5, dimension: "empathy", text: "I can easily put myself in someone else's shoes.", reverseScored: false },
    { id: 12, dimension: "empathy", text: "I genuinely care about the wellbeing of my colleagues.", reverseScored: false },
    { id: 19, dimension: "empathy", text: "I listen attentively and make people feel heard.", reverseScored: false },
    { id: 26, dimension: "empathy", text: "I validate others' feelings even when I don't share their perspective.", reverseScored: false },
    { id: 33, dimension: "empathy", text: "I adjust my communication style based on others' emotional needs.", reverseScored: false },
    { id: 40, dimension: "empathy", text: "I can sense when someone needs support, even if they don't ask.", reverseScored: false },

    // Fillers (6, 7, 13, 14, 20, 21, 27, 28, 34, 35)
    { id: 6, dimension: "self-awareness", text: "I reflect on my emotional responses to understand them better.", reverseScored: false },
    { id: 7, dimension: "self-regulation", text: "I can delay gratification to achieve longer-term goals.", reverseScored: false },
    { id: 13, dimension: "social-awareness", text: "I pay attention to body language and non-verbal communication.", reverseScored: false },
    { id: 14, dimension: "relationship-management", text: "I'm good at giving feedback that people can hear and act on.", reverseScored: false },
    { id: 20, dimension: "empathy", text: "I feel compassion when colleagues are going through difficult times.", reverseScored: false },
    { id: 21, dimension: "self-awareness", text: "I seek feedback about how my behavior affects others.", reverseScored: false },
    { id: 27, dimension: "self-regulation", text: "I don't let criticism destroy my confidence.", reverseScored: false },
    { id: 28, dimension: "social-awareness", text: "I understand the cultural context of emotional expression.", reverseScored: false },
    { id: 34, dimension: "relationship-management", text: "I can repair relationships after conflicts or misunderstandings.", reverseScored: false },
    { id: 35, dimension: "empathy", text: "I consider how my decisions will affect others emotionally.", reverseScored: false }
  ],

  archetypes: [
    {
      id: "emotional-master",
      name: "Emotional Master",
      scoreRange: [85, 100],
      percentile: "Top 5%",
      description: "You possess exceptional emotional intelligence across all dimensions. You navigate complex interpersonal dynamics with remarkable skill.",
      strengths: ["Deep self-awareness", "Excellent emotional regulation", "Perceptive social awareness", "Strong relationship skills", "Genuine empathy"],
      blindSpots: ["May absorb others' emotions too much", "Could set stronger boundaries", "May be drained by emotional labor"],
      growthAreas: ["Develop emotional boundaries", "Practice self-care", "Leverage EQ for strategic influence"],
      idealRoles: ["Executive Coach", "HR Leadership", "Therapist", "Diplomat", "CEO"],
      famousExamples: ["Oprah Winfrey", "Dalai Lama", "Brené Brown"]
    },
    {
      id: "relationship-architect",
      name: "Relationship Architect",
      scoreRange: [70, 84],
      percentile: "Top 20%",
      description: "You excel at building and maintaining relationships. Your social awareness and empathy make you a natural connector.",
      strengths: ["Strong interpersonal skills", "Good at reading people", "Effective communicator", "Conflict resolution"],
      blindSpots: ["Self-awareness could be deeper", "May avoid own emotions", "Could regulate reactions better"],
      growthAreas: ["Deepen self-reflection practice", "Work on emotional triggers", "Develop mindfulness"],
      idealRoles: ["Sales Leadership", "Account Management", "HR Business Partner", "Team Lead"],
      famousExamples: ["Howard Schultz", "Arianna Huffington"]
    },
    {
      id: "developing-practitioner",
      name: "Developing Practitioner",
      scoreRange: [55, 69],
      percentile: "Top 50%",
      description: "You have solid emotional intelligence foundations with clear growth opportunities. You're aware of EQ's importance and working to develop it.",
      strengths: ["Growing self-awareness", "Developing regulation skills", "Caring about relationships", "Open to feedback"],
      blindSpots: ["Inconsistent emotional awareness", "Regulation under pressure", "Reading complex social situations"],
      growthAreas: ["Practice mindfulness", "Seek EQ coaching", "Study emotional intelligence frameworks"],
      idealRoles: ["Manager", "Professional Services", "Client-Facing Roles", "Collaborative Environments"],
      famousExamples: ["Developing professionals"]
    },
    {
      id: "analytical-observer",
      name: "Analytical Observer",
      scoreRange: [40, 54],
      percentile: "Bottom 50%",
      description: "You tend to rely more on logic than emotional intelligence. Interpersonal dynamics may feel less natural than analytical work.",
      strengths: ["Logical thinking", "Objective analysis", "Problem-solving", "Intellectual focus"],
      blindSpots: ["Limited emotional self-awareness", "May miss social cues", "Could be more empathetic", "Relationship building"],
      growthAreas: ["Practice naming emotions", "Study body language", "Ask for feedback on impact", "Develop active listening"],
      idealRoles: ["Engineering", "Finance", "Data Science", "Research", "Technical Roles"],
      famousExamples: ["Technical experts"]
    },
    {
      id: "reactive-responder",
      name: "Reactive Responder",
      scoreRange: [0, 39],
      percentile: "Bottom 20%",
      description: "Emotional intelligence is an area requiring significant development. You may struggle with self-awareness and interpersonal effectiveness.",
      strengths: ["Technical competence", "Task focus", "Reliability in structured contexts"],
      blindSpots: ["Limited self-awareness", "Emotional reactivity", "Difficulty reading others", "Relationship challenges"],
      growthAreas: ["EQ training program", "Executive coaching", "Therapy if needed", "Start with self-awareness practices"],
      idealRoles: ["Individual Contributor", "Structured Environments", "Technical Specialists"],
      famousExamples: ["Individual contributors developing EQ"]
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
      return emotionalIntelligenceTest.archetypes.find(a => totalScore >= a.scoreRange[0] && totalScore <= a.scoreRange[1]);
    }
  },

  benchmarks: {
    overall: { mean: 60, median: 61, stdDev: 17, percentiles: { p10: 37, p25: 48, p50: 61, p75: 73, p90: 83, p95: 89, p99: 96 } },
    byRole: {
      "CEO": { mean: 76, topPerformers: 88 },
      "HR Leadership": { mean: 78, topPerformers: 90 },
      "Sales": { mean: 68, topPerformers: 82 },
      "Engineering": { mean: 52, topPerformers: 70 },
      "Finance": { mean: 55, topPerformers: 72 }
    }
  }
};

export default emotionalIntelligenceTest;
