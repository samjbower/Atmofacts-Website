export const metadata = {
  title: 'FluxMapper Tutorials & Sandbox Datasets'
};

export default function TutorialsPage() {
  return (
    <>
      <style>{`
        .tutorials-container {
          max-width: 900px;
        }

        .page-header {
          text-align: left;
          border-left: 6px solid #ed7124ff;
          padding-left: 1.5rem;
          margin-bottom: 2rem;
          color: #1b1b1b;
        }

        .page-header h1 {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          line-height: 1.2;
        }

        .page-header p {
          font-size: 1rem;
          line-height: 1.6;
          color: #555555;
          margin: 0;
        }

        .section-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1b1b1b;
          margin: 2.5rem 0 1.5rem 0;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #f0f0f0;
        }

        .section-title:first-of-type {
          margin-top: 0;
        }

        .section-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #555555;
          margin-bottom: 1.5rem;
        }

        .dataset-card {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-left: 4px solid #ed7124;
          padding: 1.75rem;
          border-radius: 6px;
          margin-bottom: 1.5rem;
        }

        .dataset-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1b1b1b;
          margin: 0 0 0.75rem 0;
        }

        .dataset-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #555555;
          margin: 0.75rem 0;
        }

        .dataset-meta {
          background: #f8f8f8;
          padding: 1rem;
          border-radius: 4px;
          margin: 1rem 0;
          font-size: 0.9rem;
          color: #555555;
        }

        .dataset-meta strong {
          color: #1b1b1b;
        }

        .link-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin: 1.25rem 0;
        }

        .dataset-link {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 0;
          color: #ed7124;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid #ed7124;
          width: fit-content;
          transition: all 0.2s ease;
        }

        .dataset-link:hover {
          gap: 0.5rem;
        }

        .dataset-link::after {
          content: '→';
          margin-left: 0.5rem;
          transition: margin 0.2s ease;
        }

        .coming-soon {
          background: #f8f8f8;
          border: 1px solid #e5e5e5;
          border-left: 4px solid #ed7124;
          padding: 1.75rem;
          border-radius: 6px;
          color: #555555;
        }

        .coming-soon p {
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        .code-snippet {
          background: #f5f5f5;
          border: 1px solid #e5e5e5;
          padding: 1rem;
          border-radius: 4px;
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 0.85rem;
          overflow-x: auto;
          margin: 0.75rem 0;
          color: #1b1b1b;
        }

        @media (max-width: 768px) {
          .page-header {
            padding-left: 1rem;
          }

          .page-header h1 {
            font-size: 1.5rem;
          }

          .dataset-card {
            padding: 1.25rem;
          }
        }
      `}</style>

      <div className="tutorials-container">
        <div className="page-header">
          <h1>Tutorials & Sandbox Datasets</h1>
          <p>Learn by doing with free FluxMapper data and step-by-step guides</p>
        </div>

        <h2 className="section-title">Sandbox Datasets</h2>
        <p className="section-description">
          Explore FluxMapper outputs with public, free-to-download datasets. These curated datasets from completed research projects let you experiment with real flux maps without processing raw data.
        </p>

        <div className="dataset-card">
          <h3>BenchFlux: NEON Tower Network</h3>
          <p>
            A comprehensive collection of FluxMapper outputs across multiple NEON tower sites. Download pre-processed flux maps for CO₂, sensible heat, and latent energy from 2019 and 2020 data.
          </p>

          <div className="dataset-meta">
            <strong>Available Sites:</strong> HARV (Harvard Forest), STEI (Steigerwald), STER (Sterling), TREE (Treehaven), JORN (Jornada)<br />
            <strong>Years:</strong> 2019, 2020<br />
            <strong>Format:</strong> GeoTIFF layers
          </div>

          <p>
            <strong>What you can do:</strong> Download spatial flux maps, analyze heterogeneous landscapes, compare sites and years, validate your own analyses against reference datasets, or use as ground truth for modeling.
          </p>

          <div className="link-group">
            <a href="https://www.benchflux.org" target="_blank" rel="noreferrer" className="dataset-link">
              BenchFlux Portal (www.benchflux.org)
            </a>
            <a href="https://github.com/BenchFlux/benchflux-datasets/tree/main/SpatialEddy" target="_blank" rel="noreferrer" className="dataset-link">
              Download Tutorial & Documentation
            </a>
            <a href="https://console.cloud.google.com/storage/browser/data-benchflux" target="_blank" rel="noreferrer" className="dataset-link">
              Browse GCP Storage Bucket
            </a>
          </div>

          <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '1rem' }}>
            <strong>Example file path:</strong>
          </p>
          <div className="code-snippet">
            https://storage.cloud.google.com/data-benchflux/TREE/fluxCo2/tree_fluxCo2_20200701.tif
          </div>
        </div>

        <h2 className="section-title">Tutorials</h2>
        <p className="section-description">
          Comprehensive guides for working with FluxMapper data and tools.
        </p>

        <div className="coming-soon">
          <p>
            <strong>Coming Soon:</strong> Step-by-step tutorials covering data preparation, running analyses, interpreting results, creating custom visualizations, and integrating FluxMapper outputs into your workflows and models.
          </p>
        </div>
      </div>
    </>
  );
}