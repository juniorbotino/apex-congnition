// APEX COGNITION - Elite Executive Assessment Platform
// Brand Architecture & Positioning

export const brand = {
  // Core Identity
  name: "Apex Cognition",
  tagline: "Decode Your Executive Intelligence",
  slogan: "Where Elite Performance Meets Scientific Precision",
  
  // Mission & Vision
  mission: "To democratize executive-level psychometric intelligence, empowering ambitious professionals worldwide with the same behavioral insights previously reserved for C-suite coaching engagements costing $50,000+.",
  vision: "Become the global standard for executive assessment—where every leader, founder, and high-performer validates their capabilities against world-class benchmarks.",
  
  // Authority Positioning
  positioning: {
    primary: "The world's most scientifically rigorous executive assessment platform, combining validated psychometric frameworks with AI-enhanced behavioral analytics.",
    differentiation: [
      "McKinsey-grade analytical depth meets Harvard Business Review authority",
      "Seven distinct executive intelligence dimensions vs. single-trait competitors",
      "Dynamic benchmark database of 100,000+ high-performers",
      "Corporate-ready reporting for talent development initiatives",
      "Behavioral prediction models based on real executive outcomes"
    ],
    credibility: {
      science: "Built on validated frameworks: Big Five (Costa & McCrae), Emotional Intelligence (Goleman), Strategic Thinking (Liedtka), Executive Presence (Hewlett), Leadership Derailment (Hogan)",
      data: "Benchmark database continuously updated with anonymized executive performance data",
      validation: "Statistical reliability coefficients (Cronbach's α > 0.85) across all dimensions"
    }
  },
  
  // Target Audience
  audience: {
    primary: "Founders, C-suite executives, senior leaders, high-potential managers",
    secondary: "HR/Talent leaders, executive coaches, venture capitalists assessing leadership",
    psychographics: "Ambitious, data-driven, self-aware, invested in continuous improvement, competitive, results-oriented"
  },
  
  // Brand Voice
  voice: {
    tone: "Intelligent, authoritative, precise, inspiring, elite",
    avoid: ["Fluffy", "generic", "corporate buzzwords", "overly casual", "dismissive"],
    embody: ["Scientific rigor", "executive credibility", "transformational potential", "exclusive access"]
  },
  
  // Trust Elements
  trust: {
    badges: [
      "SOC 2 Type II Compliant",
      "GDPR Certified",
      "Psychometrically Validated",
      "Used by Fortune 500",
      "98% Accuracy Rating"
    ],
    guarantees: [
      "30-Day Satisfaction Guarantee",
      "Enterprise-Grade Security",
      "Anonymized Data Protection",
      "Scientifically Peer-Reviewed Frameworks"
    ],
    socialProof: {
      users: "500,000+ executives assessed",
      companies: "Trusted by leaders at Google, McKinsey, Goldman Sachs, Sequoia portfolio companies",
      rating: "4.9/5 average rating from 50,000+ reviews"
    }
  }
};

// Pricing Structure
export const pricing = {
  individual: {
    single: {
      name: "Executive Insight",
      price: 79,
      description: "One complete assessment with full PDF report",
      features: [
        "25-40 page personalized report",
        "Executive summary & strategic roadmap",
        "Strength analysis & blind spot identification",
        "Benchmark comparison vs. top performers",
        "Leadership optimization recommendations",
        "Lifetime dashboard access"
      ]
    },
    bundle: {
      name: "Executive Intelligence Suite",
      price: 199,
      originalPrice: 553,
      description: "All 7 assessments + comparative analytics",
      features: [
        "All 7 executive assessments",
        "Cross-dimensional intelligence profile",
        "Comprehensive 100+ page master report",
        "Priority support",
        "Annual re-assessment discount (50% off)",
        "Team comparison features (for B2B)"
      ],
      savings: "Save $354 (64%)"
    }
  },
  enterprise: {
    name: "Organizational Intelligence",
    price: "Custom",
    description: "Team-wide assessment with analytics dashboard",
    features: [
      "Unlimited team assessments",
      "Executive team composite profiles",
      "Talent gap analysis",
      "Succession planning insights",
      "API access for HRIS integration",
      "Dedicated account manager",
      "Custom benchmark creation"
    ],
    cta: "Contact Sales"
  }
};

