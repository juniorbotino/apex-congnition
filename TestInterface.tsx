import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import type { Test } from '@/types';
import { useTest } from '@/hooks/useTest';

interface TestInterfaceProps {
  test: Test;
  userName: string;
  userEmail: string;
  onComplete: (result: any) => void;
  onExit: () => void;
}

export function TestInterface({ test, userName, userEmail, onComplete, onExit }: TestInterfaceProps) {
  const {
    currentQuestion,
    responses,
    isComplete,
    progress,
    setResponse,
    nextQuestion,
    previousQuestion,
    calculateResults,
    canProceed
  } = useTest(test, userName, userEmail);

  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isComplete) {
      const result = calculateResults();
      if (result) {
        onComplete(result);
      }
    }
  }, [isComplete, calculateResults, onComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const question = test.questions[currentQuestion];
  const scaleLabels = test.scoring.scale.labels;

  return (
    <div className="min-h-screen bg-slate-950 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowExitConfirm(true)}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Exit</span>
          </button>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{formatTime(elapsedTime)}</span>
            </div>
            <div className="text-sm text-slate-400">
              {currentQuestion + 1} / {test.questions.length}
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <Progress value={progress} className="h-2 bg-slate-800" />
          <div className="flex justify-between mt-2 text-xs text-slate-500">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-10 mb-8">
          <div className="mb-2 text-sm text-indigo-400 font-medium uppercase tracking-wider">
            Question {currentQuestion + 1}
          </div>
          <h2 className="text-xl lg:text-2xl font-semibold text-white mb-8">
            {question.text}
          </h2>

          {/* Likert Scale */}
          <div className="space-y-3">
            {scaleLabels.map((label, index) => {
              const value = index + 1;
              const isSelected = responses[currentQuestion] === value;
              
              return (
                <button
                  key={value}
                  onClick={() => setResponse(currentQuestion, value)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-indigo-500 bg-indigo-500/10'
                      : 'border-slate-700 hover:border-slate-600 hover:bg-slate-800/50'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-500'
                        : 'border-slate-600'
                    }`}
                  >
                    {isSelected && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <span className={`text-left ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
            className="border-slate-700 text-slate-300 hover:bg-slate-800 disabled:opacity-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <Button
            onClick={nextQuestion}
            disabled={!canProceed}
            className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white disabled:opacity-50"
          >
            {currentQuestion === test.questions.length - 1 ? 'Complete' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Question Navigator */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-500 mb-4">Question Navigator</p>
          <div className="flex flex-wrap gap-2">
            {test.questions.map((_, idx) => {
              const isAnswered = responses[idx] > 0;
              const isCurrent = idx === currentQuestion;
              
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (isAnswered || idx <= currentQuestion) {
                      // Allow navigation to answered or previous questions
                    }
                  }}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                    isCurrent
                      ? 'bg-indigo-500 text-white'
                      : isAnswered
                      ? 'bg-slate-700 text-white'
                      : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Exit Confirmation */}
        {showExitConfirm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full">
              <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white text-center mb-2">
                Exit Assessment?
              </h3>
              <p className="text-slate-400 text-center mb-6">
                Your progress will not be saved. Are you sure you want to exit?
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800"
                  onClick={() => setShowExitConfirm(false)}
                >
                  Continue
                </Button>
                <Button
                  variant="destructive"
                  className="flex-1"
                  onClick={onExit}
                >
                  Exit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestInterface;
