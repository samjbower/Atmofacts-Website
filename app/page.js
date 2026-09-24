import Image from 'next/image';
import Link from 'next/link';
import HistorySection from '@/components/HistorySection';
import ContactForm from '@/components/ContactForm';
import { getAllPostsMeta } from '@/lib/posts';

const STUDIO_URL = 'https://fluxmapper-studio-827635508729.us-central1.run.app';

const partnerLogos = [
  { src: '/images/carbondew.png', alt: 'CarbonDew' },
  { src: '/images/JBH.png', alt: 'JBH Hyperspectral' },
  { src: '/images/licor_logo.png', alt: 'LI-COR' },
  { src: '/images/fluxnet.png', alt: 'FLUXNET' },
  { src: '/images/neon.png', alt: 'NEON' },
  { src: '/images/BST_logo.png', alt: 'Black Swift Technologies' },
  { src: '/images/google-icon.png', alt: 'Google' },
  { src: '/images/UW.png', alt: 'University of Wisconsin' },
  { src: '/images/ameriflux.png', alt: 'AmeriFlux' },
  { src: '/images/IOCS_logo.png', alt: 'ICOS' }
];

const valueStatements = [
  {
    title: 'Direct measurement first',
    body: 'Flux stations count molecules as they move between land and atmosphere. FluxMaps stay tied to those measurements, so every map can be traced back to what was actually observed.'
  },
  {
    title: 'Sensor fusion at ownership scale',
    body: 'Like the navigation in a mobile phone, FluxMapper unites the station’s measurements with satellite imagery and traces the exchange back to its geographic sources and sinks, at decameter detail and sub-hourly time steps.'
  },
  {
    title: 'Maps people can act on',
    body: 'A FluxMap speaks to scientists, land managers, and markets alike. Gas exchange lands directly on property boundaries, so environmental claims can rest on measured reality.'
  }
];

const sectors = [
  {
    title: 'Farms',
    image: '/images/fields-aerial.jpg',
    alt: 'Aerial view of green farm fields',
    body: 'Compare practices field by field. Growers and agronomists see how irrigation, tillage, and cover crops change water use and carbon exchange, plot by plot and season by season.'
  },
  {
    title: 'Ranches and rangelands',
    image: '/images/rangeland.jpg',
    alt: 'Sagebrush rangeland below forested mountains',
    body: 'Grazing decisions show up on the map. Ranchers and land trusts can watch how pastures respond to rest, rotation, and drought, and document the stewardship value they create.'
  },
  {
    title: 'Forests and research',
    image: '/images/forest-tower.jpg',
    alt: 'Research tower rising above a spruce forest',
    body: 'From research plots to working forests. Scientists and conservation groups track which stands store carbon and how ecosystems respond to disturbance and restoration.'
  },
  {
    title: 'Cities and communities',
    image: '/images/skyline-sunflowers.jpg',
    alt: 'Prairie sunflowers in front of the Denver skyline and Front Range',
    body: 'Heat and carbon at neighborhood scale. Planners can measure how parks, greenways, and development change urban heat and emissions where people live.'
  }
];

const missionPillars = [
  {
    title: 'Access',
    body: 'Flux mapping recovers spatial detail that traditional processing discards. We offer it at lower cost, with predictable quality and time to value, so direct measurement becomes the status quo rather than the exception.'
  },
  {
    title: 'Attribution',
    body: 'Land-atmosphere exchange is measured by the station and attributed to the parcels and practices that produced it. That is the missing link between environmental claims and the stewardship rights that depend on them.'
  },
  {
    title: 'Accountability',
    body: 'As the societal cost of heat, water, and carbon grows, continuous measurement of how well solutions work becomes necessary. Better attribution makes greenwashing harder and fair compensation more possible.'
  }
];

