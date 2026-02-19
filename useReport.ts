import { useMemo } from 'react';
import type { TestResult, GeneratedReport, ReportSection, Test } from '@/types';

interface UseReportReturn {
  report: GeneratedReport;
  sections: ReportSection[];
  executiveSummary: string;
  strengthsAnalysis: string[];
  blindSpotsAnalysis: string[];
  recommendations: string[];
  benchmarkComparison: string;
}

export function useReport(result: TestResult, test: Test): UseReportReturn {
  const report = useMemo(() => generateReport(result, test), [result, test]);
  
  const sections = useMemo(() => report.sections, [report]);
  
  const executiveSummary = useMemo(() => {
    const summarySection = sections.find(s => s.type === 'summary');
    return summarySection?.content || '';
  }, [sections]);

  const strengthsAnalysis = useMemo(() => {
    return result.archetype.strengths;
  }, [result.archetype]);

  const blindSpotsAnalysis = useMemo(() => {
    return result.archetype.blindSpots;
  }, [result.archetype]);

  const recommendations = useMemo(() => {
    return result.archetype.growthAreas;
  }, [result.archetype]);

  const benchmarkComparison = useMemo(() => {
    const benchmarkSection = sections.find(s => s.type === 'benchmark');
    return benchmarkSection?.content || '';
  }, [sections]);

  return {
    report,
    sections,
    executiveSummary,
    strengthsAnalysis,
    blindSpotsAnalysis,
    recommendations,
    benchmarkComparison
  };
}

function generateReport(result: TestResult, test: Test): GeneratedReport {
  const sections: ReportSection[] = [
    generateExecutiveSummary(result),
    generateDimensionAnalysis(result, test),
    generateArchetypeAnalysis(result),
    generateBenchmarkAnalysis(result, test),
    generateRecommendations(result),
    generateGrowthRoadmap(result)
  ];

  return {
    id: `report-${result.testId}-${Date.now()}`,
    userName: result.userName,
    testName: result.testName,
    completedAt: result.completedAt,
    sections,
    dimensionScores: result.dimensionScores,
    totalScore: result.totalScore,
    percentile: result.percentile,
    archetype: result.archetype,
    recommendations: result.archetype.growthAreas
  };
}

function generateExecutiveSummary(result: TestResult): ReportSection {
  const { userName, testName, totalScore, percentile, archetype } = result;
  
  const content = `
## Executive Summary

Dear ${userName},

Your ${testName} assessment reveals that you operate at the **${archetype.name}** level, placing you in the **${archetype.percentile}** of executives globally.

**Your Score: ${totalScore}/100**

${archetype.description}

This assessment evaluated your capabilities across ${Object.keys(result.dimensionScores).length} critical dimensions. Your results indicate significant strengths in strategic thinking and leadership potential, alongside specific opportunities for targeted development.

**Key Findings:**
- Overall Performance: ${getPerformanceLabel(totalScore)}
- Comparative Standing: ${percentile}th percentile
- Primary Archetype: ${archetype.name}
- Development Priority: ${getDevelopmentPriority(result.dimensionScores)}

This report provides a comprehensive analysis of your executive intelligence profile, including dimension-specific insights, benchmark comparisons, and actionable recommendations for accelerated growth.
  `.trim();

  return {
    title: 'Executive Summary',
    content,
    type: 'summary'
  };
}

function generateDimensionAnalysis(result: TestResult, test: Test): ReportSection {
  const dimensionAnalysis = Object.entries(result.dimensionScores)
    .map(([dimId, score]) => {
      const dimension = test.dimensions.find(d => d.id === dimId);
      if (!dimension) return '';
      
      const performance = getPerformanceLabel(score);
      const insight = getDimensionInsight(dimId, score);
      
      return `
### ${dimension.name}: ${Math.round(score)}/100 (${performance})

${dimension.description}

**Your Performance:** ${insight}

**Score Interpretation:**
${getScoreInterpretation(score)}
      `.trim();
    })
    .join('\n\n');

  return {
    title: 'Dimension Analysis',
    content: dimensionAnalysis,
    type: 'dimension'
  };
}

