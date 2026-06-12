'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Compass } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-surface flex flex-col justify-between">
      <Header />

      <section className="pt-32 pb-20 flex-grow flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 flex flex-col items-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 animate-bounce">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>

          {/* <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2">
            Submission Successful
          </span> */}
          <h1 className="text-4xl sm:text-5xl font-serif text-on-surface tracking-tight mb-4">
            <span className="text-primary italic">Thank You</span>
          </h1>

          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-md mb-8">
            Your inquiry has been Received. A travel specialist from Holiday Heed will reach you shortly to customize your perfect itinerary.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/"
              className="px-6 py-3.5 bg-primary hover:bg-primary/95 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/packages"
              className="px-6 py-3.5 bg-surface hover:bg-gray-100 text-on-surface text-xs font-black uppercase tracking-widest rounded-xl transition-all border border-gray-200 flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-primary" />
              Explore Packages
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
