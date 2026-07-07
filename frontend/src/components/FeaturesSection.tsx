'use client';

import { BarChart3, MapPin, Zap, Shield, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: <BarChart3 size={32} />,
    title: 'Smart Recommendations',
    description: 'Get properties that match your budget and investment goals',
  },
  {
    icon: <MapPin size={32} />,
    title: 'Verified Properties',
    description: 'Only carefully selected, income-generating properties',
  },
  {
    icon: <Zap size={32} />,
    title: 'Easy to Start',
    description: 'Start investing with as little as you can afford',
  },
  {
    icon: <Shield size={32} />,
    title: 'Secure Transactions',
    description: 'Bank-level security for all your investments',
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Track Returns',
    description: 'Monitor your investments and rental income in real-time',
  },
  {
    icon: <Users size={32} />,
    title: '24/7 Support',
    description: 'AI assistant and customer support always available',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Moda5ar?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Making real estate investment accessible, affordable, and transparent for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
