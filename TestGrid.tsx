import { useState } from 'react';
import { ArrowRight, Clock, Brain, Crown, Dna, Users, Heart, Zap, Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { tests } from '@/data/brand';
import { allTests } from '@/data/tests';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Crown,
  Dna,
  Users,
  Heart,
  Zap,
  Sparkles,
};

interface TestGridProps {
  onStartTest: (testId: string) => void;
}

export function TestGrid({ onStartTest }: TestGridProps) {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const handleStartTest = (testId: string) => {
    setSelectedTest(null);
    onStartTest(testId);
  };

  return (
    <section id="tests" className="py-20 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Executive Intelligence Assessments
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Seven scientifically validated assessments that reveal your executive capabilities 
            across the dimensions that matter most for leadership success.
          </p>
        </div>

        {/* Test Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test) => {
            const Icon = iconMap[test.icon] || Brain;
            
            return (
              <div
                key={test.id}
                className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300"
              >
                {/* Color Accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: test.color }}
                />

                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${test.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: test.color }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{test.name}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{test.description}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{test.timeEstimate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    <span>{test.questionCount} questions</span>
                  </div>
                </div>

                {/* Dimensions */}
                <div className="mb-6">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Measures</p>
                  <div className="flex flex-wrap gap-2">
                    {test.keyDimensions.slice(0, 3).map((dim) => (
                      <span 
                        key={dim}
                        className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-400"
                      >
                        {dim}
                      </span>
                    ))}
                    {test.keyDimensions.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-400">
                        +{test.keyDimensions.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800"
                    onClick={() => setSelectedTest(test.id)}
                  >
                    Learn More
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white"
                    onClick={() => handleStartTest(test.id)}
                  >
                    Start
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bundle CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-indigo-900/50 to-violet-900/50 border border-indigo-500/30">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-1">Executive Intelligence Suite</h3>
              <p className="text-slate-400 text-sm">All 7 assessments + comparative analytics</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-white">$199</div>
                <div className="text-sm text-slate-500 line-through">$553</div>
              </div>
              <Button
                className="bg-white text-indigo-900 hover:bg-slate-100 font-semibold"
                onClick={() => handleStartTest('strategic-iq')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Test Detail Dialog */}
      <Dialog open={!!selectedTest} onOpenChange={() => setSelectedTest(null)}>
        <DialogContent className="max-w-2xl bg-slate-900 border-slate-800 text-white max-h-[90vh] overflow-y-auto">
          {selectedTest && (() => {
            const test = tests.find(t => t.id === selectedTest);
            const fullTest = allTests.find(t => t.id === selectedTest);
            const Icon = test ? iconMap[test.icon] || Brain : Brain;
            
            if (!test || !fullTest) return null;
            
            return (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${test.color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: test.color }} />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl text-white">{test.name}</DialogTitle>
                      <DialogDescription className="text-slate-400">
                        {test.category} Assessment
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="space-y-6">
                  <p className="text-slate-300">{test.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-800 rounded-lg p-4 text-center">
                      <Clock className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
                      <div className="text-sm text-slate-500">Duration</div>
                      <div className="font-semibold text-white">{test.timeEstimate}</div>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 text-center">
                      <Check className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
                      <div className="text-sm text-slate-500">Questions</div>
                      <div className="font-semibold text-white">{test.questionCount}</div>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 text-center">
                      <Sparkles className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
                      <div className="text-sm text-slate-500">Reliability</div>
                      <div className="font-semibold text-white">{fullTest.reliability}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">What You'll Discover</h4>
                    <ul className="space-y-2">
                      {test.keyDimensions.map((dim) => (
                        <li key={dim} className="flex items-center gap-2 text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          {dim}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">Ideal For</h4>
                    <div className="flex flex-wrap gap-2">
                      {test.targetRoles.map((role) => (
                        <span 
                          key={role}
                          className="text-sm px-3 py-1 rounded-full bg-slate-800 text-slate-300"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-sm text-slate-500 mb-4">
                      <strong className="text-slate-400">Scientific Foundation:</strong>{' '}
                      {fullTest.validityFramework}
                    </p>
                    <Button
                      className="w-full bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white"
                      onClick={() => handleStartTest(test.id)}
                    >
                      Start Assessment
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default TestGrid;
