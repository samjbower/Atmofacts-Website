export const metadata = {
  title: 'Legal notice'
};

const terms = `AtmoFacts™, FluxMapper™, FluxMapping™, FluxMap™, Flux Tower Multiplier™, Virtual Flux Tower™, Process Mining™, Environmental Response Function™, Where every molecule meets its map™, From towers to terrain – high-resolution flux mapping made simple™, High-resolution flux maps for real-world accountability.™, FluxMapper brings eddy-covariance into the 21st century.™ are trademarks of AtmoFacts LLC founded on October 31, 2023, by Stefan Metzger.

AtmoFacts™ may include scientific software, software as a service, environmental science services or other offerings covered by the mark. This serves as the public disclosure of common law trademarks with global coverage. Patents and registered trademarks are pending. All rights reserved. October 31, 2023. For questions please contact info@atmofacts.com.`;

export default function LegalPage() {
  return (
    <section>
      <div className="page-container">
        <div className="content-card">
          <h1 className="section-title">Legal notice</h1>
          {terms.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
