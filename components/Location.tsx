import Image from 'next/image';

export default function Location() {
  return (
    <section className="location-section">
      <div className="section-container">
        <div className="location-content">
          <div className="location-text">
            <span className="location-label">Find Us</span>
            <h2>
              Visit Our <span className="text-accent">Office</span>
            </h2>
            <p>
              Scan the QR code for instant directions to our office or to save our complete contact
              details to your phone.
            </p>
          </div>
          <div className="qr-container">
            <div className="qr-frame">
              <Image
                src="/qr-code.png"
                alt="QR Code - Scan for location and contact details"
                width={200}
                height={200}
                className="qr-image"
              />
            </div>
            <p className="qr-hint">Scan for location</p>
          </div>
        </div>
      </div>
    </section>
  );
}
