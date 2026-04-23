'use client';

import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface flex flex-col">
      <Navbar />

      <section className="pt-32 pb-20 flex-grow bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Section */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px w-6 lg:w-10 bg-primary/30" />
              <span className="text-[9px] lg:text-[10px] font-black text-primary uppercase tracking-[0.3em]">
                Start Your Journey
              </span>
              <div className="h-px w-6 lg:w-10 bg-primary/30" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif text-on-surface tracking-tight">
              Get In <span className="text-primary italic">Touch</span>
            </h1>
          </div>

          {/* Main Card Container */}
          <div className="bg-white rounded-[1.5rem] lg:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-200 max-w-6xl mx-auto">
            
            {/* Left Side: Contact Info */}
            <div className="lg:w-[40%] bg-gradient-to-br from-primary to-primary-container p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-5"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-white opacity-5"></div>

              <div className="relative h-full flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-black mb-2 leading-none">Contact Info</h3>
                <p className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mb-10">Consult with us!</p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md shrink-0 group-hover:bg-white/20 transition-colors shadow-inner">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest mb-1.5">Office Address</h4>
                      <p className="text-white/80 text-xs leading-relaxed max-w-[240px]">
                        {/* Insert your address here */}
                        Srinagar, Jammu and Kashmir, India
                      </p>
                    </div>
                  </div>

                  <div 
                    className="flex items-start gap-4 group cursor-pointer" 
                    onClick={() => window.location.href = 'mailto:bookings@holidayheadkashmir.in'}
                  >
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md shrink-0 group-hover:bg-white/20 transition-colors shadow-inner">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest mb-1.5">Email Support</h4>
                      <p className="text-white/80 text-xs hover:text-white transition-colors">bookings@holidayheadkashmir.in</p>
                    </div>
                  </div>

                  <div 
                    className="flex items-start gap-4 group cursor-pointer" 
                    onClick={() => window.location.href = 'tel:+917006787978'}
                  >
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md shrink-0 group-hover:bg-white/20 transition-colors shadow-inner">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest mb-1.5">Direct Call</h4>
                      <p className="text-white/80 text-xs hover:text-white transition-colors">+91 7006 787 978<br/>+91 9596 492 124</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-[60%] bg-white p-2">
              {/* We use a trick here: Since ContactForm now has built-in shadows and borders from your 
                previous request, we pass compact={true} to shrink its padding, but we also wrap it in a div 
                to contain it nicely inside this larger page-level card layout.
              */}
              <div className="h-full w-full border-none shadow-none [&>div]:shadow-none [&>div]:border-none [&>div]:bg-transparent">
                <ContactForm compact={false} />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}