const teamMembers = [
  {
    name: 'Dr. Stefan Metzger',
    title: 'Founder & CEO',
    image: '/images/stefan.jpg',
    bio: 'Stefan bridges atmospheric science, entrepreneurship and technology transfer. He led surface-atmosphere research from field instrumentation to national infrastructures such as neonscience.org and now focuses on turning those insights into real-world environmental intelligence. Stefan is co-founder of carbondew.org and adjunct faculty at UW-Madison.',
    link: 'https://www.linkedin.com/in/stefan-metzger-ph-d-b835ab1b'
  },
  {
    name: 'Samuel J. Bower',
    title: 'Product Lead',
    image: '/images/sam.png',
    bio: 'Sam is passionate about the transfer of climate technology into commercial use for societal benefit. He studied geology at Colorado College and West Virginia University before joining AtmoFacts, where he began working closely with the FluxMapper technology to scale it. Sam currently works on customer projects and product design, with an emphasis on industry partnerships.',
    link: 'https://www.linkedin.com/in/sam-j-bower'
  },
  {
    name: 'Allen Kaplan, M.S.',
    title: 'Research Scientist',
    image: '/images/allen.png',
    bio: 'Allen studied the relationships between forest canopy plant traits and carbon fluxes mapped with FluxMaps, work that became his master’s thesis. At AtmoFacts he analyzes, interprets, and communicates FluxMap data for clients and leads fluxmapPy, our Python package and its tutorials. His background is in environmental science, GIS, and education.',
    link: ''
  }
];

