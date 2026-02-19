import { Building2, Users, BarChart3, Target, Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const enterpriseFeatures = [
  {
    icon: Users,
    title: 'Team-Wide Assessments',
    description: 'Assess entire leadership teams with consolidated reporting and analytics.',
  },
  {
    icon: BarChart3,
    title: 'Composite Profiles',
    description: 'Understand team dynamics, strengths, and development opportunities.',
  },
  {
    icon: Target,
    title: 'Talent Gap Analysis',
    description: 'Identify capability gaps and succession planning needs.',
  },
  {
    icon: Building2,
    title: 'Custom Benchmarks',
    description: 'Compare against industry-specific and role-specific benchmarks.',
  },
];

const enterpriseBenefits = [
  'Unlimited assessments across your organization',
  'Executive team composite profiles',
  'Talent gap and succession planning insights',
  'API access for HRIS integration',
  'Dedicated account manager',
  'Custom benchmark development',
  'Quarterly business reviews',
  'Priority support',
];

export function Enterprise() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    size: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enterprise" className="py-20 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <Building2 className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">For Organizations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Organizational Intelligence
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Empower your entire leadership team with data-driven insights for 
            talent development, succession planning, and organizational effectiveness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Features */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {enterpriseFeatures.map((feature) => (
                <div 
                  key={feature.title}
                  className="p-5 bg-slate-900/50 border border-slate-800 rounded-xl"
                >
                  <feature.icon className="w-8 h-8 text-indigo-400 mb-3" />
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {enterpriseBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8">
            {!submitted ? (
              <>
                <h3 className="text-xl font-bold text-white mb-2">Contact Sales</h3>
                <p className="text-slate-400 mb-6">
                  Get a customized proposal for your organization.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-300">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-600"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-300">Work Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-600"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-slate-300">Company</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company name"
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-600"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="size" className="text-slate-300">Company Size</Label>
                    <select
                      id="size"
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full h-10 px-3 rounded-md bg-slate-800 border border-slate-700 text-white text-sm"
                      required
                    >
                      <option value="">Select size</option>
                      <option value="1-50">1-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1,000 employees</option>
                      <option value="1001-5000">1,001-5,000 employees</option>
                      <option value="5000+">5,000+ employees</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white"
                  >
                    <Mail className="mr-2 w-4 h-4" />
                    Request Proposal
                  </Button>
                </form>

                <p className="text-center text-sm text-slate-500 mt-4">
                  We'll respond within 24 hours.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-slate-400">
                  We've received your inquiry and will be in touch within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Trusted By */}
        <div className="mt-20 text-center">
          <p className="text-sm text-slate-500 mb-6">Trusted by leading organizations</p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-50">
            {['Google', 'McKinsey', 'Goldman Sachs', 'Sequoia', 'Microsoft', 'Amazon'].map((company) => (
              <span key={company} className="text-lg font-semibold text-slate-400">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enterprise;