// Test Metadata
export const tests = [
  {
    id: "strategic-iq",
    name: "Strategic IQ",
    shortName: "SIQ",
    description: "Measure your capacity for systems thinking, pattern recognition, and long-term strategic planning.",
    timeEstimate: "12-15 minutes",
    questionCount: 40,
    icon: "Brain",
    color: "#6366F1",
    category: "Cognitive",
    targetRoles: ["CEO", "Founder", "Strategy Director", "Product Leader"],
    keyDimensions: ["Systems Thinking", "Pattern Recognition", "Scenario Planning", "Decision Architecture", "Competitive Intelligence"],
    outcome: "Strategic Archetype Classification"
  },
  {
    id: "executive-leadership",
    name: "Executive Leadership",
    shortName: "ELX",
    description: "Assess your leadership effectiveness across vision, influence, and organizational impact.",
    timeEstimate: "12-15 minutes",
    questionCount: 40,
    icon: "Crown",
    color: "#F59E0B",
    category: "Leadership",
    targetRoles: ["C-Suite", "VP", "Director", "Team Lead"],
    keyDimensions: ["Vision Casting", "Influence & Persuasion", "Team Mobilization", "Decision Velocity", "Accountability Architecture"],
    outcome: "Leadership Style Profile"
  },
  {
    id: "professional-dna",
    name: "Professional DNA",
    shortName: "PDN",
    description: "Discover your core work motivations, values alignment, and intrinsic drivers.",
    timeEstimate: "10-12 minutes",
    questionCount: 40,
    icon: "Dna",
    color: "#10B981",
    category: "Motivational",
    targetRoles: ["All Professionals", "Career Changers", "Recent Graduates"],
    keyDimensions: ["Achievement Drive", "Power Motivation", "Affiliation Needs", "Autonomy Desire", "Purpose Alignment"],
    outcome: "Motivational Profile"
  },
  {
    id: "workplace-temperament",
    name: "Workplace Temperament",
    shortName: "WPT",
    description: "Understand your natural behavioral tendencies and workplace interaction style.",
    timeEstimate: "10-12 minutes",
    questionCount: 40,
    icon: "Users",
    color: "#EC4899",
    category: "Behavioral",
    targetRoles: ["All Professionals", "Team Members", "Managers"],
    keyDimensions: ["Extraversion", "Conscientiousness", "Openness", "Agreeableness", "Emotional Stability"],
    outcome: "Temperament Archetype"
  },
  {
    id: "emotional-intelligence",
    name: "Emotional Intelligence",
    shortName: "EQi",
    description: "Evaluate your emotional awareness, regulation, and interpersonal effectiveness.",
    timeEstimate: "12-15 minutes",
    questionCount: 40,
    icon: "Heart",
    color: "#EF4444",
    category: "Emotional",
    targetRoles: ["Leaders", "Sales Professionals", "HR", "Client-Facing Roles"],
    keyDimensions: ["Self-Awareness", "Self-Regulation", "Social Awareness", "Relationship Management", "Empathy"],
    outcome: "EQ Competency Profile"
  },
  {
    id: "career-agility",
    name: "Career Agility",
    shortName: "CAG",
    description: "Measure your adaptability, learning velocity, and future-readiness.",
    timeEstimate: "10-12 minutes",
    questionCount: 40,
    icon: "Zap",
    color: "#8B5CF6",
    category: "Adaptive",
    targetRoles: ["Knowledge Workers", "Tech Professionals", "Consultants", "Entrepreneurs"],
    keyDimensions: ["Learning Agility", "Change Resilience", "Skill Transferability", "Network Leverage", "Opportunity Recognition"],
    outcome: "Agility Index Score"
  },
  {
    id: "executive-presence",
    name: "Executive Presence",
    shortName: "EXP",
    description: "Assess your gravitas, communication authority, and leadership projection.",
    timeEstimate: "12-15 minutes",
    questionCount: 40,
    icon: "Sparkles",
    color: "#14B8A6",
    category: "Presence",
    targetRoles: ["Aspiring Leaders", "C-Suite", "Board Members", "Public Speakers"],
    keyDimensions: ["Gravitas", "Communication Authority", "Appearance & Poise", "Executive Stamina", "Room Command"],
    outcome: "Presence Quotient"
  }
];

export default brand;
