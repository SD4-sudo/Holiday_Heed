import Header from '@/components/Header';
import Hero from '@/components/Hero';

import PopularPackages from '@/components/PopularPackages';
import CategoryPackages from '@/components/CategoryPackages';
import SeasonGuide from '@/components/SeasonGuide';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import PopularPlaces from '@/components/PopularPlaces';
import Footer from '@/components/Footer';
import CallButton from '@/components/CallButton';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PopularPackages />
      {/* <CategoryPackages /> */}
      {/* <TrendingEscapes /> */}
      <SeasonGuide />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Analytics />
      <SpeedInsights />
      <PopularPlaces />
      <Footer />
      <CallButton />
      <WhatsAppButton />
    </main>
  );
}
