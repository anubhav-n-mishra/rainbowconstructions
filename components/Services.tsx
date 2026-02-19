const services = [
  {
    id: 1,
    number: '01',
    title: 'Luxury Residential Villas & Homes',
    description:
      'Bespoke living spaces crafted to reflect your lifestyle. From sprawling independent villas to elegant modern homes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Premium Apartments & Buildings',
    description:
      'Multi-storey residential complexes with contemporary amenities and structural excellence for refined urban living.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0H5m14 0h2m-16 0H3m2-10h4m-4 4h4m6-4h4m-4 4h4" />
      </svg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Hospitals & Healthcare Facilities',
    description:
      'Specialized infrastructure for healthcare, built to the highest standards of safety, hygiene, and regulatory compliance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Corporate Offices & Commercial Spaces',
    description:
      'Professional environments designed to inspire productivity, from corporate headquarters to retail destinations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 21H3V3h18v18zM9 21V9h6v12M3 9h18" />
      </svg>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Industrial & Factory Construction',
    description:
      'Large-scale industrial infrastructure including warehouses, manufacturing plants, and specialized facilities.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20h20M4 20V8l8-5 8 5v12M8 20v-4h8v4M10 9h4v3h-4z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Our Expertise</span>
          <h2 className="section-title">
            What We <span className="text-accent">Build</span>
          </h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Comprehensive construction solutions across residential, commercial, and industrial
            sectors, delivered with precision and an unwavering commitment to quality.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
              <div className="service-number">{service.number}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
