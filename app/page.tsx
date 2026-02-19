import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import CTABanner from '@/components/CTABanner';
import BrandStatement from '@/components/BrandStatement';
import Contact from '@/components/Contact';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <CTABanner />
        <BrandStatement />
        <Showcase />
        <Contact />
        <Location />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
