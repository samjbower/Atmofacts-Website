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
        title:
          'BenchFlux: Scalable AI Benchmarks for Terrestrial Carbon Fluxes to Advance Research, Education, and Resource Management',
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
    <section className="page-section" style={{ paddingBottom: 'clamp(3rem, 7vw, 5.5rem)' }}>
      <div className="page-container">
        <div className="page-header">
          <span className="eyebrow">Events</span>
          <h1>AtmoFacts at AGU 2025</h1>
          <p>
            Meet the team December 15-19 in New Orleans. Stop by our sessions to talk FluxMapper&trade;,
            atmospheric benchmarks, and upcoming product releases.
          </p>
        </div>
        <div className="schedule-grid">
          {schedule.map((block) => (
            <article key={block.group} className="content-card">
              <h2 style={{ fontSize: '1.2rem' }}>{block.group}</h2>
              <ul className="schedule-list">
                {block.sessions.map((session) => (
                  <li key={session.title}>
                    <a href={session.href} target="_blank" rel="noreferrer">
                      {session.title}
                    </a>
                    <small>{session.slot}</small>
                    <small>{session.location}</small>
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
