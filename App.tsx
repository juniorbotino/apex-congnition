import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { LoadingResults } from '@/sections/LoadingResults';
import { 
  Hero, 
  TestGrid, 
  TestInterface, 
  ResultsTeaser, 
  HowItWorks, 
  Science, 
  Enterprise, 
  Footer 
} from '@/sections';
import { getTestById } from '@/data/tests';
import type { Test, TestResult } from '@/types';
import { Toaster } from '@/components/ui/sonner';

type AppView = 'landing' | 'test' | 'loading' | 'results';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('landing');
  const [activeTest, setActiveTest] = useState<Test | null>(null);
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  const handleStartTest = (testId: string) => {
    const test = getTestById(testId);
    if (test) {
      setActiveTest(test as Test);
      setCurrentView('test');
      window.scrollTo(0, 0);
    }
  };

  const handleTestComplete = (result: TestResult) => {
    setTestResult(result);
    setUserInfo({ ...userInfo, name: result.userName });
    setCurrentView('loading');
    window.scrollTo(0, 0);
  };

  const handleLoadingComplete = () => {
    setCurrentView('results');
    window.scrollTo(0, 0);
  };

  const handleExitTest = () => {
    setActiveTest(null);
    setCurrentView('landing');
    window.scrollTo(0, 0);
  };

  const handleSubmitEmail = (email: string, name: string) => {
    setUserInfo({ email, name });
    // In a real app, this would save to backend
    console.log('User info captured:', { email, name });
  };

  const handlePurchase = () => {
    // In a real app, this would integrate with Stripe
    alert('Stripe integration would open here. For demo purposes, the report is unlocked!');
    // After successful payment, redirect to full report or download
  };

  const renderContent = () => {
    switch (currentView) {
      case 'test':
        if (!activeTest) return null;
        return (
          <TestInterface
            test={activeTest}
            userName={userInfo.name || 'Leader'}
            userEmail={userInfo.email || ''}
            onComplete={handleTestComplete}
            onExit={handleExitTest}
          />
        );

      case 'loading':
        return (
          <LoadingResults 
            onComplete={handleLoadingComplete}
            userName={testResult?.userName || userInfo.name || 'Leader'}
          />
        );
      
      case 'results':
        if (!testResult) return null;
        return (
          <ResultsTeaser
            result={testResult}
            onPurchase={handlePurchase}
            onSubmitEmail={handleSubmitEmail}
          />
        );
      
      case 'landing':
      default:
        return (
          <>
            <Hero />
            <TestGrid onStartTest={handleStartTest} />
            <HowItWorks />
            <Science />
            <Enterprise />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {currentView === 'landing' && <Navigation />}
      <main>
        {renderContent()}
      </main>
      <Toaster />
    </div>
  );
}

export default App;
