import { ClipboardList, Brain, Lock, FileText, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Choose Your Assessment',
    description: 'Select from seven scientifically validated executive intelligence assessments. Each takes 10-15 minutes to complete.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    number: '02',
    title: 'Complete the Assessment',
    description: 'Answer 40 carefully designed questions using our Likert scale. Your responses are analyzed against global executive benchmarks.',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Lock,
    number: '03',
    title: 'Unlock Your Results',
    description: 'Get your personalized 25+ page executive report with detailed insights, archetype classification, and strategic recommendations.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: FileText,
    number: '04',
    title: 'Review Your Report',
    description: 'Access your comprehensive PDF report with executive summary, dimension analysis, benchmark comparisons, and growth roadmap.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    number: '05',
    title: 'Accelerate Your Growth',
    description: 'Implement the personalized recommendations and track your progress. Reassess annually to measure your development.',
    color: 'from-pink-500 to-rose-500',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Five simple steps to unlock your executive intelligence profile and 
            receive actionable insights for accelerated growth.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-pink-500/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 h-full hover:border-slate-700 transition-colors">
                  {/* Number Badge */}
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${step.color} text-white font-bold text-sm mb-4`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} bg-opacity-10 flex items-center justify-center mb-4`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-slate-800" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid sm:grid-cols-3 gap-6">
          {[
            { value: '15 minutes', label: 'Average completion time' },
            { value: '25+ pages', label: 'Comprehensive report length' },
            { value: '500K+', label: 'Executives in benchmark database' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-slate-900/30 rounded-xl border border-slate-800">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
