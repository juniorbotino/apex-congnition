// CAREER AGILITY ASSESSMENT (CAG)
// Measures: Learning agility, change resilience, skill transferability, network leverage, opportunity recognition

export const careerAgilityTest = {
  id: "career-agility",
  name: "Career Agility",
  version: "2.1",
  reliability: 0.87,
  validityFramework: "Based on Learning Agility (Lombardo & Eichinger) + Career Adaptability (Savickas) + Future of Work Skills",
  
  dimensions: [
    {
      id: "learning-agility",
      name: "Learning Agility",
      description: "Speed and effectiveness of learning new skills and adapting knowledge",
      weight: 0.25,
      questions: [1, 8, 15, 22, 29, 36]
    },
    {
      id: "change-resilience",
      name: "Change Resilience",
      description: "Ability to thrive through transitions, setbacks, and uncertainty",
      weight: 0.20,
      questions: [2, 9, 16, 23, 30, 37]
    },
    {
      id: "skill-transferability",
      name: "Skill Transferability",
      description: "Capacity to apply existing skills to new contexts and domains",
      weight: 0.20,
      questions: [3, 10, 17, 24, 31, 38]
    },
    {
      id: "network-leverage",
      name: "Network Leverage",
      description: "Ability to build and utilize professional relationships for opportunities",
      weight: 0.20,
      questions: [4, 11, 18, 25, 32, 39]
    },
    {
      id: "opportunity-recognition",
      name: "Opportunity Recognition",
      description: "Skill in identifying and capitalizing on emerging possibilities",
      weight: 0.15,
      questions: [5, 12, 19, 26, 33, 40]
    }
  ],

  questions: [
    // Learning Agility (1, 8, 15, 22, 29, 36)
    { id: 1, dimension: "learning-agility", text: "I quickly master new skills and concepts in unfamiliar domains.", reverseScored: false },
    { id: 8, dimension: "learning-agility", text: "I actively seek out learning opportunities beyond my current role.", reverseScored: false },
    { id: 15, dimension: "learning-agility", text: "I can extract lessons from both successes and failures.", reverseScored: false },
    { id: 22, dimension: "learning-agility", text: "I enjoy being in situations where I don't know everything.", reverseScored: false },
    { id: 29, dimension: "learning-agility", text: "I apply knowledge from one field to solve problems in another.", reverseScored: false },
    { id: 36, dimension: "learning-agility", text: "I stay current with trends and developments in my industry.", reverseScored: false },

    // Change Resilience (2, 9, 16, 23, 30, 37)
    { id: 2, dimension: "change-resilience", text: "I thrive in environments of uncertainty and rapid change.", reverseScored: false },
    { id: 9, dimension: "change-resilience", text: "I bounce back quickly from career setbacks or disappointments.", reverseScored: false },
    { id: 16, dimension: "change-resilience", text: "I see organizational changes as opportunities rather than threats.", reverseScored: false },
    { id: 23, dimension: "change-resilience", text: "I can adapt my career plans when circumstances shift unexpectedly.", reverseScored: false },
    { id: 30, dimension: "change-resilience", text: "I maintain confidence even when facing unfamiliar challenges.", reverseScored: false },
    { id: 37, dimension: "change-resilience", text: "I don't get paralyzed by ambiguity or lack of clear direction.", reverseScored: false },

    // Skill Transferability (3, 10, 17, 24, 31, 38)
    { id: 3, dimension: "skill-transferability", text: "I can apply my core skills to completely different industries or roles.", reverseScored: false },
    { id: 10, dimension: "skill-transferability", text: "I identify transferable skills when considering career moves.", reverseScored: false },
    { id: 17, dimension: "skill-transferability", text: "I'm confident I could succeed in a role very different from my current one.", reverseScored: false },
    { id: 24, dimension: "skill-transferability", text: "I can articulate how my experience applies to new contexts.", reverseScored: false },
    { id: 31, dimension: "skill-transferability", text: "I build skills that have broad application, not just narrow specialization.", reverseScored: false },
    { id: 38, dimension: "skill-transferability", text: "I've successfully transitioned between different types of work.", reverseScored: false },

    // Network Leverage (4, 11, 18, 25, 32, 39)
    { id: 4, dimension: "network-leverage", text: "I maintain relationships that span multiple industries and functions.", reverseScored: false },
    { id: 11, dimension: "network-leverage", text: "I actively build my professional network, not just when I need something.", reverseScored: false },
    { id: 18, dimension: "network-leverage", text: "I can reach out to my network for opportunities, advice, or support.", reverseScored: false },
    { id: 25, dimension: "network-leverage", text: "My network regularly brings me valuable information and opportunities.", reverseScored: false },
    { id: 32, dimension: "network-leverage", text: "I help others in my network, creating reciprocal relationships.", reverseScored: false },
    { id: 39, dimension: "network-leverage", text: "I stay in touch with former colleagues and connections over time.", reverseScored: false },

    // Opportunity Recognition (5, 12, 19, 26, 33, 40)
    { id: 5, dimension: "opportunity-recognition", text: "I spot emerging opportunities before they become obvious to others.", reverseScored: false },
    { id: 12, dimension: "opportunity-recognition", text: "I regularly scan the environment for new career possibilities.", reverseScored: false },
    { id: 19, dimension: "opportunity-recognition", text: "I can evaluate whether an opportunity aligns with my long-term goals.", reverseScored: false },
    { id: 26, dimension: "opportunity-recognition", text: "I take calculated risks to pursue promising opportunities.", reverseScored: false },
    { id: 33, dimension: "opportunity-recognition", text: "I create opportunities rather than just waiting for them to appear.", reverseScored: false },
    { id: 40, dimension: "opportunity-recognition", text: "I know when to leave a situation to pursue something better.", reverseScored: false },

    // Fillers (6, 7, 13, 14, 20, 21, 27, 28, 34, 35)
    { id: 6, dimension: "learning-agility", text: "I learn more from experience than from formal training.", reverseScored: false },
    { id: 7, dimension: "change-resilience", text: "I view career pivots as normal and healthy.", reverseScored: false },
    { id: 13, dimension: "skill-transferability", text: "I can quickly get up to speed in new subject areas.", reverseScored: false },
    { id: 14, dimension: "network-leverage", text: "I attend industry events and conferences to expand my network.", reverseScored: false },
    { id: 20, dimension: "opportunity-recognition", text: "I follow industry trends to anticipate where opportunities will emerge.", reverseScored: false },
    { id: 21, dimension: "learning-agility", text: "I seek feedback specifically to accelerate my learning.", reverseScored: false },
    { id: 27, dimension: "change-resilience", text: "I can work effectively without clear job descriptions or structures.", reverseScored: false },
    { id: 28, dimension: "skill-transferability", text: "I've developed meta-skills that apply across domains.", reverseScored: false },
    { id: 34, dimension: "network-leverage", text: "I introduce people in my network who could benefit from knowing each other.", reverseScored: false },
    { id: 35, dimension: "opportunity-recognition", text: "I'm willing to take a step back to move forward in a better direction.", reverseScored: false }
  ],

  archetypes: [
    {
      id: "adaptability-champion",
      name: "Adaptability Champion",
      scoreRange: [85, 100],
      percentile: "Top 5%",
      description: "You are exceptionally agile in your career. You learn fast, adapt quickly, and consistently turn change into opportunity.",
      strengths: ["Rapid learning", "High change tolerance", "Strong network", "Opportunity radar", "Skill versatility"],
      blindSpots: ["May change too frequently", "Could develop deeper expertise", "May lack patience for stability"],
      growthAreas: ["Build deeper expertise in key areas", "Develop patience for long-term projects", "Balance breadth with depth"],
      idealRoles: ["Consultant", "Entrepreneur", "Product Manager", "Venture Capital", "Startup Executive"],
      famousExamples: ["Reid Hoffman", "Arianna Huffington", "Eric Ries"]
    },
    {
      id: "strategic-navigator",
      name: "Strategic Navigator",
      scoreRange: [70, 84],
      percentile: "Top 20%",
      description: "You navigate career transitions effectively with good learning ability and network leverage. You're future-ready.",
      strengths: ["Good learning agility", "Change resilience", "Network awareness", "Opportunity recognition"],
      blindSpots: ["Could network more proactively", "May need more skill diversity", "Could take more calculated risks"],
      growthAreas: ["Expand network intentionally", "Develop adjacent skills", "Practice opportunistic thinking"],
      idealRoles: ["Business Development", "Strategy", "Operations", "General Management"],
      famousExamples: ["Successful career pivoters"]
    },
    {
      id: "developing-adaptor",
      name: "Developing Adaptor",
      scoreRange: [55, 69],
      percentile: "Top 50%",
      description: "You have reasonable career agility with room for growth. You're aware of the need for adaptability.",
      strengths: ["Open to learning", "Some change tolerance", "Growing network", "Aware of opportunities"],
      blindSpots: ["Learning could be faster", "May resist significant change", "Network needs development"],
      growthAreas: ["Accelerate learning practices", "Build change resilience", "Expand professional network"],
      idealRoles: ["Professional Roles", "Management Track", "Specialist with Growth Potential"],
      famousExamples: ["Developing professionals"]
    },
    {
      id: "steady-specialist",
      name: "Steady Specialist",
      scoreRange: [40, 54],
      percentile: "Bottom 50%",
      description: "You prefer stability and deep expertise over frequent change. Agility is not your natural strength.",
      strengths: ["Deep expertise", "Reliability", "Consistency", "Specialized knowledge"],
      blindSpots: ["Limited adaptability", "May resist change", "Narrow network", "May miss opportunities"],
      growthAreas: ["Develop adjacent skills gradually", "Build network in current domain", "Practice small changes"],
      idealRoles: ["Specialist", "Technical Expert", "Academic", "Traditional Industries"],
      famousExamples: ["Deep specialists"]
    },
    {
      id: "static-performer",
      name: "Static Performer",
      scoreRange: [0, 39],
      percentile: "Bottom 20%",
      description: "You prefer highly structured, predictable career paths. Significant change is uncomfortable for you.",
      strengths: ["Reliability in stable environments", "Deep specialization", "Loyalty"],
      blindSpots: ["Low adaptability", "Limited network", "May struggle with industry disruption"],
      growthAreas: ["Start with small skill additions", "Build network gradually", "Develop comfort with ambiguity"],
      idealRoles: ["Government", "Large Corporate", "Tenured Positions", "Highly Structured Roles"],
      famousExamples: ["Stable career professionals"]
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
      return careerAgilityTest.archetypes.find(a => totalScore >= a.scoreRange[0] && totalScore <= a.scoreRange[1]);
    }
  },

  benchmarks: {
    overall: { mean: 58, median: 59, stdDev: 16, percentiles: { p10: 36, p25: 46, p50: 59, p75: 70, p90: 80, p95: 86, p99: 94 } },
    byRole: {
      "Consultant": { mean: 74, topPerformers: 86 },
      "Entrepreneur": { mean: 78, topPerformers: 90 },
      "Tech Professional": { mean: 68, topPerformers: 82 },
      "Corporate Manager": { mean: 60, topPerformers: 75 },
      "Traditional Professional": { mean: 50, topPerformers: 66 }
    }
  }
};

export default careerAgilityTest;
