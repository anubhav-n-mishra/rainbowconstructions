'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';

interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 'hospital',
    title: 'Hospital',
    description: 'Modern healthcare facility built to the highest standards of safety and compliance.',
    coverImage: '/images-rainbow/hospital/IMG_8112.JPG',
    images: [
      '/images-rainbow/hospital/IMG_8045.JPG',
      '/images-rainbow/hospital/IMG_8048.JPG',
      '/images-rainbow/hospital/IMG_8050.JPG',
      '/images-rainbow/hospital/IMG_8054.JPG',
      '/images-rainbow/hospital/IMG_8063.JPG',
      '/images-rainbow/hospital/IMG_8069.JPG',
      '/images-rainbow/hospital/IMG_8072.JPG',
      '/images-rainbow/hospital/IMG_8073.JPG',
      '/images-rainbow/hospital/IMG_8074.JPG',
      '/images-rainbow/hospital/IMG_8075.JPG',
      '/images-rainbow/hospital/IMG_8078.JPG',
      '/images-rainbow/hospital/IMG_8080.JPG',
      '/images-rainbow/hospital/IMG_8085.JPG',
      '/images-rainbow/hospital/IMG_8086.JPG',
      '/images-rainbow/hospital/IMG_8089.JPG',
      '/images-rainbow/hospital/IMG_8090.JPG',
      '/images-rainbow/hospital/IMG_8092.JPG',
      '/images-rainbow/hospital/IMG_8093.JPG',
      '/images-rainbow/hospital/IMG_8094.JPG',
      '/images-rainbow/hospital/IMG_8098.JPG',
      '/images-rainbow/hospital/IMG_8099.JPG',
      '/images-rainbow/hospital/IMG_8103.JPG',
      '/images-rainbow/hospital/IMG_8104.JPG',
      '/images-rainbow/hospital/IMG_8105.JPG',
      '/images-rainbow/hospital/IMG_8108.JPG',
      '/images-rainbow/hospital/IMG_8110.JPG',
      '/images-rainbow/hospital/IMG_8112.JPG',
      '/images-rainbow/hospital/IMG_8126.JPG',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 'shop',
    title: 'Shop',
    description: 'Premium commercial retail space with contemporary design and robust construction.',
    coverImage: '/images-rainbow/shop/IMG_8118.JPG',
    images: [
      '/images-rainbow/shop/IMG_8118.JPG',
      '/images-rainbow/shop/IMG_8119.JPG',
      '/images-rainbow/shop/IMG_8120.JPG',
      '/images-rainbow/shop/IMG_8121.JPG',
      '/images-rainbow/shop/IMG_8122.JPG',
      '/images-rainbow/shop/IMG_8123.JPG',
      '/images-rainbow/shop/IMG_8124.JPG',
      '/images-rainbow/shop/IMG_8125.JPG',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 21H3V3h18v18zM9 21V9h6v12M3 9h18" />
      </svg>
    ),
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = useCallback((direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 340;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Our <span className="text-accent">Projects</span>
          </h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Explore our completed projects across diverse sectors. Each build reflects our
            commitment to quality craftsmanship and architectural excellence.
          </p>
        </div>

        {/* Carousel */}
        <div className="projects-carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={() => scrollCarousel('left')}
            aria-label="Scroll left"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="projects-carousel" ref={carouselRef}>
            {projects.map((project) => (
              <button
                key={project.id}
                className="project-card"
                onClick={() => setActiveProject(project)}
                aria-label={`View ${project.title} project images`}
              >
                <div className="project-card-image">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 80vw, 320px"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="project-card-overlay">
                    <span className="project-card-view">View Gallery</span>
                  </div>
                </div>
                <div className="project-card-body">
                  <div className="project-card-icon">{project.icon}</div>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>
                  <span className="project-card-count">
                    {project.images.length} Photos
                  </span>
                </div>
              </button>
            ))}
          </div>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={() => scrollCarousel('right')}
            aria-label="Scroll right"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {activeProject && (
        <Lightbox
          images={activeProject.images}
          title={activeProject.title}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
