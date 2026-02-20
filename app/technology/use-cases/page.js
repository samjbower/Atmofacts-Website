export const metadata = {
  title: 'FluxMapper Use Cases'
};

export default function UseCasesPage() {
  return (
    <>
      <style>{`
        .use-cases-container {
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

        .placeholder-content {
          background: #f8f8f8;
          border: 1px solid #e5e5e5;
          border-left: 4px solid #ed7124;
          padding: 2rem;
          border-radius: 6px;
          margin-top: 2rem;
        }

        .placeholder-content p {
          font-size: 1rem;
          line-height: 1.6;
          color: #555555;
          margin: 0;
        }
      `}</style>

      <div className="use-cases-container">
        <div className="page-header">
          <h1>Use Cases</h1>
          <p>Real-world applications of FluxMapper technology</p>
        </div>

        <div className="placeholder-content">
          <p>
            Coming soon. We're documenting compelling case studies showing how FluxMapper enables unprecedented insights across agriculture, carbon markets, environmental monitoring, and ecosystem research.
          </p>
        </div>
      </div>
    </>
  );
}
