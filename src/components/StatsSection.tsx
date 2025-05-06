
import React from 'react';
import Counter from './Counter';
import ScrollReveal from './ScrollReveal';
import { Clock, BarChart, Check, Briefcase } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Clock,
      label: 'Hours Worked',
      value: 23,
      prefix: '4-',
      suffix: ' CET',
    },
    {
      icon: BarChart,
      label: 'Billing Rate',
      value: 150,
      prefix: '100-',
      suffix: ' €',
    },
    {
      icon: Check,
      label: 'Commitment',
      value: 100,
      suffix: '%',
    },
    {
      icon: Briefcase,
      label: 'Travel',
      value: 50,
      suffix: '%',
    },
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 150}>
              <div className="flex flex-col items-center">
                <div className="mb-4 text-accent">
                  <stat.icon size={32} />
                </div>
                <Counter
                  end={stat.value}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix || ''}
                />
                <h3 className="text-lg font-medium mt-2">{stat.label}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
