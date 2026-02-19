import Link from 'next/link';
import type { ReactNode } from 'react';

interface ContactLink {
  text: string;
  href: string;
  external?: boolean;
}

interface ContactCard {
  id: number;
  type: string;
  title: string;
  icon: ReactNode;
  content: ContactLink[] | null;
  address?: {
    line1: string;
    line2: string;
    line3: string;
  };
}

const contactCards: ContactCard[] = [
  {
    id: 1,
    type: 'phone',
    title: 'Phone',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    content: [
      { text: '+91 86194 58053', href: 'tel:+918619458053' },
      { text: '+91 81077 02727', href: 'tel:+918107702727' },
    ],
  },
  {
    id: 2,
    type: 'email',
    title: 'Email',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    content: [{ text: 'rainbowbuilders.enquiry@gmail.com', href: 'mailto:rainbowbuilders.enquiry@gmail.com' }],
  },
  {
    id: 3,
    type: 'instagram',
    title: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    content: [
      {
        text: '@rainbow_builders',
        href: 'https://instagram.com/rainbow_builders',
        external: true,
      },
    ],
  },
  {
    id: 4,
    type: 'address',
    title: 'Office',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    content: null,
    address: {
      line1: 'Plot no. 3-4, Shop no.2, Silver Wings Apartment',
      line2: 'Gyan Vihar Colony, DCM, Ajmer Road',
      line3: 'Jaipur, Rajasthan 302019',
    },
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let&apos;s Build <span className="text-accent">Together</span>
          </h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Ready to bring your vision to life? Connect with our team for consultations and project
            discussions.
          </p>
        </div>
        <div className="contact-wrapper">
          <div className="contact-grid">
            {contactCards.map((card) => (
              <div
                key={card.id}
                className={`contact-card ${card.type === 'address' ? 'contact-address' : ''}`}
              >
                <div className="contact-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                {card.content &&
                  card.content.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="contact-link"
                      {...(item.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {item.text}
                    </Link>
                  ))}
                {card.address && (
                  <address>
                    {card.address.line1}
                    <br />
                    {card.address.line2}
                    <br />
                    {card.address.line3}
                  </address>
                )}
              </div>
            ))}
          </div>
          <div className="contact-cta">
            <Link
              href="https://wa.me/918619458053?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20consultation."
              className="btn btn-primary btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Schedule a Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
