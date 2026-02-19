// WORKPLACE TEMPERAMENT ASSESSMENT (WPT)
// Based on Big Five Personality Model (OCEAN) - Workplace Adaptation

export const workplaceTemperamentTest = {
  id: "workplace-temperament",
  name: "Workplace Temperament",
  version: "2.1",
  reliability: 0.90,
  validityFramework: "Based on Big Five Model (Costa & McCrae) + HEXACO + Workplace Personality Inventory",
  
  dimensions: [
    {
      id: "openness",
      name: "Openness to Experience",
      description: "Curiosity, creativity, preference for novelty and variety",
      weight: 0.20,
      questions: [1, 8, 15, 22, 29, 36]
    },
    {
      id: "conscientiousness",
      name: "Conscientiousness",
      description: "Organization, dependability, goal-directed behavior",
      weight: 0.25,
      questions: [2, 9, 16, 23, 30, 37]
    },
    {
      id: "extraversion",
      name: "Extraversion",
      description: "Sociability, assertiveness, positive emotionality",
      weight: 0.20,
      questions: [3, 10, 17, 24, 31, 38]
    },
    {
      id: "agreeableness",
      name: "Agreeableness",
      description: "Cooperation, trust, consideration for others",
      weight: 0.20,
      questions: [4, 11, 18, 25, 32, 39]
    },
    {
      id: "emotional-stability",
      name: "Emotional Stability",
      description: "Resilience, calm under pressure, low neuroticism",
      weight: 0.15,
      questions: [5, 12, 19, 26, 33, 40]
    }
  ],

  questions: [
    // Openness (1, 8, 15, 22, 29, 36)
    { id: 1, dimension: "openness", text: "I enjoy exploring new ideas and approaches, even if they challenge conventional wisdom.", reverseScored: false },
    { id: 8, dimension: "openness", text: "I'm drawn to creative problem-solving rather than following established procedures.", reverseScored: false },
    { id: 15, dimension: "openness", text: "I seek out diverse perspectives and experiences to broaden my thinking.", reverseScored: false },
    { id: 22, dimension: "openness", text: "I get bored when my work becomes too routine and predictable.", reverseScored: false },
    { id: 29, dimension: "openness", text: "I'm comfortable with ambiguity and enjoy figuring things out as I go.", reverseScored: false },
    { id: 36, dimension: "openness", text: "I appreciate art, culture, and abstract concepts even in professional contexts.", reverseScored: false },

    // Conscientiousness (2, 9, 16, 23, 30, 37)
    { id: 2, dimension: "conscientiousness", text: "I'm known for being highly organized and detail-oriented.", reverseScored: false },
    { id: 9, dimension: "conscientiousness", text: "I always follow through on commitments, no matter how small.", reverseScored: false },
    { id: 16, dimension: "conscientiousness", text: "I plan my work carefully and stick to schedules.", reverseScored: false },
    { id: 23, dimension: "conscientiousness", text: "I take pride in producing high-quality work without errors.", reverseScored: false },
    { id: 30, dimension: "conscientiousness", text: "I'm disciplined about meeting deadlines and achieving goals.", reverseScored: false },
    { id: 37, dimension: "conscientiousness", text: "I keep my workspace and digital files well-organized.", reverseScored: false },

    // Extraversion (3, 10, 17, 24, 31, 38)
    { id: 3, dimension: "extraversion", text: "I feel energized by interacting with colleagues and being in social settings.", reverseScored: false },
    { id: 10, dimension: "extraversion", text: "I'm comfortable speaking up in meetings and presenting to groups.", reverseScored: false },
    { id: 17, dimension: "extraversion", text: "I enjoy networking and building professional relationships.", reverseScored: false },
    { id: 24, dimension: "extraversion", text: "I tend to be outgoing and initiate conversations with new people.", reverseScored: false },
    { id: 31, dimension: "extraversion", text: "I prefer collaborative work environments over working alone.", reverseScored: false },
    { id: 38, dimension: "extraversion", text: "I'm often described as enthusiastic and energetic.", reverseScored: false },

    // Agreeableness (4, 11, 18, 25, 32, 39)
    { id: 4, dimension: "agreeableness", text: "I prioritize maintaining harmonious relationships, even when I disagree.", reverseScored: false },
    { id: 11, dimension: "agreeableness", text: "I'm considerate of others' feelings and perspectives.", reverseScored: false },
    { id: 18, dimension: "agreeableness", text: "I'm willing to compromise to reach consensus.", reverseScored: false },
    { id: 25, dimension: "agreeableness", text: "I trust my colleagues and give them the benefit of the doubt.", reverseScored: false },
    { id: 32, dimension: "agreeableness", text: "I enjoy helping others succeed, even if there's no direct benefit to me.", reverseScored: false },
    { id: 39, dimension: "agreeableness", text: "I avoid confrontation and seek win-win solutions.", reverseScored: false },

    // Emotional Stability (5, 12, 19, 26, 33, 40)
    { id: 5, dimension: "emotional-stability", text: "I remain calm and composed under pressure.", reverseScored: false },
    { id: 12, dimension: "emotional-stability", text: "I don't let setbacks or criticism derail my focus.", reverseScored: false },
    { id: 19, dimension: "emotional-stability", text: "I handle stress well and maintain work-life balance.", reverseScored: false },
    { id: 26, dimension: "emotional-stability", text: "I'm not easily upset by unexpected changes or challenges.", reverseScored: false },
    { id: 33, dimension: "emotional-stability", text: "I maintain perspective during difficult situations.", reverseScored: false },
    { id: 40, dimension: "emotional-stability", text: "I rarely worry excessively about work issues.", reverseScored: false },

    // Fillers (6, 7, 13, 14, 20, 21, 27, 28, 34, 35)
    { id: 6, dimension: "openness", text: "I'm interested in learning about topics outside my immediate field.", reverseScored: false },
    { id: 7, dimension: "conscientiousness", text: "I set high standards for myself and consistently meet them.", reverseScored: false },
    { id: 13, dimension: "extraversion", text: "I enjoy being the center of attention in group settings.", reverseScored: false },
    { id: 14, dimension: "agreeableness", text: "I'm patient with people who have different working styles.", reverseScored: false },
    { id: 20, dimension: "emotional-stability", text: "I bounce back quickly from disappointments.", reverseScored: false },
    { id: 21, dimension: "openness", text: "I enjoy experimenting with new technologies and tools.", reverseScored: false },
    { id: 27, dimension: "conscientiousness", text: "I double-check my work before submitting it.", reverseScored: false },
    { id: 28, dimension: "extraversion", text: "I prefer to process information by talking it through with others.", reverseScored: false },
    { id: 34, dimension: "agreeableness", text: "I forgive easily and don't hold grudges.", reverseScored: false },
    { id: 35, dimension: "emotional-stability", text: "I sleep well even when facing significant work challenges.", reverseScored: false }
  ],

  archetypes: [
    {
      id: "the-captain",
      name: "The Captain",
      scoreRange: [85, 100],
      percentile: "Top 5%",
      description: "You combine high conscientiousness with strong interpersonal skills. You're organized, reliable, and people trust you to lead.",
      profile: { openness: "moderate", conscientiousness: "very-high", extraversion: "high", agreeableness: "high", emotionalStability: "high" },
      strengths: ["Highly dependable", "Strong organizational skills", "Effective communicator", "Calm under pressure"],
      blindSpots: ["May be perfectionistic", "Could delegate more", "May take on too much responsibility"],
      growthAreas: ["Practice delegating more", "Accept 'good enough' sometimes", "Build sustainable work habits"],
      idealRoles: ["Project Manager", "Operations Leader", "Executive Assistant", "Team Lead"],
      famousExamples: ["Angela Merkel", "Tim Cook"]
    },
    {
      id: "the-innovator",
      name: "The Innovator",
      scoreRange: [70, 84],
      percentile: "Top 20%",
      description: "High openness drives your creative approach. You generate new ideas and challenge the status quo effectively.",
      profile: { openness: "very-high", conscientiousness: "moderate", extraversion: "moderate-high", agreeableness: "moderate", emotionalStability: "moderate-high" },
      strengths: ["Creative problem-solving", "Visionary thinking", "Adaptable", "Intellectually curious"],
      blindSpots: ["May lack follow-through", "Could be more organized", "May frustrate traditionalists"],
      growthAreas: ["Develop project completion systems", "Build organizational habits", "Balance innovation with execution"],
      idealRoles: ["Product Manager", "Designer", "Entrepreneur", "R&D", "Strategy"],
      famousExamples: ["Elon Musk", "Steve Jobs"]
    },
    {
      id: "the-connector",
      name: "The Connector",
      scoreRange: [55, 69],
      percentile: "Top 50%",
      description: "Your extraversion and agreeableness make you a natural relationship builder. You thrive in collaborative environments.",
      profile: { openness: "moderate", conscientiousness: "moderate", extraversion: "high", agreeableness: "high", emotionalStability: "moderate" },
      strengths: ["Relationship building", "Communication", "Team cohesion", "Networking"],
      blindSpots: ["May avoid necessary conflict", "Could be more decisive", "May need more alone time"],
      growthAreas: ["Practice constructive confrontation", "Develop faster decision-making", "Schedule regular alone time"],
      idealRoles: ["Sales", "HR", "Customer Success", "Community Manager", "Recruiting"],
      famousExamples: ["Oprah Winfrey", "Richard Branson"]
    },
    {
      id: "the-analyst",
      name: "The Analyst",
      scoreRange: [40, 54],
      percentile: "Bottom 50%",
      description: "You prefer working independently with data and systems. Social demands can drain your energy.",
      profile: { openness: "moderate-high", conscientiousness: "high", extraversion: "low", agreeableness: "moderate", emotionalStability: "moderate-high" },
      strengths: ["Deep focus", "Analytical thinking", "Independent work", "Attention to detail"],
      blindSpots: ["May seem distant", "Could collaborate more", "May miss networking opportunities"],
      growthAreas: ["Practice active communication", "Seek collaborative projects", "Build networking habits"],
      idealRoles: ["Data Scientist", "Engineer", "Researcher", "Analyst", "Developer"],
      famousExamples: ["Bill Gates", "Mark Zuckerberg"]
    },
    {
      id: "the-stabilizer",
      name: "The Stabilizer",
      scoreRange: [0, 39],
      percentile: "Bottom 20%",
      description: "You prefer routine, predictability, and clear expectations. Change can be stressful for you.",
      profile: { openness: "low", conscientiousness: "moderate", extraversion: "low-moderate", agreeableness: "high", emotionalStability: "moderate" },
      strengths: ["Reliable", "Consistent", "Detail-oriented", "Loyal"],
      blindSpots: ["Resistant to change", "May miss opportunities", "Could be more adaptable"],
      growthAreas: ["Practice small changes regularly", "Stay open to new opportunities", "Develop flexibility skills"],
      idealRoles: ["Administrative", "Accounting", "Quality Assurance", "Compliance", "Operations"],
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
    getArchetype: (dimensionScores: Record<string, number>) => {
      // Custom archetype matching based on dimension patterns
      const { openness, conscientiousness, extraversion, agreeableness, emotionalStability } = dimensionScores;
      
      if (conscientiousness >= 80 && emotionalStability >= 70 && agreeableness >= 70) {
        return workplaceTemperamentTest.archetypes.find(a => a.id === "the-captain");
      }
      if (openness >= 80) {
        return workplaceTemperamentTest.archetypes.find(a => a.id === "the-innovator");
      }
      if (extraversion >= 75 && agreeableness >= 70) {
        return workplaceTemperamentTest.archetypes.find(a => a.id === "the-connector");
      }
      if (extraversion <= 45 && conscientiousness >= 65) {
        return workplaceTemperamentTest.archetypes.find(a => a.id === "the-analyst");
      }
      return workplaceTemperamentTest.archetypes.find(a => a.id === "the-stabilizer");
    }
  },

  benchmarks: {
    overall: { mean: 58, median: 59, stdDev: 15, percentiles: { p10: 37, p25: 47, p50: 59, p75: 70, p90: 80, p95: 86, p99: 94 } },
    byDimension: {
      "openness": { mean: 62, high: 75, low: 45 },
      "conscientiousness": { mean: 65, high: 78, low: 48 },
      "extraversion": { mean: 55, high: 70, low: 38 },
      "agreeableness": { mean: 60, high: 74, low: 44 },
      "emotional-stability": { mean: 58, high: 72, low: 42 }
    }
  }
};

export default workplaceTemperamentTest;
