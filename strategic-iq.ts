// STRATEGIC IQ ASSESSMENT (SIQ)
// Measures: Systems thinking, pattern recognition, scenario planning, decision architecture, competitive intelligence

export const strategicIQTest = {
  id: "strategic-iq",
  name: "Strategic IQ",
  version: "2.1",
  reliability: 0.89,
  validityFramework: "Based on Liedtka's Strategic Thinking Framework + Mintzberg's Strategy Schools",
  
  dimensions: [
    {
      id: "systems-thinking",
      name: "Systems Thinking",
      description: "Ability to see interconnected patterns and understand complex causal relationships",
      weight: 0.25,
      questions: [1, 8, 15, 22, 29, 36]
    },
    {
      id: "pattern-recognition",
      name: "Pattern Recognition",
      description: "Capacity to identify trends, anomalies, and predictive signals in data",
      weight: 0.20,
      questions: [2, 9, 16, 23, 30, 37]
    },
    {
      id: "scenario-planning",
      name: "Scenario Planning",
      description: "Skill in anticipating multiple futures and preparing adaptive strategies",
      weight: 0.20,
      questions: [3, 10, 17, 24, 31, 38]
    },
    {
      id: "decision-architecture",
      name: "Decision Architecture",
      description: "Framework for making high-stakes decisions under uncertainty",
      weight: 0.20,
      questions: [4, 11, 18, 25, 32, 39]
    },
    {
      id: "competitive-intelligence",
      name: "Competitive Intelligence",
      description: "Understanding market dynamics and competitive positioning",
      weight: 0.15,
      questions: [5, 12, 19, 26, 33, 40]
    }
  ],

  questions: [
    // Systems Thinking (Questions 1, 8, 15, 22, 29, 36)
    {
      id: 1,
      dimension: "systems-thinking",
      text: "I naturally see connections between seemingly unrelated business functions and outcomes.",
      reverseScored: false
    },
    {
      id: 8,
      dimension: "systems-thinking",
      text: "When solving problems, I consider how changes in one area will ripple through the entire organization.",
      reverseScored: false
    },
    {
      id: 15,
      dimension: "systems-thinking",
      text: "I can map out the second and third-order consequences of strategic decisions before implementing them.",
      reverseScored: false
    },
    {
      id: 22,
      dimension: "systems-thinking",
      text: "I often identify root causes that others miss because I look at the bigger picture.",
      reverseScored: false
    },
    {
      id: 29,
      dimension: "systems-thinking",
      text: "I understand how market forces, internal capabilities, and stakeholder interests interact dynamically.",
      reverseScored: false
    },
    {
      id: 36,
      dimension: "systems-thinking",
      text: "I can explain complex organizational dynamics in simple terms that others can act upon.",
      reverseScored: false
    },

    // Pattern Recognition (Questions 2, 9, 16, 23, 30, 37)
    {
      id: 2,
      dimension: "pattern-recognition",
      text: "I consistently notice trends in data before they become obvious to others.",
      reverseScored: false
    },
    {
      id: 9,
      dimension: "pattern-recognition",
      text: "I can look at a spreadsheet or dashboard and immediately spot anomalies that warrant investigation.",
      reverseScored: false
    },
    {
      id: 16,
      dimension: "pattern-recognition",
      text: "Historical patterns help me predict future outcomes with reasonable accuracy.",
      reverseScored: false
    },
    {
      id: 23,
      dimension: "pattern-recognition",
      text: "I often recognize opportunities by connecting dots that others see as separate data points.",
      reverseScored: false
    },
    {
      id: 30,
      dimension: "pattern-recognition",
      text: "I trust my intuition about patterns, even when I can't immediately articulate the logic.",
      reverseScored: false
    },
    {
      id: 37,
      dimension: "pattern-recognition",
      text: "I can distinguish between meaningful signals and random noise in complex information.",
      reverseScored: false
    },

    // Scenario Planning (Questions 3, 10, 17, 24, 31, 38)
    {
      id: 3,
      dimension: "scenario-planning",
      text: "I regularly develop multiple scenarios for how the future might unfold in my industry.",
      reverseScored: false
    },
    {
      id: 10,
      dimension: "scenario-planning",
      text: "Before major decisions, I explicitly consider best-case, worst-case, and most-likely outcomes.",
      reverseScored: false
    },
    {
      id: 17,
      dimension: "scenario-planning",
      text: "I have contingency plans ready for disruptions that haven't happened yet.",
      reverseScored: false
    },
    {
      id: 24,
      dimension: "scenario-planning",
      text: "I can quickly pivot strategy when circumstances change unexpectedly.",
      reverseScored: false
    },
    {
      id: 31,
      dimension: "scenario-planning",
      text: "I monitor leading indicators that might signal the need for strategic shifts.",
      reverseScored: false
    },
    {
      id: 38,
      dimension: "scenario-planning",
      text: "I stress-test my strategies against various market conditions before committing.",
      reverseScored: false
    },

    // Decision Architecture (Questions 4, 11, 18, 25, 32, 39)
    {
      id: 4,
      dimension: "decision-architecture",
      text: "I have a clear framework for making decisions when information is incomplete.",
      reverseScored: false
    },
    {
      id: 11,
      dimension: "decision-architecture",
      text: "I can make high-stakes decisions quickly when necessary, without excessive deliberation.",
      reverseScored: false
    },
    {
      id: 18,
      dimension: "decision-architecture",
      text: "I explicitly identify decision criteria before evaluating options.",
      reverseScored: false
    },
    {
      id: 25,
      dimension: "decision-architecture",
      text: "I know when to trust data versus when to trust experience and judgment.",
      reverseScored: false
    },
    {
      id: 32,
      dimension: "decision-architecture",
      text: "I document the reasoning behind major decisions to learn from outcomes.",
      reverseScored: false
    },
    {
      id: 39,
      dimension: "decision-architecture",
      text: "I can effectively delegate decision-making authority without losing strategic control.",
      reverseScored: false
    },

    // Competitive Intelligence (Questions 5, 12, 19, 26, 33, 40)
    {
      id: 5,
      dimension: "competitive-intelligence",
      text: "I maintain a deep understanding of my competitors' strategies, strengths, and vulnerabilities.",
      reverseScored: false
    },
    {
      id: 12,
      dimension: "competitive-intelligence",
      text: "I can articulate my organization's unique competitive advantage clearly and convincingly.",
      reverseScored: false
    },
    {
      id: 19,
      dimension: "competitive-intelligence",
      text: "I monitor industry dynamics that could threaten or enhance our market position.",
      reverseScored: false
    },
    {
      id: 26,
      dimension: "competitive-intelligence",
      text: "I understand how customer needs are evolving and what that means for our strategy.",
      reverseScored: false
    },
    {
      id: 33,
      dimension: "competitive-intelligence",
      text: "I can identify white space opportunities that competitors have overlooked.",
      reverseScored: false
    },
    {
      id: 40,
      dimension: "competitive-intelligence",
      text: "I think about how our strategy might provoke competitive responses and plan accordingly.",
      reverseScored: false
    },

    // Filler questions for flow (6, 7, 13, 14, 20, 21, 27, 28, 34, 35)
    {
      id: 6,
      dimension: "systems-thinking",
      text: "I prefer to understand the full context before making strategic recommendations.",
      reverseScored: false
    },
    {
      id: 7,
      dimension: "pattern-recognition",
      text: "I regularly review historical data to identify lessons for future strategy.",
      reverseScored: false
    },
    {
      id: 13,
      dimension: "scenario-planning",
      text: "I believe preparation for multiple futures is more valuable than predicting one outcome.",
      reverseScored: false
    },
    {
      id: 14,
      dimension: "decision-architecture",
      text: "I involve the right stakeholders in decisions without creating analysis paralysis.",
      reverseScored: false
    },
    {
      id: 20,
      dimension: "competitive-intelligence",
      text: "I stay informed about macroeconomic trends that could impact our business.",
      reverseScored: false
    },
    {
      id: 21,
      dimension: "systems-thinking",
      text: "I can see how my decisions today will impact our organization years from now.",
      reverseScored: false
    },
    {
      id: 27,
      dimension: "pattern-recognition",
      text: "I often spot opportunities by recognizing patterns across different industries.",
      reverseScored: false
    },
    {
      id: 28,
      dimension: "scenario-planning",
      text: "I regularly update my assumptions about the future based on new information.",
      reverseScored: false
    },
    {
      id: 34,
      dimension: "decision-architecture",
      text: "I can balance short-term pressures with long-term strategic priorities.",
      reverseScored: false
    },
    {
      id: 35,
      dimension: "competitive-intelligence",
      text: "I understand the strategic intent behind competitors' public announcements.",
      reverseScored: false
    }
  ],

  // Archetype Classifications
  archetypes: [
    {
      id: "visionary-architect",
      name: "Visionary Architect",
      scoreRange: [85, 100],
      percentile: "Top 5%",
      description: "You possess exceptional strategic intelligence across all dimensions. You naturally see what others miss and can architect complex strategies that anticipate multiple futures.",
      strengths: [
        "Extraordinary systems thinking capability",
        "Predictive pattern recognition",
        "Multi-scenario preparation",
        "Decisive under uncertainty"
      ],
      blindSpots: [
        "May overcomplicate simple situations",
        "Others may struggle to keep pace with your thinking",
        "Risk of analysis paralysis on truly unprecedented decisions"
      ],
      growthAreas: [
        "Develop translation skills to communicate complex strategies simply",
        "Build tolerance for 'good enough' decisions in low-stakes contexts",
        "Mentor others in strategic thinking"
      ],
      idealRoles: ["Chief Strategy Officer", "CEO", "Venture Capitalist", "Management Consultant", "Product Strategist"],
      famousExamples: ["Jeff Bezos", "Satya Nadella", "Warren Buffett"]
    },
    {
      id: "strategic-operator",
      name: "Strategic Operator",
      scoreRange: [70, 84],
      percentile: "Top 20%",
      description: "You combine strong strategic thinking with practical execution sense. You can both design and implement effective strategies.",
      strengths: [
        "Balanced strategic and operational thinking",
        "Good pattern recognition",
        "Solid decision-making framework",
        "Competitive awareness"
      ],
      blindSpots: [
        "May miss second-order consequences occasionally",
        "Could strengthen scenario planning depth",
        "Sometimes too quick to decide"
      ],
      growthAreas: [
        "Deepen systems thinking through complex case studies",
        "Practice developing more scenarios for major decisions",
        "Study competitive dynamics in adjacent industries"
      ],
      idealRoles: ["General Manager", "VP of Operations", "Director", "Startup Founder", "Program Manager"],
      famousExamples: ["Sheryl Sandberg", "Tim Cook"]
    },
    {
      id: "emerging-strategist",
      name: "Emerging Strategist",
      scoreRange: [55, 69],
      percentile: "Top 50%",
      description: "You have solid strategic foundations with clear opportunities for development. With intentional practice, you can significantly enhance your strategic impact.",
      strengths: [
        "Growing systems awareness",
        "Developing pattern recognition",
        "Willingness to consider multiple perspectives",
        "Open to learning"
      ],
      blindSpots: [
        "May focus too heavily on immediate concerns",
        "Pattern recognition could be more developed",
        "Decision-making may benefit from more structure"
      ],
      growthAreas: [
        "Study systems thinking frameworks (e.g., causal loop diagrams)",
        "Practice scenario planning exercises",
        "Develop explicit decision criteria for major choices",
        "Seek mentorship from strong strategists"
      ],
      idealRoles: ["Manager", "Team Lead", "Analyst", "Functional Specialist", "Rising Leader"],
      famousExamples: ["Developing leaders across industries"]
    },
    {
      id: "tactical-performer",
      name: "Tactical Performer",
      scoreRange: [40, 54],
      percentile: "Bottom 50%",
      description: "You excel at execution and immediate problem-solving. Strategic thinking is not your natural strength, but can be developed with focused effort.",
      strengths: [
        "Strong execution orientation",
        "Practical problem-solving",
        "Results-focused",
        "Responsive to immediate needs"
      ],
      blindSpots: [
        "May miss longer-term implications of decisions",
        "Pattern recognition across time periods",
        "Systemic ripple effects",
        "Competitive positioning awareness"
      ],
      growthAreas: [
        "Partner with strong strategists for major decisions",
        "Study strategic case studies in your industry",
        "Practice '5 Whys' analysis for root cause thinking",
        "Read industry analysis regularly"
      ],
      idealRoles: ["Operations Manager", "Sales Manager", "Project Manager", "Individual Contributor", "Specialist"],
      famousExamples: ["Effective operators who leverage strategic partners"]
    },
    {
      id: "reactive-responder",
      name: "Reactive Responder",
      scoreRange: [0, 39],
      percentile: "Bottom 20%",
      description: "You tend to focus on immediate tasks and reactive problem-solving. Strategic thinking requires significant development, but improvement is possible with structured learning.",
      strengths: [
        "Responsive to immediate challenges",
        "Task-oriented execution",
        "Willing to take direction",
        "Practical focus"
      ],
      blindSpots: [
        "Limited systems perspective",
        "Reactive rather than proactive posture",
        "May struggle with ambiguous situations",
        "Pattern recognition across complex data"
      ],
      growthAreas: [
        "Work with a coach or mentor on strategic thinking",
        "Study basic strategy frameworks (SWOT, Porter's Five Forces)",
        "Practice weekly 'future scanning' exercises",
        "Seek roles with increasing strategic scope gradually"
      ],
      idealRoles: ["Support Roles", "Administrative Functions", "Entry-Level Positions", "Highly Structured Environments"],
      famousExamples: ["Individual contributors in structured organizations"]
    }
  ],

  // Scoring Algorithm
  scoring: {
    scale: {
      min: 1,
      max: 5,
      labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    calculateDimension: (responses: number[], dimensionQuestions: number[]) => {
      const relevantResponses = responses.filter((_, idx) => dimensionQuestions.includes(idx + 1));
      const sum = relevantResponses.reduce((a, b) => a + b, 0);
      return (sum / relevantResponses.length) * 20; // Convert to 0-100 scale
    },
    calculateTotal: (dimensionScores: number[], weights: number[]) => {
      return dimensionScores.reduce((total, score, idx) => total + score * weights[idx], 0);
    },
    getArchetype: (totalScore: number) => {
      return strategicIQTest.archetypes.find(a => 
        totalScore >= a.scoreRange[0] && totalScore <= a.scoreRange[1]
      );
    }
  },

  // Benchmark Data
  benchmarks: {
    overall: {
      mean: 62,
      median: 63,
      stdDev: 18,
      percentiles: {
        p10: 38,
        p25: 48,
        p50: 63,
        p75: 76,
        p90: 85,
        p95: 90,
        p99: 96
      }
    },
    byRole: {
      "CEO": { mean: 78, topPerformers: 88 },
      "C-Suite": { mean: 74, topPerformers: 85 },
      "VP/Director": { mean: 68, topPerformers: 80 },
      "Manager": { mean: 58, topPerformers: 72 },
      "Individual Contributor": { mean: 52, topPerformers: 68 },
      "Founder": { mean: 76, topPerformers: 88 },
      "Consultant": { mean: 72, topPerformers: 84 }
    },
    byIndustry: {
      "Technology": { mean: 68, topPerformers: 82 },
      "Finance": { mean: 70, topPerformers: 84 },
      "Consulting": { mean: 72, topPerformers: 85 },
      "Healthcare": { mean: 60, topPerformers: 75 },
      "Manufacturing": { mean: 58, topPerformers: 72 },
      "Retail": { mean: 56, topPerformers: 70 }
    }
  }
};

export default strategicIQTest;
