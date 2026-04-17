'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import BookingDialog from './BookingDialog';

const NAV_ITEMS = [
  { name: 'Home', href: '/#hero', id: 'hero' },
  { name: 'Packages', href: '/packages' },
  { name: 'Destinations', href: '/#destinations', id: 'destinations' },
  // { name: 'Category', href: '/#category', id: 'category' },
  { name: 'Testimonials', href: '/#testimonials', id: 'testimonials' },
  { name: 'Contact', href: '/#contact', id: 'contact' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Intersection Observer for sections
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Only observe if on home page
    if (pathname === '/') {
      const sections = ['hero', 'destinations', 'category', 'testimonials', 'contact'];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [pathname]);

  const isActive = (item: typeof NAV_ITEMS[0]) => {
    if (item.href.startsWith('/#')) {
      return pathname === '/' && activeSection === item.id;
    }
    return pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-[60] transition-all duration-300 bg-white ${isScrolled ? 'shadow-sm py-3' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 w-full">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/image.png"
              alt="Holiday Heed Kashmir"
              width={48}
              height={48}
              className="h-auto w-auto max-w-[220px] md:max-w-[220px]"
              priority
            />
            <span className="ml-2 text-primary font-black text-l md:text-xl">Holiday Heed Kashmir</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium text-sm tracking-tight transition-all duration-300 py-1 ${
                    active ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {item.name}
                  {active && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <button 
              onClick={() => setIsBookingOpen(true)} 
              className="hidden md:block px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm tracking-tight transition-all duration-300 shadow-md active:scale-95 whitespace-nowrap cursor-pointer bg-primary text-white hover:bg-primary/90"
            >
              Book Now
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 md:hidden transition-colors duration-300 text-on-surface"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[65] bg-black/5 md:hidden"
            />

            {/* Navbar Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-20 left-0 right-0 w-full z-[70] bg-white shadow-md md:hidden"
            >
              <div className="max-w-7xl mx-auto flex flex-col px-4 py-6 space-y-4">
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-sm font-semibold tracking-tight transition-colors ${
                        active ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}