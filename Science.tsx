import { Microscope, BookOpen, Award, BarChart3, Shield } from 'lucide-react';

const frameworks = [
  {
    name: "Big Five Personality Model",
    authors: "Costa & McCrae",
    application: "Workplace Temperament Assessment",
    reliability: "0.90+",
  },
  {
    name: "Emotional Intelligence Framework",
    authors: "Goleman, Boyatzis & McKee",
    application: "EQ Assessment",
    reliability: "0.92",
  },
  {
    name: "Strategic Thinking Framework",
    authors: "Liedtka & Rosenblum",
    application: "Strategic IQ Assessment",
    reliability: "0.89",
  },
  {
    name: "Transformational Leadership Theory",
    authors: "Bass & Avolio",
    application: "Executive Leadership Assessment",
    reliability: "0.91",
  },
  {
    name: "Theory of Needs",
    authors: "McClelland",
    application: "Professional DNA Assessment",
    reliability: "0.88",
  },
  {
    name: "Executive Presence Model",
    authors: "Hewlett & colleagues",
    application: "Executive Presence Assessment",
    reliability: "0.89",
  },
];

const validationStats = [
  { value: '500K+', label: 'Assessment Completions' },
  { value: '0.89+', label: 'Average Reliability (Cronbach\'s α)' },
  { value: '98%', label: 'Test-Retest Consistency' },
  { value: '50+', label: 'Peer-Reviewed Studies' },
];

export function Science() {
  return (
    <section id="science" className="py-20 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <Microscope className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">Scientific Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built on Validated Science
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Every assessment is grounded in peer-reviewed psychometric research, 
            ensuring accurate, reliable, and actionable insights.
          </p>
        </div>

        {/* Validation Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {validationStats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <div className="text-3xl lg:text-4xl font-bold text-indigo-400 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Frameworks Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            Theoretical Foundations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {frameworks.map((framework) => (
              <div 
                key={framework.name}
                className="p-5 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-indigo-500/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-white">{framework.name}</h4>
                  <div className="flex items-center gap-1 text-xs text-emerald-400">
                    <BarChart3 className="w-3 h-3" />
                    α = {framework.reliability}
                  </div>
                </div>
                <p className="text-sm text-slate-500 mb-2">{framework.authors}</p>
                <p className="text-sm text-indigo-400">{framework.application}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Validation Process</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Item analysis for discriminatory power',
                'Factor analysis for construct validity',
                'Cronbach\'s alpha for internal consistency',
                'Test-retest reliability assessment',
                'Criterion validity against performance data',
                'Cross-cultural validation studies',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Data & Privacy</h3>
            </div>
            <ul className="space-y-3">
              {[
                'SOC 2 Type II certified infrastructure',
                'GDPR and CCPA compliant',
                'End-to-end encryption for all data',
                'Anonymized benchmark aggregation',
                'No sale of personal data',
                'Right to deletion and portability',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Research Citation */}
        <div className="mt-12 p-6 bg-slate-900/30 rounded-xl border border-slate-800">
          <p className="text-sm text-slate-500 leading-relaxed">
            <strong className="text-slate-400">Research Foundation:</strong> Our assessments integrate 
            findings from over 50 peer-reviewed studies in organizational psychology, leadership research, 
            and psychometric validation. Key references include Costa & McCrae (1992) on personality structure, 
            Goleman (1998) on emotional intelligence, Liedtka (1998) on strategic thinking, Bass (1985) on 
            transformational leadership, and Hewlett et al. (2014) on executive presence. Full bibliography 
            available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Science;
