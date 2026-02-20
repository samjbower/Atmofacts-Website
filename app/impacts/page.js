import { getAllImpactsMeta } from '@/lib/impacts';
import ImpactsClient from '@/components/ImpactsClient';

export const metadata = {
  title: 'Impacts & publications'
};

export default function ImpactsPage({ searchParams }) {
  const allImpacts = getAllImpactsMeta();

  return (
    <section className="impacts-page">
      <style>{`
        .impacts-page {
          background-color: #ffffff !important;
          padding: clamp(2rem, 5vw, 4rem) 0;
        }

        .impacts-header {
          text-align: left;
          border-left: 6px solid #ed7124ff;
          padding-left: 1.5rem;
          margin-bottom: 2.5rem;
          color: #1b1b1b;
        }

        .impacts-intro {
          color: #555555;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 3rem;
        }
      `}</style>

      <div className="page-container">
        <h1 className="section-title impacts-header">Explore the impacts of FluxMapper™</h1>
        
        <p className="impacts-intro">
          Showcasing real-world collaborations where spatialized flux data delivered measurable outcomes. Dive into peer-reviewed work, abstracts and patents that highlight FluxMapper™ applications.
        </p>

        <ImpactsClient impacts={allImpacts} searchParams={searchParams} />
      </div>
    </section>
  );
}
