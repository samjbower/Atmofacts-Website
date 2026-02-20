const schedule = [
  {
    group: 'AtmoFacts / FluxMapper presentations',
    sessions: [
      {
        title: 'Scaling Spatialized Eddy-Covariance Methods for Applications Across Sectors',
        slot: 'Poster: Mon Dec 15 · 2:30 – 5:30 PM CST',
        location: 'Poster Hall',
        href: 'https://agu.confex.com/agu/agu25/meetingapp.cgi/Paper/1898416'
      },
      {
        title: 'Flux Scaling as the Final Frontier: Challenges and Opportunities Across Disciplines',
        slot: 'Oral: Tue Dec 16 · 10:30 AM CST',
        location: 'Room 267-268',
        href: 'https://agu.confex.com/agu/agu25/meetingapp.cgi/Paper/1973632'
      },
      {
        title: 'BenchFlux: Scalable AI Benchmarks for Terrestrial Carbon Fluxes to Advance Research, Education, and Resource Management',
        slot: 'Oral: Fri Dec 19 · 8:40 AM CST',
        location: 'Room 344-345',
        href: 'https://agu.confex.com/agu/agu25/meetingapp.cgi/Paper/1997681'
      }
    ]
  },
  {
    group: 'Sessions chaired by AtmoFacts',
    sessions: [
      {
        title: 'Surface-Atmosphere Interactions: Multisensor Integration for Real-World Impact I',
        slot: 'Poster session: Wed Dec 17 · 8:30 – 12:00 AM CST',
        location: 'Poster Hall',
        href: 'https://agu.confex.com/agu/agu25/meetingapp.cgi/Session/265696'
      },
      {
        title: 'Surface-Atmosphere Interactions: Multisensor Integration for Real-World Impact II',
        slot: 'Oral session: Wed Dec 17 · 4:15 – 5:45 PM CST',
        location: 'Room 267-268',
        href: 'https://agu.confex.com/agu/agu25/meetingapp.cgi/Session/267022'
      }
    ]
  }
];

export const metadata = {
  title: 'AGU 2025 schedule'
};

export default function SchedulePage() {
  return (
    <section>
      <div className="page-container">
        <div className="content-card mb-5">
          <h1 className="section-title">AtmoFacts at AGU 2025</h1>
          <p>
            Meet the team December 15-19 in New Orleans. Stop by our sessions to talk FluxMapper™, atmospheric benchmarks and upcoming product releases.
          </p>
        </div>
        <div className="feature-grid">
          {schedule.map((block) => (
            <article key={block.group} className="feature-card">
              <h2 className="h5">{block.group}</h2>
              <ul className="list-unstyled mt-3">
                {block.sessions.map((session) => (
                  <li key={session.title} className="mb-3">
                    <a href={session.href} target="_blank" rel="noreferrer" className="fw-semibold d-block">
                      {session.title}
                    </a>
                    <small className="d-block text-muted">{session.slot}</small>
                    <small className="text-muted">{session.location}</small>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