export default function Home() {
  const allPosts = getAllPostsMeta();
  const featuredPosts = [...allPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="page-container hero-content">
          <span className="eyebrow hero-eyebrow">AtmoFacts</span>
          <h1>Where every molecule meets its map.</h1>
          <p className="hero-lede">
            Direct measurement of heat, water, and carbon, mapped to the fields, forests, and
            neighborhoods that produced it. Built in Colorado and deployed worldwide.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href={STUDIO_URL} target="_blank" rel="noreferrer">
              Open FluxMapper Studio
            </a>
            <Link className="btn btn-ghost" href="/technology">
              See how it works
            </Link>
          </div>
        </div>
        <a className="hero-scroll-hint" href="#overview" aria-label="Scroll to learn more">
          &darr;
        </a>
      </section>

      <section className="partner-section">
        <div className="page-container">
          <p className="partner-label">Who we work with</p>
          <div className="partner-marquee">
            <div className="partner-track">
              {partnerLogos.concat(partnerLogos).map((logo, idx) => (
                <Image key={`${logo.src}-${idx}`} src={logo.src} alt={logo.alt} width={160} height={60} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="overview-section">
        <div className="page-container">
          <span className="eyebrow">From one station to a map</span>
          <h2 className="section-title">FluxMapper&trade; brings eddy covariance into the 21st century.</h2>
          <p className="section-lede">
            A flux station, an eddy covariance system in the scientific literature, measures the
            heat, water, and carbon that land and atmosphere exchange. Ordinary weather stations
            cannot. Traditional processing reports one wind-averaged value for the station&apos;s
            surroundings. FluxMapper turns those same readings into FluxMaps&trade;: field-scale maps
            that show which fields, forests, and practices produced the exchange.
          </p>

          <figure className="overview-figure">
            <Image
              className="img-desktop"
              src="/images/websiteoverview.jpg"
              alt="A flux station in a farm landscape, and the FluxMap it produces on a laptop"
              width={1400}
              height={800}
            />
            <Image
              className="img-mobile"
              src="/images/FM-vertical.svg"
              alt="A flux station in a farm landscape, and the FluxMap it produces"
              width={500}
              height={1400}
            />
            <figcaption>
              One flux station, one map: FluxMapper resolves the surroundings of a single station
              into roughly 90,000 measurement-backed pixels.
            </figcaption>
          </figure>

          <div className="value-list">
            {valueStatements.map((item) => (
              <article key={item.title} className="value-item">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.75rem' }}>
            <Link href="/technology" className="btn btn-outline">
              Explore the technology
            </Link>
          </div>
        </div>
      </section>

      <section className="photo-band">
        <div className="page-container photo-band-inner">
          <p className="photo-band-tagline">From towers to terrain.</p>
          <p>
            High-resolution flux mapping made simple, from the station in the field to the map on
            your desk.
          </p>
        </div>
      </section>

      <section className="sectors-section">
        <div className="page-container">
          <span className="eyebrow">Who it serves</span>
          <h2 className="section-title">Made for the people who answer for the land</h2>
          <p className="section-lede">
            One engine accounts for fluxes the same way across environments, so insight is
            comparable from a rice paddy to a city park. Today we map terrestrial carbon, water,
            and heat; further gas species, environments, and higher resolution are on the roadmap.
          </p>
          <div className="sector-grid">
            {sectors.map((sector) => (
              <article key={sector.title} className="sector-tile">
                <Image
                  src={sector.image}
                  alt={sector.alt}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 25vw"
                />
                <div className="sector-overlay">
                  <h3>{sector.title}</h3>
                  <p>{sector.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="photo-credit">
            Photos: USDA NRCS and USFWS Mountain-Prairie (public domain and CC BY 2.0), Frank
            Schulenburg (CC BY-SA 4.0), Mbdfar (CC0), via Wikimedia Commons.
          </p>
        </div>
      </section>

      <section className="mission-section on-dark">
        <div className="page-container">
          <span className="eyebrow">Our mission</span>
          <p className="mission-statement">
            AtmoFacts makes land-atmosphere exchange visible, attributable, and actionable at the
            scale where land is managed.
          </p>
          <p className="mission-intro">
            We bring flux mapping out of the research lab to the people who manage land, run
            experiments, and answer for environmental outcomes. Our work narrows the gap between
            environmental claims and measured reality, and we favor careful science and durable
            relationships over speed and hype.
          </p>
          <div className="mission-grid">
            {missionPillars.map((pillar) => (
              <article key={pillar.title} className="mission-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="story-section">
        <div className="page-container">
          <span className="eyebrow">Our story</span>
          <h2 className="section-title">Common ground for climate data</h2>
          <p className="section-lede">
            AtmoFacts was founded to unite the climate community through the power of direct
            molecule-counting flux measurements. Direct measurement offers a universal benchmark
            for climate data and creates common ground across industries. Mapping those
            measurements onto the land brings out the full potential of eddy covariance and
            delivers on-the-ground intelligence for climate action.
          </p>
          <div style={{ margin: '2.5rem 0' }}>
            <Image
              src="/images/OurStory.svg"
              alt="FluxMapper connecting measurements across sectors"
              width={860}
              height={430}
              style={{ marginInline: 'auto' }}
            />
          </div>
          <HistorySection />
        </div>
      </section>

      <section id="team" className="team-section">
        <div className="page-container">
          <span className="eyebrow">The team</span>
          <h2 className="section-title">Scientists and builders, close to the ground</h2>
          <p className="section-lede">
            Built in the Colorado Front Range, our team unites micrometeorology, geospatial
            engineering, software, and design. Reach out to{' '}
            <a className="text-link" href="mailto:info@atmofacts.com">
              info@atmofacts.com
            </a>{' '}
            to inquire about careers.
          </p>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article key={member.name} className="team-card">
                <div className="team-card-head">
                  {member.link ? (
                    <a href={member.link} target="_blank" rel="noreferrer">
                      <Image src={member.image} alt={member.name} width={84} height={84} />
                    </a>
                  ) : (
                    <Image src={member.image} alt={member.name} width={84} height={84} />
                  )}
                  <div>
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.title}</p>
                  </div>
                </div>
                <p>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="news-section">
        <div className="page-container">
          <span className="eyebrow">Featured news</span>
          <h2 className="section-title">What&apos;s new at AtmoFacts</h2>
          <div className="news-list">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="news-item">
                <div className="news-date">{formatDate(post.date)}</div>
                <h3 className="news-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                {post.description && <p className="news-blurb">{post.description}</p>}
              </article>
            ))}
          </div>
          <div className="news-more">
            <Link href="/blog" className="btn btn-outline">
              More news
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="page-container">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Talk with us</h2>
          <p className="section-lede" style={{ marginBottom: '2.5rem' }}>
            Curious whether flux mapping fits your site, study, or program? Write to us and we will
            answer within one to two business days. If FluxMapper is not the right tool for your
            question, we will say so and point you toward one that is.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