function generateArchetypeAnalysis(result: TestResult): ReportSection {
  const { archetype } = result;
  
  const content = `
## Archetype Profile: ${archetype.name}

${archetype.description}

### Core Strengths
${archetype.strengths.map(s => `- ${s}`).join('\n')}

### Potential Blind Spots
${archetype.blindSpots.map(b => `- ${b}`).join('\n')}

### Ideal Role Alignment
Based on your profile, you are best suited for:
${archetype.idealRoles.map(r => `- ${r}`).join('\n')}

### Exemplary Leaders with Similar Profiles
${archetype.famousExamples.join(', ')}
  `.trim();

  return {
    title: 'Archetype Analysis',
    content,
    type: 'archetype'
  };
}

function generateBenchmarkAnalysis(result: TestResult, test: Test): ReportSection {
  const { totalScore, percentile } = result;
  
  const content = `
## Benchmark Comparison

Your performance relative to global executive benchmarks:

### Overall Standing
- **Your Score:** ${totalScore}/100
- **Global Mean:** ${test.benchmarks.overall.mean}
- **Your Percentile:** ${percentile}th
- **Performance Category:** ${getPerformanceLabel(totalScore)}

### Percentile Interpretation
${getPercentileInterpretation(percentile)}

### Role-Based Comparison
${generateRoleComparisons(result, test)}

### Industry Context
${generateIndustryComparisons(result, test)}
  `.trim();

  return {
    title: 'Benchmark Analysis',
    content,
    type: 'benchmark'
  };
}

function generateRecommendations(result: TestResult): ReportSection {
  const { archetype, dimensionScores } = result;
  
  // Sort dimensions by score (lowest first) to prioritize development
  const sortedDimensions = Object.entries(dimensionScores)
    .sort((a, b) => a[1] - b[1]);
  
  const weakestDimension = sortedDimensions[0];
  
  const content = `
## Strategic Recommendations

### Immediate Actions (Next 30 Days)
${archetype.growthAreas.slice(0, 2).map(r => `1. ${r}`).join('\n')}

### Medium-Term Development (3-6 Months)
${archetype.growthAreas.slice(2).map(r => `- ${r}`).join('\n')}

### Priority Development Area: ${weakestDimension[0]}
Focus on strengthening this dimension through:
- Targeted training and development
- Coaching or mentorship
- Deliberate practice in real-world scenarios
- Regular feedback and reflection

### Suggested Resources
- Executive coaching engagement
- Leadership development program
- Peer learning group
- Relevant reading and case studies
  `.trim();

  return {
    title: 'Strategic Recommendations',
    content,
    type: 'recommendations'
  };
}

function generateGrowthRoadmap(_result: TestResult): ReportSection {
  const content = `
## 12-Month Growth Roadmap

### Quarter 1: Foundation Building
- Complete baseline assessments across all dimensions
- Establish coaching relationship
- Identify key development priorities
- Create personal development plan

### Quarter 2: Skill Development
- Engage in targeted training programs
- Practice new behaviors in low-stakes environments
- Gather 360-degree feedback
- Refine approach based on early results

### Quarter 3: Real-World Application
- Apply developing skills in challenging situations
- Take on stretch assignments
- Mentor others in your areas of strength
- Document lessons learned

### Quarter 4: Integration & Mastery
- Reassess to measure progress
- Solidify new habits and behaviors
- Plan next phase of development
- Share insights with your organization

### Success Metrics
- Improvement in assessment scores
- Feedback from peers and supervisors
- Achievement of specific career milestones
- Increased confidence and effectiveness
  `.trim();

  return {
    title: 'Growth Roadmap',
    content,
    type: 'growth'
  };
}

// Helper functions
function getPerformanceLabel(score: number): string {
  if (score >= 85) return 'Exceptional';
  if (score >= 70) return 'Strong';
  if (score >= 55) return 'Developing';
  if (score >= 40) return 'Emerging';
  return 'Foundational';
}

function getDevelopmentPriority(scores: Record<string, number>): string {
  const minScore = Math.min(...Object.values(scores));
  if (minScore >= 70) return 'Maintenance and refinement';
  if (minScore >= 55) return 'Targeted skill building';
  return 'Intensive development';
}

