import Image from 'next/image';

const showcaseItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    alt: 'Construction site',
    label: 'On-Site Excellence',
    large: true,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
    alt: 'Architectural planning',
    label: 'Precision Planning',
    large: false,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
    alt: 'Building structure',
    label: 'Structural Integrity',
    large: false,
  },
];

export default function Showcase() {
  return (
    <section className="showcase">
      <div className="showcase-grid">
        {showcaseItems.map((item) => (
          <div
            key={item.id}
            className={`showcase-item ${item.large ? 'showcase-large' : ''}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={item.large ? '(max-width: 640px) 100vw, 50vw' : '(max-width: 640px) 100vw, 33vw'}
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
            <div className="showcase-overlay">
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
