import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner-content">
        <h2 className="cta-banner-heading">
          Ready to Start Your <span className="text-accent">Project?</span>
        </h2>
        <p className="cta-banner-text">
          Get a free consultation and quote for your construction project. Our team is ready to
          bring your vision to life.
        </p>
        <div className="cta-banner-actions">
          <Link href="tel:+918619458053" className="btn btn-primary btn-large">
            <span>&#9742; Call Now</span>
          </Link>
          <Link
            href="https://wa.me/918619458053?text=Hi%2C%20I%20would%20like%20to%20request%20a%20quote."
            className="btn btn-ghost-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Request a Quote</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