function getDimensionInsight(dimensionId: string, score: number): string {
  const insights: Record<string, Record<string, string>> = {
    'systems-thinking': {
      high: 'You excel at seeing the big picture and understanding complex interconnections.',
      medium: 'You have a developing ability to see systems and patterns.',
      low: 'Focus on understanding how different parts of your organization interact.'
    },
    'vision-casting': {
      high: 'You naturally inspire others with compelling visions of the future.',
      medium: 'Your vision communication is solid with room for greater inspiration.',
      low: 'Work on articulating a clear, compelling future state.'
    },
    'achievement-drive': {
      high: 'You are highly motivated to excel and achieve challenging goals.',
      medium: 'You have reasonable achievement motivation with room to increase.',
      low: 'Consider what truly motivates you and align your work with those drivers.'
    },
    'openness': {
      high: 'You embrace new ideas and approaches with curiosity and creativity.',
      medium: 'You are reasonably open to new experiences and ideas.',
      low: 'Practice seeking out diverse perspectives and novel approaches.'
    },
    'self-awareness': {
      high: 'You have exceptional understanding of your emotions and their impact.',
      medium: 'Your self-awareness is developing through reflection and feedback.',
      low: 'Invest in practices that increase emotional self-awareness.'
    },
    'learning-agility': {
      high: 'You learn rapidly and adapt quickly to new situations.',
      medium: 'You have solid learning ability with room for acceleration.',
      low: 'Focus on developing more efficient learning strategies.'
    },
    'gravitas': {
      high: 'You project authority and confidence that commands respect.',
      medium: 'Your executive presence is developing with room for greater impact.',
      low: 'Work on projecting greater confidence and authority.'
    }
  };
  
  const level = score >= 70 ? 'high' : score >= 55 ? 'medium' : 'low';
  return insights[dimensionId]?.[level] || 'Continue developing this capability.';
}

function getScoreInterpretation(score: number): string {
  if (score >= 85) {
    return 'This score indicates exceptional capability. You operate at a level that distinguishes you as a top performer. Leverage this strength while developing other areas.';
  }
  if (score >= 70) {
    return 'This score reflects strong capability. You perform well above average and can rely on this strength in most situations.';
  }
  if (score >= 55) {
    return 'This score indicates developing capability. You have a solid foundation that will benefit from continued focus and practice.';
  }
  if (score >= 40) {
    return 'This score suggests emerging capability. With intentional development, you can significantly strengthen this area.';
  }
  return 'This score indicates foundational level. Significant development opportunity exists with structured learning and practice.';
}

function getPercentileInterpretation(percentile: number): string {
  if (percentile >= 90) {
    return 'You are in the top 10% of executives globally. This places you among the highest performers and indicates exceptional capability in this domain.';
  }
  if (percentile >= 75) {
    return 'You are in the top quartile of executives. You perform significantly above average and have strong capabilities in this area.';
  }
  if (percentile >= 50) {
    return 'You are performing above the median. You have solid capabilities with clear opportunities for further development.';
  }
  return 'You are performing below the median. This indicates significant opportunity for development and growth in this domain.';
}

function generateRoleComparisons(result: TestResult, test: Test): string {
  if (!test.benchmarks.byRole) return 'Role-specific benchmarks not available for this assessment.';
  
  return Object.entries(test.benchmarks.byRole)
    .map(([role, data]) => {
      const diff = result.totalScore - data.mean;
      const comparison = diff > 0 ? 'above' : 'below';
      return `- **${role}:** You score ${Math.abs(diff).toFixed(0)} points ${comparison} average (${data.mean})`;
    })
    .join('\n');
}

function generateIndustryComparisons(_result: TestResult, test: Test): string {
  if (!test.benchmarks.byIndustry) return 'Industry-specific benchmarks not available for this assessment.';
  
  return Object.entries(test.benchmarks.byIndustry)
    .map(([industry, data]) => {
      const diff = _result.totalScore - data.mean;
      const comparison = diff > 0 ? 'above' : 'below';
      return `- **${industry}:** You score ${Math.abs(diff).toFixed(0)} points ${comparison} average (${data.mean})`;
    })
    .join('\n');
}

export default useReport;