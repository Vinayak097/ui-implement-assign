import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: '📚', // Use actual icons or image paths here
    title: 'Database',
    description: 'Every project is a full Postgres database, the world’s most trusted relational database.',
    points: ['100% portable', 'Built-in Auth with RLS', 'Easy to extend'],
  },
  {
    icon: '🔒',
    title: 'Authentication',
    description: 'Add user sign ups and logins, securing your data with Row Level Security.',
    points: [],
  },
  {
    icon: '📝',
    title: 'Edge Functions',
    description: 'Easily write custom code without deploying or scaling servers.',
    points: [],
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
