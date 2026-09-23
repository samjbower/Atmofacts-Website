import Image from 'next/image';

const STUDIO_URL = 'https://fluxmapper-studio-827635508729.us-central1.run.app';

const offerings = [
  {
    title: 'FluxMapper™ Studio',
    badge: 'Available now',
    body: 'Explore FluxMaps™ in your browser, starting with towers from the US NSF National Ecological Observatory Network (NEON). See what flux mapping shows before committing your own data.',
    cta: { label: 'Open Studio', href: STUDIO_URL }
  },
  {
    title: 'Flux mapping as a service',
    badge: 'Custom engagements',
    body: 'Bespoke deliverables for research campaigns, MRV pilots, methane surveys, and ecosystem studies. We take the difficulty of eddy covariance off your plate.',
    cta: { label: 'Contact us', href: '/contact', internal: true }
  },
  {
    title: 'FluxMapper in LI-COR Cloud',
    badge: 'Staged rollout',
    body: 'Access FluxMapper through the LI-COR Cloud platform, so a flux station and FluxMapper arrive as one workflow. Early cohort nominations are open.',
    cta: { label: 'Learn more', href: 'https://www.licor.com', external: true }
  }
];

const highlights = [
  {
    title: 'Precision in every second',
    body: 'A flux station captures thousands of measurements every second. FluxMapper traces those data points back to pixels in space and time.'
  },
  {
    title: 'Spatial detail for accountability',
    body: 'Instead of collapsing data into single averages, FluxMapper resolves the surroundings of the station: where exchange concentrates, where carbon is stored, and how practices shape both.'
  },
  {
    title: 'Uncertainty stated, always',
    body: 'FluxMaps arrive with per-pixel uncertainty alongside each map, so the insight is defensible at property and project scales.'
  }
];

export const metadata = {
  title: 'FluxMapper platforms'
};

export default function PackagesPage() {
  return (
    <>
      <div className="page-header" style={{ marginBottom: '2rem' }}>
        <h1 className="tech-header">FluxMapper&trade; platforms</h1>
        <p>
          Three ways to work with us, from a browser-based studio to fully custom engagements.
          FluxMapper is not the right tool for every question; if your problem is better served by
          another approach, we will point you to it.
        </p>
      </div>

      <div className="offer-list">
        {offerings.map((offer) => (
          <article key={offer.title} className="offer-row">
            <div>
              <span className="badge">{offer.badge}</span>
              <h3>{offer.title}</h3>
            </div>
            <p>{offer.body}</p>
            {offer.internal ? (
              <a className="btn btn-outline" href={offer.cta.href}>
                {offer.cta.label}
              </a>
            ) : (
              <a className="btn btn-outline" href={offer.cta.href} target="_blank" rel="noreferrer">
                {offer.cta.label}
              </a>
            )}
          </article>
        ))}
      </div>

      <div className="content-block">
        <h2>How it works</h2>
        <p>
          FluxMapper fits between your direct measurement hardware and the final application:
          research, land management, measurement, reporting and verification (MRV), or
          ground-truthing for downstream models. The workflow ingests raw high-frequency data from
          the flux station, simulates how the atmosphere carried each measurement to the sensor,
          and renders the result as FluxMaps: 48 half-hourly map layers per day, each pixel a flux
          time series with its uncertainty.
        </p>
        <Image
          src="/images/day6-movie-v2.gif"
          alt="Animation of a FluxMap evolving through a day"
          width={1100}
          height={550}
          loading="lazy"
        />
      </div>

      <div className="feature-columns">
        {highlights.map((item) => (
          <article key={item.title} className="highlight-card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>

      <div className="cta-panel">
        <h2>Try FluxMapper Studio</h2>
        <p>
          Studio is connected to the NEON tower network and streams FluxMaps directly from the
          cloud. Pick a tower, browse its maps, and see the spatial detail a single station holds.
          Your own site could be next.
        </p>
        <a className="btn btn-solid" href={STUDIO_URL} target="_blank" rel="noreferrer">
          Launch FluxMapper Studio
        </a>
      </div>
    </>
  );
}
