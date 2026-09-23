import { getAllImpactsMeta } from '@/lib/impacts';
import ImpactsClient from '@/components/ImpactsClient';

export const metadata = {
  title: 'Impacts & publications'
};

export default function ImpactsPage({ searchParams }) {
  const allImpacts = getAllImpactsMeta();

  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header">
          <span className="eyebrow">Impacts</span>
          <h1>The science behind FluxMapper&trade;</h1>
          <p>
            Peer-reviewed publications, abstracts, and patents from more than a decade of
            developing, testing, and applying flux mapping across contrasting landscapes.
          </p>
        </div>

        <ImpactsClient impacts={allImpacts} searchParams={searchParams} />
      </div>
    </section>
  );
}
