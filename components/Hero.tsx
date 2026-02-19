'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    // Parallax effect for hero background
    const heroBg = heroRef.current?.querySelector('.hero-bg-image') as HTMLElement;
    
    const handleScroll = () => {
      if (heroBg && window.scrollY < window.innerHeight) {
        heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Counter animation
    const animateCounter = (el: HTMLElement, target: number) => {
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          current = target;
        }
        el.innerHTML = `${Math.floor(current)}<sup>+</sup>`;
      }, 16);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const stats = statsRef.current?.querySelectorAll('.stat-number');
            stats?.forEach((stat) => {
              const text = stat.textContent || '';
              const match = text.match(/(\d+)/);
              if (match) {
                const target = parseInt(match[0], 10);
                animateCounter(stat as HTMLElement, target);
              }
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contact = document.querySelector('#contact');
    if (contact) {
      const headerHeight = 80;
      const targetPosition = contact.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-background">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
          alt="Modern architecture"
          fill
          className="hero-bg-image"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          sizes="100vw"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge fade-in visible">Excellence Since 2013</div>
        <h2 className="hero-heading fade-in visible">
          Crafting Landmarks.
          <br />
          <span className="text-accent">Building Legacies.</span>
        </h2>
        <p className="hero-description fade-in visible">
          We transform ambitious visions into architectural masterpieces. From bespoke residences
          to landmark commercial spaces, every structure we build stands as a testament to
          uncompromising quality.
        </p>
        <div className="hero-actions fade-in visible">
          <a href="#contact" className="btn btn-primary" onClick={scrollToContact}>
            <span>Start Your Project</span>
          </a>
          <Link href="tel:+919876543210" className="btn btn-ghost">
            <span className="btn-icon">&#9742;</span> Call Now
          </Link>
        </div>
      </div>
      <div ref={statsRef} className="hero-stats">
        <div className="stat fade-in visible">
          <span className="stat-number">
            12<sup>+</sup>
          </span>
          <span className="stat-label">Years of Excellence</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat fade-in visible">
          <span className="stat-number">
            200<sup>+</sup>
          </span>
          <span className="stat-label">Projects Delivered</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat fade-in visible">
          <span className="stat-number">
            50<sup>+</sup>
          </span>
          <span className="stat-label">Active Projects</span>
        </div>
      </div>
    </section>
  );
}
