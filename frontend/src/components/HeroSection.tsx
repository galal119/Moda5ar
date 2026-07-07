'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Invest in Real Estate, One Share at a Time
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Moda5ar makes property ownership accessible to everyone through fractional shares in premium, income-generating real estate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/properties" className="btn bg-white text-blue-600 hover:bg-gray-100 font-semibold inline-flex items-center gap-2">
                Start Investing
                <ArrowRight size={20} />
              </Link>
              <Link href="/how-it-works" className="btn border-2 border-white text-white hover:bg-blue-700 font-semibold">
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-center">[Hero Image - Premium Properties]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
