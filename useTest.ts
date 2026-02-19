import { useState, useCallback, useMemo } from 'react';
import type { Test, TestResult } from '@/types';

interface UseTestReturn {
  currentQuestion: number;
  responses: number[];
  isComplete: boolean;
  progress: number;
  timeSpent: number;
  setResponse: (questionIndex: number, value: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  goToQuestion: (index: number) => void;
  calculateResults: () => TestResult | null;
  canProceed: boolean;
}

export function useTest(test: Test, userName: string, userEmail: string): UseTestReturn {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<number[]>(new Array(test.questions.length).fill(0));
  const [timeSpent] = useState(0);
  const [startTime] = useState(Date.now());

  const progress = useMemo(() => {
    const answeredCount = responses.filter(r => r > 0).length;
    return (answeredCount / test.questions.length) * 100;
  }, [responses, test.questions.length]);

  const isComplete = useMemo(() => {
    return responses.every(r => r > 0);
  }, [responses]);

  const canProceed = useMemo(() => {
    return responses[currentQuestion] > 0;
  }, [responses, currentQuestion]);

  const setResponse = useCallback((questionIndex: number, value: number) => {
    setResponses(prev => {
      const newResponses = [...prev];
      newResponses[questionIndex] = value;
      return newResponses;
    });
  }, []);

  const nextQuestion = useCallback(() => {
    if (currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  }, [currentQuestion, test.questions.length]);

  const previousQuestion = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  }, [currentQuestion]);

  const goToQuestion = useCallback((index: number) => {
    if (index >= 0 && index < test.questions.length) {
      setCurrentQuestion(index);
    }
  }, [test.questions.length]);

  const calculateResults = useCallback((): TestResult | null => {
    if (!isComplete) return null;

    const endTime = Date.now();
    const totalTimeSpent = Math.floor((endTime - startTime) / 1000);

    // Calculate dimension scores
    const dimensionScores: Record<string, number> = {};
    test.dimensions.forEach(dimension => {
      const dimensionResponses = dimension.questions.map(qId => {
        const questionIndex = test.questions.findIndex(q => q.id === qId);
        return responses[questionIndex];
      });
      const sum = dimensionResponses.reduce((a, b) => a + b, 0);
      dimensionScores[dimension.id] = (sum / dimensionResponses.length) * 20;
    });

    // Calculate total weighted score
    const weights = test.dimensions.map(d => d.weight);
    const scores = test.dimensions.map(d => dimensionScores[d.id]);
    const totalScore = scores.reduce((total, score, idx) => total + score * weights[idx], 0);

    // Find archetype
    const archetype = test.archetypes.find(
      a => totalScore >= a.scoreRange[0] && totalScore <= a.scoreRange[1]
    ) || test.archetypes[test.archetypes.length - 1];

    // Calculate percentile based on benchmark data
    const percentile = calculatePercentile(totalScore, test.benchmarks.overall.percentiles);

    return {
      testId: test.id,
      testName: test.name,
      userName,
      userEmail,
      completedAt: new Date().toISOString(),
      responses: [...responses],
      dimensionScores,
      totalScore: Math.round(totalScore),
      percentile,
      archetype,
      timeSpent: totalTimeSpent
    };
  }, [isComplete, responses, test, userName, userEmail, startTime]);

  return {
    currentQuestion,
    responses,
    isComplete,
    progress,
    timeSpent,
    setResponse,
    nextQuestion,
    previousQuestion,
    goToQuestion,
    calculateResults,
    canProceed
  };
}

function calculatePercentile(score: number, percentiles: Record<string, number>): number {
  const sortedPercentiles = Object.entries(percentiles)
    .sort((a, b) => a[1] - b[1]);
  
  for (const [p, value] of sortedPercentiles) {
    if (score <= value) {
      return parseInt(p.replace('p', ''));
    }
  }
  return 99;
}

export default useTest;
