import { useState, useEffect, useRef } from 'react';
import { Check, Cpu, Database, Brain, FileText, Sparkles } from 'lucide-react';

interface LoadingResultsProps {
  onComplete: () => void;
  userName: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  opacity: number;
  color: string;
  speed: number;
}

export function LoadingResults({ onComplete, userName }: LoadingResultsProps) {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const animationRef = useRef<number | null>(null);

  // Initialize particles
  useEffect(() => {
    const initialParticles: Particle[] = [];
    const colors = ['#6366F1', '#8B5CF6', '#A855F7', '#EC4899', '#3B82F6'];
    
    for (let i = 0; i < 80; i++) {
      const angle = (i / 80) * Math.PI * 2;
      const radius = 150 + Math.random() * 100;
      initialParticles.push({
        id: i,
        x: 400 + Math.cos(angle) * radius,
        y: 300 + Math.sin(angle) * radius,
        targetX: 400,
        targetY: 300,
        size: 2 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.7,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 0.02 + Math.random() * 0.03,
      });
    }
    setParticles(initialParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return;

    const animate = () => {
      setParticles(prev => prev.map(p => {
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 5) {
          // Particle reached center, respawn at edge
          const angle = Math.random() * Math.PI * 2;
          const radius = 200 + Math.random() * 50;
          return {
            ...p,
            x: 400 + Math.cos(angle) * radius,
            y: 300 + Math.sin(angle) * radius,
          };
        }
        
        return {
          ...p,
          x: p.x + dx * p.speed,
          y: p.y + dy * p.speed,
        };
      }));
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles.length]);

  // Progress through stages
  useEffect(() => {
    const stages = [
      { duration: 1500, message: 'Collecting response data...' },
      { duration: 2000, message: 'Analyzing behavioral patterns...' },
      { duration: 1800, message: 'Cross-referencing executive benchmarks...' },
      { duration: 2200, message: 'Generating dimensional profile...' },
      { duration: 1500, message: 'Compiling strategic intelligence...' },
    ];

    let currentStage = 0;
    let totalProgress = 0;

    const runStage = () => {
      if (currentStage >= stages.length) {
        setShowSuccess(true);
        setTimeout(() => {
          onComplete();
        }, 1500);
        return;
      }

      setStage(currentStage);
      const stageProgress = 100 / stages.length;
      const increment = stageProgress / (stages[currentStage].duration / 50);
      
      const interval = setInterval(() => {
        totalProgress += increment;
        setProgress(Math.min(totalProgress, 100));
        
        if (totalProgress >= (currentStage + 1) * stageProgress) {
          clearInterval(interval);
          currentStage++;
          runStage();
        }
      }, 50);
    };

    runStage();
  }, [onComplete]);

  const stageMessages = [
    'Collecting response data...',
    'Analyzing behavioral patterns...',
    'Cross-referencing executive benchmarks...',
    'Generating dimensional profile...',
    'Compiling strategic intelligence...',
  ];

  const stageIcons = [Database, Brain, Cpu, Sparkles, FileText];
  const StageIcon = stageIcons[stage] || FileText;

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Main Animation Container */}
        <div className="relative mb-8">
          {/* Particle Canvas */}
          <div className="relative w-80 h-80 mx-auto">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-slate-800 animate-pulse" />
            <div 
              className="absolute inset-4 rounded-full border border-indigo-500/20"
              style={{ animation: 'spin 20s linear infinite' }}
            />
            
            {/* SVG Particles */}
            <svg 
              viewBox="0 0 800 600" 
              className="absolute inset-0 w-full h-full"
              style={{ transform: 'scale(0.4)', transformOrigin: 'center' }}
            >
              {/* Connection lines */}
              {particles.slice(0, 30).map((p, i) => (
                <line
                  key={`line-${i}`}
                  x1={p.x}
                  y1={p.y}
                  x2={400}
                  y2={300}
                  stroke={p.color}
                  strokeWidth="0.5"
                  opacity={p.opacity * 0.3}
                />
              ))}
              
              {/* Particles */}
              {particles.map(p => (
                <circle
                  key={p.id}
                  cx={p.x}
                  cy={p.y}
                  r={p.size}
                  fill={p.color}
                  opacity={p.opacity}
                />
              ))}
              
              {/* Center Core */}
              <circle
                cx={400}
                cy={300}
                r={30 + progress * 0.2}
                fill="url(#coreGradient)"
                opacity={0.8}
              />
              
              {/* Glow Effect */}
              <circle
                cx={400}
                cy={300}
                r={50 + progress * 0.3}
                fill="none"
                stroke="url(#glowGradient)"
                strokeWidth="2"
                opacity={0.5}
              />
              
              {/* Gradients */}
              <defs>
                <radialGradient id="coreGradient">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#EC4899" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`relative transition-all duration-500 ${showSuccess ? 'scale-150' : 'scale-100'}`}>
                {showSuccess ? (
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center animate-bounce">
                    <Check className="w-10 h-10 text-emerald-400" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center animate-pulse">
                    <StageIcon className="w-8 h-8 text-indigo-400" />
                  </div>
                )}
              </div>
            </div>
            
            {/* Orbiting Dots */}
            {!showSuccess && (
              <>
                <div 
                  className="absolute w-3 h-3 rounded-full bg-indigo-400"
                  style={{
                    top: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'orbit 8s linear infinite',
                    transformOrigin: '0 140px',
                  }}
                />
                <div 
                  className="absolute w-2 h-2 rounded-full bg-violet-400"
                  style={{
                    top: '50%',
                    right: '10%',
                    animation: 'orbit 12s linear infinite reverse',
                    transformOrigin: '-100px 0',
                  }}
                />
                <div 
                  className="absolute w-2 h-2 rounded-full bg-pink-400"
                  style={{
                    bottom: '15%',
                    left: '20%',
                    animation: 'orbit 10s linear infinite',
                    transformOrigin: '80px -80px',
                  }}
                />
              </>
            )}
          </div>
        </div>

        {/* Progress Info */}
        <div className="text-center space-y-4">
          {/* Status Message */}
          <div className="h-8">
            {!showSuccess && (
              <p className="text-indigo-300 font-medium animate-pulse">
                {stageMessages[stage]}
              </p>
            )}
            {showSuccess && (
              <p className="text-emerald-400 font-medium">
                Analysis complete. Your intelligence brief is ready.
              </p>
            )}
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-slate-500 mb-2">
              <span>Processing</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Processing Steps */}
          <div className="flex justify-center gap-2 mt-6">
            {stageMessages.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx < stage 
                    ? 'bg-emerald-400' 
                    : idx === stage 
                    ? 'bg-indigo-400 animate-pulse' 
                    : 'bg-slate-700'
                }`}
              />
            ))}
          </div>

          {/* Technical Details */}
          {!showSuccess && (
            <div className="mt-8 p-4 bg-slate-900/50 border border-slate-800 rounded-xl max-w-sm mx-auto">
              <div className="grid grid-cols-2 gap-4 text-xs text-slate-500">
                <div>
                  <span className="block text-slate-600">Data Points</span>
                  <span className="text-indigo-400 font-mono">{Math.round(progress * 4.2)}K</span>
                </div>
                <div>
                  <span className="block text-slate-600">Benchmarks</span>
                  <span className="text-indigo-400 font-mono">500K+</span>
                </div>
                <div>
                  <span className="block text-slate-600">Dimensions</span>
                  <span className="text-indigo-400 font-mono">5</span>
                </div>
                <div>
                  <span className="block text-slate-600">Confidence</span>
                  <span className="text-indigo-400 font-mono">{(89 + progress * 0.1).toFixed(1)}%</span>
                </div>
              </div>
            </div>
          )}

          {/* User Name */}
          {showSuccess && (
            <div className="mt-6 animate-fade-in">
              <p className="text-slate-400 text-sm">
                Prepared for
              </p>
              <p className="text-white font-semibold text-lg">
                {userName || 'Executive Profile'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default LoadingResults;
