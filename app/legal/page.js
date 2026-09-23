export const metadata = {
  title: 'Legal notice'
};

const terms = `AtmoFacts™, FluxMapper™, FluxMapping™, FluxMap™, Flux Tower Multiplier™, Virtual Flux Tower™, Process Mining™, Environmental Response Function™, Where every molecule meets its map™, From towers to terrain – high-resolution flux mapping made simple™, High-resolution flux maps for real-world accountability.™, FluxMapper brings eddy-covariance into the 21st century.™ are trademarks of AtmoFacts LLC founded on October 31, 2023, by Stefan Metzger.

AtmoFacts™ may include scientific software, software as a service, environmental science services or other offerings covered by the mark. This serves as the public disclosure of common law trademarks with global coverage. Patents and registered trademarks are pending. All rights reserved. October 31, 2023. For questions please contact info@atmofacts.com.`;

const photoCredits = [
  'Aerial farm fields: "Paddy fields in Butte County" by Frank Schulenburg, CC BY-SA 4.0, via Wikimedia Commons.',
  'Rangeland: "Sauerbier Ranches’ Rangeland" by USDA NRCS, public domain, via Wikimedia Commons.',
  'Forest research tower: "NEON DEJU Tower" by Mbdfar, CC0, via Wikimedia Commons.',
  'Denver skyline with sunflowers: "Skyline and Sunflowers" by USFWS Mountain-Prairie, CC BY 2.0, via Wikimedia Commons.'
];

export default function LegalPage() {
  return (
    <section className="page-section" style={{ paddingBottom: 'clamp(3rem, 7vw, 5.5rem)' }}>
      <div className="page-container--narrow">
        <div className="page-header">
          <span className="eyebrow">Legal</span>
          <h1>Legal notice</h1>
        </div>
        <div className="content-card">
          {terms.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
          <h2 style={{ fontSize: '1.2rem', marginTop: '2rem' }}>Photo credits</h2>
          <ul style={{ paddingLeft: '1.25rem', color: 'var(--ink-soft)', fontSize: '0.95rem' }}>
            {photoCredits.map((credit, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem' }}>
                {credit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
