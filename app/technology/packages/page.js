import Image from 'next/image';

const offerings = [
  {
    title: 'FluxMapper™ On-Demand',
    badge: 'Available now',
    body: 'Run FluxMapper™ from a secure virtual machine. Connect directly to NEON towers, upload your raw data and receive spatial flux outputs in minutes.',
    cta: { label: 'Launch beta', href: 'https://fluxmapper-on-demand-940343585807.us-central1.run.app' }
  },
  {
    title: 'Flux Mapping as-a-Service',
    badge: 'Custom engagements',
    body: 'Need bespoke deliverables? We build full work packages for MRV pilots, methane surveys, ecosystem studies and more.',
    cta: { label: 'Contact us', href: '/contact', internal: true }
  },
  {
    title: 'FluxMapper in LI-COR Cloud',
    badge: 'Accessible worldwide',
    body: 'Access FluxMapper™ directly through the LI-COR Cloud platform. Seamlessly integrate with your existing LI-COR instruments and workflows for streamlined data processing.',
    cta: { label: 'Learn more', href: 'https://www.licor.com', external: true }
  }
];

const highlights = [
  {
    title: 'Precision in every second',
    body:
      'Eddy covariance captures thousands of measurements every second. FluxMapper™ traces each of those data points back to a pixel in space and time, revealing how gases move across your landscape.'
  },
  {
    title: 'Spatial intelligence for accountability',
    body:
      'Instead of collapsing data into single averages, FluxMapper™ lights up the environmental stage. You see emission hotspots, sequestration zones and the influence of infrastructure.'
  },
  {
    title: 'From raw data to real-world action',
    body:
      'FluxMapper can deliver defensible and actionable insights at property and project scales.'
  }
];

export const metadata = {
  title: 'FluxMapper delivery packages'
};

export default function PackagesPage() {
  return (
    <>
      <style>{`
        .tech-section {
          background-color: #ffffff;
          color: #1b1b1b;
          padding: 0;
        }

        .tech-header {
          text-align: left;
          border-left: 6px solid #ed7124ff;
          padding-left: 1.5rem;
          margin-bottom: 2rem;
          color: #1b1b1b;
        }

        .tech-intro-box {
          background: none;
          border: none;
          box-shadow: none;
          padding: 0;
          margin-bottom: 3rem;
          color: #1b1b1b;
        }

        .tech-intro-box h1 {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .tech-intro-box p {
          font-size: 1rem;
          line-height: 1.6;
          color: #555555;
          text-align: left;
          margin-bottom: 1.5rem;
        }

        .offerings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 7rem;
        }

        .offering-card {
          background: transparent;
          border-top: 4px solid #ed7124;
          border-radius: 0;
          padding: 0;
          padding-top: 1.5rem;
          box-shadow: none;
          color: #1b1b1b;
        }

        .offering-card .badge {
          font-size: 0.75rem;
          color: #ed7124;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
          display: block;
        }

        .offering-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0.5rem 0 0.75rem 0;
          color: #1b1b1b;
        }

        .offering-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #555555;
          margin-bottom: 1rem;
        }

        .offering-card a {
          display: inline-block;
        }

        .content-section {
          margin-bottom: 7rem;
          margin-top: 7rem;
        }

        .content-section h2 {
          text-align: left;
          border-left: 6px solid #ed7124ff;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 600;
          color: #1b1b1b;
        }

        .content-section p {
          font-size: 1rem;
          line-height: 1.6;
          color: #555555;
          text-align: left;
          margin-bottom: 1.5rem;
        }

        .content-section img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 2rem 0;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 7rem;
        }

        .highlight-card {
          background: transparent;
          border: none;
          padding: 0;
          box-shadow: none;
          color: #1b1b1b;
          border-left: 4px solid #ed7124;
          padding-left: 1.5rem;
        }

        .highlight-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.75rem 0;
          color: #1b1b1b;
        }

        .highlight-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #555555;
          margin: 0;
        }
      `}</style>

      <section className="tech-section">
        <h1 className="tech-header">FluxMapper™ delivery platforms</h1>
        
        <div className="offerings-grid">
          {offerings.map((offer) => (
            <article key={offer.title} className="offering-card">
              <span className="badge">{offer.badge}</span>
              <h3>{offer.title}</h3>
              <p>{offer.body}</p>
              {offer.internal ? (
                <a className="btn btn-outline-dark" href={offer.cta.href}>
                  {offer.cta.label}
                </a>
              ) : (
                <a className="btn btn-outline-dark" href={offer.cta.href} target="_blank" rel="noreferrer">
                  {offer.cta.label}
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="content-section">
          <h2>How our technology transforms environmental monitoring</h2>
          <p>
            FluxMapper™ fits between your direct measurement hardware and the final application: MRV for carbon credits, methane leak detection, ground-truthing models or fundamental research. The workflow captures raw eddy covariance, simulates atmospheric transport and renders high-resolution flux maps.
          </p>
          <Image src="/images/day6-movie-v2.gif" alt="FluxMapper animation" width={1100} height={550} loading="lazy" />
        </div>

        <div className="highlights-grid">
          {highlights.map((item) => (
            <article key={item.title} className="highlight-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <div className="tech-intro-box" style={{ marginTop: '3rem' }}>
          <h2 className="tech-header">Try FluxMapper™ On-Demand beta</h2>
          <p>
            Our software is now connected to the NEON eddy tower network and streams results directly from the cloud. Choose a tower, define a time range and receive a FluxMapper™ output in your inbox.
          </p>
          <a className="btn btn-primary" href="https://fluxmapper-on-demand-frontend-940343585807.us-central1.run.app" target="_blank" rel="noreferrer">
            Launch FluxMapper
          </a>
        </div>
      </section>
    </>
  );
}
