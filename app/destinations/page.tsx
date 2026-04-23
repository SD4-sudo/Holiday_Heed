'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import { DESTINATIONS } from '@/lib/data';

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-surface flex flex-col">
      <Navbar />

      <section className="pt-32 pb-24 flex-grow bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header Section */}
          <div className="flex flex-col items-center text-center mb-16 relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 lg:w-12 bg-primary/30" />
              <span className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-[0.3em]">
                Explore the Valley
              </span>
              <div className="h-px w-8 lg:w-12 bg-primary/30" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif text-on-surface tracking-tight">
              Trending <span className="text-primary italic">Destinations</span>
            </h1>
            <p className="mt-4 text-on-surface-variant text-sm font-medium max-w-lg">
              Immerse yourself in the vibrant culture of Kashmir. Discover hidden gems, delectable cuisine, and unforgettable experiences.
            </p>
          </div>

          {/* Destinations Grid - Wrapped for a full-page layout */}
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 pt-6 pb-4">
            {DESTINATIONS.map((dest) => (
              <Link 
                key={dest.id}
                href={`/packages?destination=${encodeURIComponent(dest.name)}&from=destinations`}
                className="flex flex-col items-center gap-4 group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center gap-4"
                >
                  {/* Circular Image Container - Increased size for desktop view */}
                  <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl border-[6px] border-white group-hover:border-primary transition-colors duration-500">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>
                  
                  <h3 className="text-base md:text-xl font-black text-on-surface tracking-tight group-hover:text-primary transition-colors">
                    {dest.name}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}