import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import Services from '@/components/Services';
import BrandStatement from '@/components/BrandStatement';
import Contact from '@/components/Contact';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Showcase />
        <Services />
        <BrandStatement />
        <Contact />
        <Location />
      </main>
      <Footer />
    </>
  );
}
