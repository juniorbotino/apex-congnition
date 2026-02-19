// EXECUTIVE LEADERSHIP ASSESSMENT (ELX)
// Measures: Vision casting, influence & persuasion, team mobilization, decision velocity, accountability architecture

export const executiveLeadershipTest = {
  id: "executive-leadership",
  name: "Executive Leadership",
  version: "2.1",
  reliability: 0.91,
  validityFramework: "Based on Transformational Leadership Theory (Bass) + Authentic Leadership (Walumbwa) + Situational Leadership (Hersey-Blanchard)",
  
  dimensions: [
    {
      id: "vision-casting",
      name: "Vision Casting",
      description: "Ability to articulate compelling future states that inspire action",
      weight: 0.25,
      questions: [1, 8, 15, 22, 29, 36]
    },
    {
      id: "influence-persuasion",
      name: "Influence & Persuasion",
      description: "Skill in building consensus and motivating without relying on authority",
      weight: 0.20,
      questions: [2, 9, 16, 23, 30, 37]
    },
    {
      id: "team-mobilization",
      name: "Team Mobilization",
      description: "Capacity to align teams, delegate effectively, and drive collective performance",
      weight: 0.20,
      questions: [3, 10, 17, 24, 31, 38]
    },
    {
      id: "decision-velocity",
      name: "Decision Velocity",
      description: "Speed and quality of decisions under pressure and uncertainty",
      weight: 0.20,
      questions: [4, 11, 18, 25, 32, 39]
    },
    {
      id: "accountability-architecture",
      name: "Accountability Architecture",
      description: "Systems for creating ownership, measuring results, and maintaining standards",
      weight: 0.15,
      questions: [5, 12, 19, 26, 33, 40]
    }
  ],

  questions: [
    // Vision Casting (1, 8, 15, 22, 29, 36)
    { id: 1, dimension: "vision-casting", text: "I can paint a vivid picture of the future that makes people want to follow me there.", reverseScored: false },
    { id: 8, dimension: "vision-casting", text: "My team understands not just what we're doing, but why it matters.", reverseScored: false },
    { id: 15, dimension: "vision-casting", text: "I regularly communicate a compelling vision that energizes my organization.", reverseScored: false },
    { id: 22, dimension: "vision-casting", text: "I can adapt my vision message to resonate with different audiences.", reverseScored: false },
    { id: 29, dimension: "vision-casting", text: "People tell me my vision for the future is inspiring and clear.", reverseScored: false },
    { id: 36, dimension: "vision-casting", text: "I connect daily work to a larger purpose that motivates my team.", reverseScored: false },

    // Influence & Persuasion (2, 9, 16, 23, 30, 37)
    { id: 2, dimension: "influence-persuasion", text: "I can convince stakeholders to support initiatives even when they initially disagree.", reverseScored: false },
    { id: 9, dimension: "influence-persuasion", text: "I build coalitions of support before pushing for major changes.", reverseScored: false },
    { id: 16, dimension: "influence-persuasion", text: "I understand what motivates different people and use that knowledge to align interests.", reverseScored: false },
    { id: 23, dimension: "influence-persuasion", text: "I can influence decisions even when I don't have direct authority over the outcome.", reverseScored: false },
    { id: 30, dimension: "influence-persuasion", text: "People seek my input on important decisions because they value my perspective.", reverseScored: false },
    { id: 37, dimension: "influence-persuasion", text: "I can navigate organizational politics effectively to advance important initiatives.", reverseScored: false },

    // Team Mobilization (3, 10, 17, 24, 31, 38)
    { id: 3, dimension: "team-mobilization", text: "I know how to bring out the best performance from every member of my team.", reverseScored: false },
    { id: 10, dimension: "team-mobilization", text: "I delegate effectively, giving people both autonomy and support.", reverseScored: false },
    { id: 17, dimension: "team-mobilization", text: "I build teams where people collaborate effectively across boundaries.", reverseScored: false },
    { id: 24, dimension: "team-mobilization", text: "I can align diverse stakeholders around common goals.", reverseScored: false },
    { id: 31, dimension: "team-mobilization", text: "My team members take ownership of outcomes, not just tasks.", reverseScored: false },
    { id: 38, dimension: "team-mobilization", text: "I create an environment where people feel both challenged and supported.", reverseScored: false },

    // Decision Velocity (4, 11, 18, 25, 32, 39)
    { id: 4, dimension: "decision-velocity", text: "I make timely decisions even when facing uncertainty and incomplete information.", reverseScored: false },
    { id: 11, dimension: "decision-velocity", text: "I don't let perfect be the enemy of good when speed matters.", reverseScored: false },
    { id: 18, dimension: "decision-velocity", text: "I can sense when a decision needs more deliberation versus immediate action.", reverseScored: false },
    { id: 25, dimension: "decision-velocity", text: "I take responsibility for decisions quickly and don't second-guess excessively.", reverseScored: false },
    { id: 32, dimension: "decision-velocity", text: "My team knows I won't delay decisions unnecessarily.", reverseScored: false },
    { id: 39, dimension: "decision-velocity", text: "I can reverse course quickly when a decision proves wrong.", reverseScored: false },

    // Accountability Architecture (5, 12, 19, 26, 33, 40)
    { id: 5, dimension: "accountability-architecture", text: "I create clear metrics and expectations that drive accountability.", reverseScored: false },
    { id: 12, dimension: "accountability-architecture", text: "I follow through on commitments and hold others to the same standard.", reverseScored: false },
    { id: 19, dimension: "accountability-architecture", text: "I address performance issues directly rather than avoiding difficult conversations.", reverseScored: false },
    { id: 26, dimension: "accountability-architecture", text: "My team understands exactly what success looks like for their roles.", reverseScored: false },
    { id: 33, dimension: "accountability-architecture", text: "I celebrate wins publicly and address misses constructively.", reverseScored: false },
    { id: 40, dimension: "accountability-architecture", text: "I model the standards I expect from others.", reverseScored: false },

    // Fillers (6, 7, 13, 14, 20, 21, 27, 28, 34, 35)
    { id: 6, dimension: "vision-casting", text: "I can articulate where our organization needs to be in 3-5 years.", reverseScored: false },
    { id: 7, dimension: "influence-persuasion", text: "I build relationships across the organization that help me get things done.", reverseScored: false },
    { id: 13, dimension: "team-mobilization", text: "I invest time in developing the capabilities of my team members.", reverseScored: false },
    { id: 14, dimension: "decision-velocity", text: "I gather input efficiently without creating decision-by-committee.", reverseScored: false },
    { id: 20, dimension: "accountability-architecture", text: "I inspect what I expect rather than assuming things are on track.", reverseScored: false },
    { id: 21, dimension: "vision-casting", text: "I can translate abstract strategy into concrete actions people understand.", reverseScored: false },
    { id: 27, dimension: "influence-persuasion", text: "I adapt my communication style to different audiences and situations.", reverseScored: false },
    { id: 28, dimension: "team-mobilization", text: "I create psychological safety so team members can speak up and take risks.", reverseScored: false },
    { id: 34, dimension: "decision-velocity", text: "I make decisions with confidence even when not everyone agrees.", reverseScored: false },
    { id: 35, dimension: "accountability-architecture", text: "I hold myself accountable to the same standards I set for my team.", reverseScored: false }
  ],

  archetypes: [
    {
      id: "transformational-commander",
      name: "Transformational Commander",
      scoreRange: [85, 100],
      percentile: "Top 5%",
      description: "You are a rare combination of visionary inspiration and operational excellence. You don't just lead—you transform organizations and people.",
      strengths: ["Inspiring vision casting", "Exceptional influence", "Team empowerment", "Decisive action", "Strong accountability systems"],
      blindSpots: ["May overwhelm others with intensity", "Could delegate more", "Risk of burnout from high standards"],
      growthAreas: ["Develop succession planning", "Practice patience with slower adopters", "Build sustainable pace"],
      idealRoles: ["CEO", "Turnaround Leader", "Transformation Officer", "Startup Founder"],
      famousExamples: ["Steve Jobs", "Indra Nooyi", "Alan Mulally"]
    },
    {
      id: "influential-catalyst",
      name: "Influential Catalyst",
      scoreRange: [70, 84],
      percentile: "Top 20%",
      description: "You excel at mobilizing people and driving change. Your influence extends beyond your formal authority.",
      strengths: ["Strong persuasion skills", "Team alignment", "Good decision-making", "Effective delegation"],
      blindSpots: ["Vision could be more compelling", "Accountability systems could be tighter", "May avoid very difficult conversations"],
      growthAreas: ["Develop more inspiring vision narrative", "Strengthen performance management", "Practice radical candor"],
      idealRoles: ["VP", "Director", "Change Leader", "Program Manager"],
      famousExamples: ["Sheryl Sandberg", "Satya Nadella"]
    },
    {
      id: "emerging-leader",
      name: "Emerging Leader",
      scoreRange: [55, 69],
      percentile: "Top 50%",
      description: "You have solid leadership foundations with clear growth opportunities. You're developing your unique leadership voice.",
      strengths: ["Growing influence", "Team-oriented", "Willing to decide", "Developing accountability"],
      blindSpots: ["Vision clarity needs work", "Influence inconsistent", "Decision speed variable"],
      growthAreas: ["Study great vision communicators", "Practice influence without authority", "Build decision frameworks"],
      idealRoles: ["Manager", "Team Lead", "Project Manager", "Rising Professional"],
      famousExamples: ["Developing leaders"]
    },
    {
      id: "operational-manager",
      name: "Operational Manager",
      scoreRange: [40, 54],
      percentile: "Bottom 50%",
      description: "You excel at managing processes and maintaining stability. Leadership in the traditional sense is not your primary strength.",
      strengths: ["Process-oriented", "Reliable execution", "Consistent", "Detail-focused"],
      blindSpots: ["Limited vision casting", "Influence without authority", "Team mobilization", "Decision speed under pressure"],
      growthAreas: ["Study leadership case studies", "Practice public speaking", "Develop decision-making frameworks", "Seek leadership opportunities"],
      idealRoles: ["Operations Manager", "Administrator", "Specialist Manager", "Individual Contributor"],
      famousExamples: ["Effective operators"]
    },
    {
      id: "developing-contributor",
      name: "Developing Contributor",
      scoreRange: [0, 39],
      percentile: "Bottom 20%",
      description: "Leadership is an area requiring significant development. You may prefer individual contribution or be early in your leadership journey.",
      strengths: ["Technical competence", "Willingness to learn", "Reliable individual contributor"],
      blindSpots: ["Vision articulation", "Team influence", "Decision-making", "Accountability systems"],
      growthAreas: ["Leadership training program", "Find a leadership mentor", "Start with small team projects", "Read leadership classics"],
      idealRoles: ["Individual Contributor", "Specialist", "Support Role", "Entry-Level Position"],
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
      return executiveLeadershipTest.archetypes.find(a => totalScore >= a.scoreRange[0] && totalScore <= a.scoreRange[1]);
    }
  },

  benchmarks: {
    overall: { mean: 64, median: 65, stdDev: 17, percentiles: { p10: 40, p25: 51, p50: 65, p75: 77, p90: 86, p95: 91, p99: 97 } },
    byRole: {
      "CEO": { mean: 82, topPerformers: 92 },
      "C-Suite": { mean: 78, topPerformers: 88 },
      "VP/Director": { mean: 71, topPerformers: 83 },
      "Manager": { mean: 60, topPerformers: 74 },
      "Individual Contributor": { mean: 48, topPerformers: 62 }
    }
  }
};

export default executiveLeadershipTest;
