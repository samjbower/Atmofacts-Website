import Image from 'next/image';
import Link from 'next/link';
import HistorySection from '@/components/HistorySection';
import ContactForm from '@/components/ContactForm';
import ResponsiveImageSection from '@/components/ResponsiveImageSection';
import { getAllPostsMeta } from '@/lib/posts';

const partnerLogos = [
  { src: '/images/carbondew.png', alt: 'CarbonDew' },
  { src: '/images/JBH.png', alt: 'JBH Hyperspectral' },
  { src: '/images/licor_logo.png', alt: 'LI-COR' },
  { src: '/images/fluxnet.png', alt: 'Fluxnet' },
  { src: '/images/neon.png', alt: 'NEON Science' },
  { src: '/images/BST_logo.png', alt: 'Black Swift' },
  { src: '/images/google-icon.png', alt: 'Google' },
  { src: '/images/UW.png', alt: 'University of Wisconsin' },
  { src: '/images/ameriflux.png', alt: 'AmeriFlux' },
  { src: '/images/IOCS_logo.png', alt: 'ICOS Europe' }
];

const valueStatements = [
  {
    title: 'Proven direct measurement science',
    body: 'Traditional eddy-covariance techniques fuse wind and gas sensor data streams to help end users measure molecules directly at the source.'
  },
  {
    title: 'FluxMapper™ works with your EC systems',
    body: 'Our software spatially attributes sources and sinks with high resolution and confidence by physically modeling the micrometeorology of your site.'
  },
  {
    title: 'Flux maps for accountability',
    body: 'Turn a single EC system into geospatial intelligence for precision agriculture, research, MRV, and more, by mapping gas exchange directly onto property boundaries.'
  }
];

const missionStatements = [
  {
    title: 'Our mission',
    body:
      'We enhance the accuracy and applicability of climate data by focusing on direct flux measurements. Whether above cities, forests, oilfields or ranches, we deliver precise, interoperable insights.'
  },
  {
    title: 'Innovation for sustainability',
    body:
      'FluxMapper™ democratizes greenhouse gas intelligence. We build on trusted infrastructure, partner with research networks and deliver knowledge that is ready for action.'
  }
];

