import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-brand">
            <Image
              src="/logo.jpeg"
              alt="Rainbow Construction Logo"
              width={44}
              height={44}
              className="logo-mark"
            />
            <div className="footer-text">
              <span className="footer-name">Rainbow Construction</span>
              <span className="footer-tagline">Building Excellence Since 2013</span>
            </div>
          </div>
          <div className="footer-links">
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
            <Link href="tel:+919876543210">Call Us</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {currentYear} Rainbow Construction Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
