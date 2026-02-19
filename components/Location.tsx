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
              <div className="qr-placeholder">
                <span>QR</span>
              </div>
            </div>
            <p className="qr-hint">Scan for location</p>
          </div>
        </div>
      </div>
    </section>
  );
}
