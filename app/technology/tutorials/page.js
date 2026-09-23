export const metadata = {
  title: 'FluxMapper tutorials & sandbox datasets'
};

export default function TutorialsPage() {
  return (
    <div style={{ maxWidth: '860px' }}>
      <div className="page-header">
        <h1 className="tech-header">Tutorials &amp; sandbox datasets</h1>
        <p>Learn by doing with free FluxMapper data and step-by-step guides.</p>
      </div>

      <div className="content-block">
        <h2>Sandbox datasets</h2>
        <p>
          Explore FluxMapper outputs with public, free-to-download datasets. These curated datasets
          from completed research projects let you experiment with real flux maps without
          processing raw data.
        </p>

        <div className="content-card" style={{ marginTop: '1.5rem' }}>
          <h3>BenchFlux: NEON tower network</h3>
          <p>
            A collection of FluxMapper outputs across multiple NEON tower sites. Download
            pre-processed flux maps for CO2, sensible heat, and latent energy from 2019 and 2020
            data.
          </p>
          <p style={{ background: 'var(--paper-warm)', padding: '1rem', borderRadius: '8px', fontSize: '0.92rem' }}>
            <strong>Available sites:</strong> HARV (Harvard Forest), STEI (Steigerwald), STER
            (Sterling), TREE (Treehaven), JORN (Jornada)
            <br />
            <strong>Years:</strong> 2019, 2020
            <br />
            <strong>Format:</strong> GeoTIFF layers
          </p>
          <p>
            <strong>What you can do:</strong> download spatial flux maps, analyze heterogeneous
            landscapes, compare sites and years, validate your own analyses against reference
            datasets, or use them as ground truth for downstream models.
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>
              <a className="text-link" href="https://www.benchflux.org" target="_blank" rel="noreferrer">
                BenchFlux portal (www.benchflux.org)
              </a>
            </li>
            <li>
              <a
                className="text-link"
                href="https://github.com/BenchFlux/benchflux-datasets/tree/main/SpatialEddy"
                target="_blank"
                rel="noreferrer"
              >
                Download tutorial &amp; documentation
              </a>
            </li>
            <li>
              <a
                className="text-link"
                href="https://console.cloud.google.com/storage/browser/data-benchflux"
                target="_blank"
                rel="noreferrer"
              >
                Browse the GCP storage bucket
              </a>
            </li>
          </ul>
          <p style={{ fontSize: '0.85rem', color: 'var(--ink-faint)', marginBottom: '0.5rem' }}>Example file path:</p>
          <pre
            style={{
              background: 'var(--paper-warm)',
              border: '1px solid var(--paper-line)',
              padding: '0.9rem',
              borderRadius: '8px',
              fontSize: '0.82rem',
              overflowX: 'auto',
              margin: 0
            }}
          >
            https://storage.cloud.google.com/data-benchflux/TREE/fluxCo2/tree_fluxCo2_20200701.tif
          </pre>
        </div>
      </div>

      <div className="content-block" style={{ marginBottom: 0 }}>
        <h2>Tutorials</h2>
        <div className="cta-panel">
          <p style={{ marginBottom: 0 }}>
            <strong>Coming soon:</strong> step-by-step guides covering data preparation, running
            analyses, interpreting results, creating custom visualizations, and integrating
            FluxMapper outputs into your workflows.
          </p>
        </div>
      </div>
    </div>
  );
}
