import { useState } from 'react';
import { Lock, Download, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { TestResult } from '@/types';
import { pricing } from '@/data/brand';

interface ResultsTeaserProps {
  result: TestResult;
  onPurchase: () => void;
  onSubmitEmail: (email: string, name: string) => void;
}

export function ResultsTeaser({ result, onPurchase, onSubmitEmail }: ResultsTeaserProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      onSubmitEmail(email, name);
      setEmailSubmitted(true);
    }
  };

  const handlePurchase = () => {
    setShowPayment(false);
    onPurchase();
  };

  // Email capture screen
  if (!emailSubmitted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-10">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Analysis Complete
            </h2>
            <p className="text-slate-500">
              Your executive profile has been generated.
            </p>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-slate-400 text-sm mb-2 block">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 h-12"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-slate-400 text-sm mb-2 block">Work Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 h-12"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-white text-slate-950 hover:bg-slate-200 font-semibold h-12"
            >
              Continue
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full">
        
        {/* Lock Indicator */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
              <Lock className="w-8 h-8 text-amber-400" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
              <span className="text-xs font-bold text-amber-400">90%</span>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-white text-center mb-4 tracking-tight">
          Your Pattern Is Not Common.
        </h1>

        {/* Validation Paragraph */}
        <p className="text-slate-400 text-center mb-8 max-w-md mx-auto leading-relaxed">
          Your response signature indicates a specific cognitive architecture that appears in fewer than 1 in 8 executives we assess.
        </p>

        {/* Light Preview Insight */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 mb-10 max-w-lg mx-auto">
          <p className="text-slate-300 text-sm leading-relaxed text-center">
            There's a particular way you process trade-offs under pressure that produces fast decisions — and a specific category of error you likely don't recognize as a pattern.
          </p>
        </div>

        {/* Locked Content Indicator */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800">
            <Lock className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-slate-400">90% of Your Executive Profile</span>
            <span className="text-sm text-amber-400 font-medium">Locked</span>
          </div>
        </div>

        {/* What's Inside (Minimal) */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-sm text-slate-500">
          <span>Dimensional Scoring</span>
          <span>•</span>
          <span>Benchmark Analysis</span>
          <span>•</span>
          <span>Strategic Roadmap</span>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => setShowPayment(true)}
            className="bg-white text-slate-950 hover:bg-slate-200 font-semibold px-10 py-6 text-base shadow-lg shadow-white/5"
          >
            <Download className="mr-2 w-5 h-5" />
            Unlock My Executive Profile
          </Button>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-2xl font-semibold text-white">$9.99</span>
            <span className="text-slate-500">One-time</span>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-slate-600 text-sm mt-12">
          Most professionals never access this depth of insight.
        </p>
      </div>

      {/* Payment Dialog */}
      <Dialog open={showPayment} onOpenChange={setShowPayment}>
        <DialogContent className="max-w-md bg-slate-900 border-slate-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">Complete Purchase</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-5 pt-2">
            {/* Single Report */}
            <div className="p-4 bg-slate-950 rounded-lg border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium">{result.testName} Profile</span>
                <span className="text-xl font-semibold">${pricing.individual.single.price}</span>
              </div>
              <ul className="text-sm text-slate-500 space-y-1 mb-4">
                <li>• 25-page executive brief</li>
                <li>• Dimensional analysis</li>
                <li>• Benchmark comparison</li>
              </ul>
              <Button 
                className="w-full bg-white text-slate-950 hover:bg-slate-200 font-semibold"
                onClick={handlePurchase}
              >
                Unlock Profile
              </Button>
            </div>

            {/* Bundle */}
            <div className="p-4 bg-slate-950 rounded-lg border border-amber-500/30">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="font-medium block">Complete Suite</span>
                  <span className="text-xs text-amber-400">All 7 assessments</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-semibold block">${pricing.individual.bundle.price}</span>
                  <span className="text-sm text-slate-500 line-through">${pricing.individual.bundle.originalPrice}</span>
                </div>
              </div>
              <Button 
                variant="outline"
                className="w-full border-slate-700 text-slate-300 hover:bg-slate-800"
                onClick={handlePurchase}
              >
                Get All 7
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
              <Shield className="w-3 h-3" />
              <span>Secure payment via Stripe</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ResultsTeaser;
