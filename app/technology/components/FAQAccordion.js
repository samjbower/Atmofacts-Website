'use client';

import { useState } from 'react';

const faqs = [
  {
    id: 1,
    category: 'FluxMapper Basics',
    question: 'What is FluxMapper in LI-COR Cloud?',
    answer: "AtmoFacts' FluxMapper turns standard eddy-covariance observations (including historical ≥10 Hz data) into spatially explicit flux maps with quantified uncertainty, delivered through LI-COR Cloud."
  },
  {
    id: 2,
    category: 'FluxMapper Basics',
    question: 'How does FluxMapper turn a single flux station into "90,000 virtual sensors"?',
    answer: 'FluxMapper generates a fixed 301 × 301 pixel grid (≈ 90,000 pixels). Each pixel represents a spatially explicit flux time series derived from the station data.'
  },
  {
    id: 3,
    category: 'How It Works',
    question: 'What makes FluxMapper fundamentally different from other flux tools?',
    answer: 'FluxMapper turns a single flux station into a force multiplier, revealing spatial patterns and management-scale signals that are invisible in station-only time series. It enables: drawing areas of interest (fields, treatments, management units), extracting independent flux time series per area, comparing multiple areas simultaneously, and operates with no assumption of land-cover homogeneity.'
  },
  {
    id: 4,
    category: 'How It Works',
    question: 'How does FluxMapper work?',
    answer: 'FluxMapper uses the wind-directional information already embedded in high-frequency EC data to reconstruct where measured fluxes originate on the ground, turning one flux station into a spatially resolved flux map. Every 30-minute flux average contains tens of thousands of high-frequency observations sampled under changing wind conditions. Traditional EC processing collapses this information in time. FluxMapper instead exploits wind variability to attribute fluxes spatially, solving a highly over-determined inverse problem that converts temporal richness into spatial insight.'
  },
  {
    id: 5,
    category: 'Outputs & Data',
    question: "What's the FluxMap spatial resolution and spatial extent?",
    answer: 'Pixel size scales with the effective measurement height (map extent is a 301 × 301 grid). For example, a ~3 m station produces ~3 m pixel resolution at 901 m × 903 m spatial extent. Taller stations cover exponentially larger areas with proportionally coarser pixels.'
  },
  {
    id: 6,
    category: 'Outputs & Data',
    question: 'What do I get as an output?',
    answer: 'Daily outputs are delivered as GeoTIFF layers (48 half-hourly layers per day), accessible via LI-COR Cloud visualization and API. Outputs are available as GeoTIFFs for offline analysis and via API endpoints for custom dashboards and portals.'
  },
  {
    id: 7,
    category: 'Supported Capabilities',
    question: 'What fluxes and environments are currently supported in LI-COR Cloud?',
    answer: 'The initial LI-COR Cloud cohort release targets ecosystem and agricultural deployments, with fluxes including H (sensible heat), LE (latent energy), and CO₂/NEE. Additional configurations (e.g., urban) may become available later.'
  },
  {
    id: 8,
    category: 'Supported Capabilities',
    question: 'Does FluxMapper support methane (CH₄) right now?',
    answer: 'The LI-COR Cloud cohort configuration is centered on CO₂, heat, and water first. Broader configurations (including CH₄) are expected as future expansions and can also be supported via AtmoFacts-direct projects.'
  },
  {
    id: 9,
    category: 'Access & Deployment',
    question: 'Will FluxMapper only be available in LI-COR Cloud?',
    answer: 'FluxMapper is launching as a Cloud-based module within LI-COR Cloud. The initial rollout focuses on Cloud delivery. Future provisioning methods may include EDGE or desktop/offline modules, but those are not part of the initial release.'
  },
  {
    id: 10,
    category: 'Data Requirements',
    question: 'What data do I need to participate?',
    answer: 'No additional hardware is necessary. All you need is access to raw high-frequency eddy-covariance data (≥10 Hz) for processing. Your data does not have to originate from LI-COR instruments, SmartFlux®, or EddyPro®—any ≥10 Hz eddy-covariance dataset can be ingested if it conforms to the required format. Historical ≥10 Hz data can also be processed if it meets formatting requirements.'
  },
  {
    id: 11,
    category: 'Data Requirements',
    question: 'Can FluxMapper process historical data?',
    answer: 'Yes—historical ≥10 Hz data can be processed if it meets formatting requirements. Some historical workflows may require manual upload during early phases.'
  },
  {
    id: 12,
    category: 'Quality & Uncertainty',
    question: 'Does FluxMapper perform QA/QC comparable to standard eddy-covariance processing?',
    answer: 'Yes. FluxMapper applies rigorous QA/QC consistent with established eddy-covariance standards, building on the open-source eddy4R ecosystem used by large national observatories like the US National Ecological Observatory Network. FluxMapper does not bypass EC QA/QC; it extends it into the spatial domain.'
  },
  {
    id: 13,
    category: 'Quality & Uncertainty',
    question: 'Has FluxMapper been thoroughly tested across contrasting landscapes?',
    answer: 'Yes. FluxMapper has been developed, tested, and applied over more than a decade across landscapes with strong spatial heterogeneity and contrasting flux patterns, as well as in controlled supercomputer simulations. Validation has focused on situations where traditional station-based analyses struggle most—heterogeneous surfaces, sharp transitions, and mixed source areas. References include peer-reviewed examples such as Table 1 in Xu et al. (2017) and Figure 2 in Xu et al. (2020), with additional publications available in the AtmoFacts resource library.'
  },
  {
    id: 14,
    category: 'Quality & Uncertainty',
    question: 'Does each pixel have its own uncertainty estimate?',
    answer: 'Yes—every pixel has an associated uncertainty (each FluxMap has a corresponding uncertainty map). Nominal uncertainty is approximately ~5% systematic and ~10% random per pixel-day. Random uncertainty decreases with sample size following the square-root law. In practice, random uncertainty can be reduced through temporal aggregation, spatial aggregation (e.g., geofenced areas of interest), or both.'
  },
  {
    id: 15,
    category: 'Applications',
    question: 'Can FluxMapper resolve small plot studies?',
    answer: 'Yes, this is a major breakthrough. The minimum resolvable plot is the pixel resolution = effective measurement height. For example, a 50m rice paddy is now feasible with proper tower height. This eliminates the traditional 200m radial distance requirement that previously restricted small-plot research. Each pixel has a quality layer reflecting the degree of bleed-over from adjacent areas.'
  },
  {
    id: 16,
    category: 'Partnership',
    question: 'What is the LI-COR partnership and how do I sign up?',
    answer: 'AtmoFacts and LI-COR have partnered to deliver FluxMapper through the LI-COR Cloud platform as a foundational module. This integration allows seamless workflow with existing LI-COR instruments. Visit https://tinyurl.com/fm-cohort to complete the founding cohort interest form for early access.'
  }
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState(null);

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <>
      <style>{`
        .faq-container {
          max-width: 900px;
        }

        .faq-header {
          text-align: left;
          border-left: 6px solid #ed7124ff;
          padding-left: 1.5rem;
          margin-bottom: 2rem;
          color: #1b1b1b;
        }

        .faq-header h1 {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          line-height: 1.2;
        }

        .faq-header p {
          font-size: 1rem;
          line-height: 1.6;
          color: #555555;
          margin: 0;
        }

        .faq-category {
          margin-bottom: 3rem;
        }

        .faq-category-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ed7124;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #f0f0f0;
        }

        .faq-item {
          margin-bottom: 1rem;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          overflow: hidden;
          background: #ffffff;
          transition: all 0.2s ease;
        }

        .faq-item:hover {
          border-color: #ed7124;
          box-shadow: 0 2px 8px rgba(237, 113, 36, 0.1);
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem;
          cursor: pointer;
          background: #ffffff;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 1rem;
          font-weight: 500;
          color: #1b1b1b;
          transition: all 0.2s ease;
        }

        .faq-question:hover {
          background: #fafafa;
        }

        .faq-item.open .faq-question {
          background: #fff4f0;
          color: #ed7124;
        }

        .faq-toggle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          min-width: 24px;
          color: #ed7124;
          font-weight: 300;
          font-size: 1.5rem;
          line-height: 1;
          transition: transform 0.2s ease;
          margin-left: 1rem;
        }

        .faq-item.open .faq-toggle-icon {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .faq-item.open .faq-answer {
          max-height: 1000px;
          padding: 0 1.25rem 1.25rem 1.25rem;
          border-top: 1px solid #f0f0f0;
        }

        .faq-answer-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #555555;
          margin: 0;
        }

        .faq-answer-text a {
          color: #ed7124;
          text-decoration: none;
        }

        .faq-answer-text a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .faq-question {
            padding: 1rem;
          }

          .faq-item.open .faq-answer {
            padding: 0 1rem 1rem 1rem;
          }

          .faq-header {
            padding-left: 1rem;
          }

          .faq-header h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="faq-container">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>Learn more about FluxMapper's capabilities, data requirements, and how it works.</p>
        </div>

        {categories.map((category) => (
          <div key={category} className="faq-category">
            <h2 className="faq-category-title">{category}</h2>
            {faqs
              .filter(faq => faq.category === category)
              .map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-item ${openId === faq.id ? 'open' : ''}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    aria-expanded={openId === faq.id}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle-icon">↓</span>
                  </button>
                  <div className="faq-answer">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
}