const teamMembers = [
  {
    name: 'Dr. Stefan Metzger',
    title: 'Founder, Surface-Atmosphere Steward',
    image: '/images/stefan.jpg',
    bio:
      'Stefan spent the last decade leading the surface-atmosphere component of the US NSF National Ecological Observatory Network (NEON). He serves on AmeriFlux and FLUXNET committees and built FluxMapper™ from his PhD work to bring eddy covariance into everyday environmental intelligence.',
    link: 'https://www.linkedin.com/in/stefan-metzger-ph-d-b835ab1b'
  },
  {
    name: 'Samuel J. Bower',
    title: 'Geospatial Coordinator',
    image: '/images/sam.png',
    bio:
      'Sam brings geospatial experience from Colorado College and West Virginia University. He has published on environmental impacts of surface mining and now focuses on practical climate solutions, data visualization and operational deployments of FluxMapper™.',
    link: 'https://www.linkedin.com/in/sam-j-bower'
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
      <section className="hero-section text-center">
      <div className="hero-overlay" />
      <div className="page-container hero-content">
        {/* <p className="text-uppercase text-muted mb-2">FluxMapper™ by AtmoFacts</p> */}
        <h1>Where every molecule meets its map.</h1>
        <p className="hero-lede">
        Direct measurement software for spatializing eddy-covariance data across sectors.
        Built in Colorado and deployed worldwide.
        </p>
        <a className="btn-ghost" href="/technology">
        See our technology
        </a>
      </div>
      </section>

      <section className="partner-section">
        <div className="page-container text-center">
          <p className="text-uppercase text-muted mb-3">Who We work with</p>
          <div className="partner-marquee">
            <div className="partner-track">
              {partnerLogos.concat(partnerLogos).map((logo, idx) => (
                <Image key={`${logo.src}-${idx}`} src={logo.src} alt={logo.alt} width={160} height={60} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="video-section" style={{ paddingBottom: '0' }}>
        <div className="page-container">
          <div className="mb-3">
            <h2 className="section-title" style={{ textAlign: 'left', borderLeft: '6px solid #ed7124ff', paddingLeft: '1.5rem' }}>FluxMapper™ brings eddy covariance into the 21st century.</h2>
            <p className="section-lede" style={{ textAlign: 'left' }}>
              A single EC system has the potential to be a source of powerful spatial intelligence without any additional requirements. FluxMapper™ translates high-frequency micrometeorology into intuitive, policy-ready maps.
            </p>
          </div>
          <ResponsiveImageSection />
        </div>
      </section>

      <section style={{ paddingTop: '0' }}>
        <div className="page-container">
          <div className="value-list">
            {valueStatements.map((item) => (
              <article key={item.title} className="value-item">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="text-center mt-4">
          <Link href="/technology" className="btn btn-outline-dark">
            Learn more
          </Link>
        </div>
      </section>

      <section id="story" className="story-section">
        <div className="page-container">
          <div className="story-card text-center">
            <h2 className="section-title" style={{ color: '#1b1b1b', textAlign: 'left', borderLeft: '6px solid #ed7124ff', paddingLeft: '1.5rem' }}>Our Story</h2>
            <p style={{ color: '#1b1b1b', textAlign: 'left' }}>
              AtmoFacts was founded to unite the climate community through the power of direct molecule-counting flux measurements.
              Direct flux measurements offer a universal benchmark for climate data and create common ground across industries. Spatial 
              flux measurements are the key to unlocking the full potential of eddy covariance and delivering on-the-ground intelligence for climate action.
            </p>
            <div className="my-4">
              <Image src="/images/OurStory.svg" alt="Cross sector" width={720} height={360} priority />
            </div>

            <HistorySection />
          </div>
        </div>
      </section>

      <section>
        <style>{`
          .team-section-header {
            border-left: 6px solid #ed7124ff;
            padding-left: 1.5rem;
            margin-bottom: 2rem;
          }

        .team-card {
        border-left: 6px solid #ed7124ff;
        padding-left: 1.5rem;
        }
      `}</style>

      <div className="page-container" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
        <div className="mb-5">
        <h2 className="section-title" style={{ color: '#ffffff', textAlign: 'left', borderLeft: '6px solid #ed7124ff', paddingLeft: '1.5rem' }}>AtmoFacts team</h2>
        <p className="mb-0" style={{ color: '#ffffff', textAlign: 'left' }}>
          Built in the Colorado Front Range, our local team unites micrometeorology, geospatial engineering, software and design.
          Please reach out to info@atmofacts.com to inquire about careers.
        </p>
        </div>
        <div className="team-grid">
        {teamMembers.map((member) => (
          <article key={member.name} className="team-card">
          <div className="d-flex align-items-center gap-3 mb-3">
            <a href={member.link} target="_blank" rel="noreferrer" className="d-inline-flex">
            <Image src={member.image} alt={member.name} width={100} height={100} style={{ borderRadius: '50%', filter: 'grayscale(100%)' }} />
            </a>
            <div>
            <h3 className="h4 mb-1">{member.name}</h3>
            <p className="text-uppercase small text-muted mb-0">{member.title}</p>
            </div>
          </div>
          <p>{member.bio}</p>
          </article>
        ))}
        </div>
      </div>

      <div className="page-container mission-grid">
        {missionStatements.map((item) => (
        <article key={item.title} className="mission-card">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
        ))}
      </div>

      {/* <div className="text-center mt-4">
        <a href="#contact" className="btn btn-primary btn-lg">
        Join us
        </a>
      </div> */}
      </section>

      <section className="featured-news-section">
      <style>{`
        .featured-news-section {
          background-color: #ffffff;
          color: #1b1b1b;
          padding: clamp(2rem, 5vw, 4rem) 0;
        }

        .featured-news-header {
          text-align: left;
          border-left: 6px solid #ed7124ff;
          padding-left: 1.5rem;
          margin-bottom: 2.5rem;
          color: #1b1b1b;
        }

        .featured-news-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }

        .featured-news-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          padding-bottom: 2.5rem;
        }

        .featured-news-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .featured-news-date {
          font-size: 0.85rem;
          color: #ed7124;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }

        .featured-news-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0.5rem 0 0.75rem 0;
          line-height: 1.3;
          font-family: 'Georgia', 'Times New Roman', serif;
        }

        .featured-news-title a {
          color: #1b1b1b;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .featured-news-title a:hover {
          color: #ed7124;
        }

        .featured-news-blurb {
          margin: 0;
          color: #555555;
          font-size: 1rem;
          line-height: 1.6;
          font-family: 'Georgia', 'Times New Roman', serif;
        }

        .featured-news-button {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background-color: transparent;
          border: 2px solid #ed7124;
          color: #ed7124;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          transition: all 0.2s ease;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
        }

        .featured-news-button:hover {
          background-color: #ed7124;
          color: #ffffff;
        }
      `}</style>

      <div className="page-container">
        <h2 className="section-title featured-news-header">Featured News</h2>
        
        <div className="featured-news-list">
          {featuredPosts.map((post) => (
            <article key={post.slug} className="featured-news-item">
              <div className="featured-news-date">{formatDate(post.date)}</div>
              <h3 className="featured-news-title">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              {post.description && <p className="featured-news-blurb">{post.description}</p>}
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/blog" className="featured-news-button">
            More News
          </Link>
        </div>
      </div>
      </section>

      <section style={{ backgroundColor: '#ffffff', color: '#1b1b1b' }}>
        <div className="page-container">
          <ContactForm />
        </div>
      </section>
    </>
    );
}
