'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function BrandStatement() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const brandBg = sectionRef.current?.querySelector('.brand-bg-image') as HTMLElement;
    const brandSection = sectionRef.current;

    if (!brandBg || !brandSection) return;

    const handleScroll = () => {
      const brandTop = brandSection.offsetTop;
      const brandHeight = brandSection.offsetHeight;
      const scrolled = window.pageYOffset;

      if (scrolled > brandTop - window.innerHeight && scrolled < brandTop + brandHeight) {
        const relativeScroll = scrolled - brandTop + window.innerHeight;
        brandBg.style.transform = `translateY(${relativeScroll * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="brand-statement">
      <div className="brand-background">
        <Image
          src="https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=1600&q=80"
          alt="Architectural detail"
          fill
          className="brand-bg-image"
          style={{ objectFit: 'cover' }}
          loading="lazy"
          sizes="100vw"
        />
        <div className="brand-overlay"></div>
      </div>
      <div className="brand-content">
        <div className="brand-words">
          <span className="brand-word">
            Style<span className="brand-dot">.</span>
          </span>
          <span className="brand-word">
            Strength<span className="brand-dot">.</span>
          </span>
          <span className="brand-word">
            Sophistication<span className="brand-dot">.</span>
          </span>
        </div>
        <p className="brand-tagline">Where vision meets precision</p>
      </div>
    </section>
  );
}
