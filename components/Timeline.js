import Image from 'next/image';

const timelineData = [
  {
    year: 2013,
    description: 'Founder Dr. Stefan Metzger invents the FluxMapper software to address the need for accurate greenhouse gas measurements from aerial platforms.',
    image: '/images/aircraft.svg'
  },
  {
    year: 2017,
    description: 'FluxMapper is extended to EC tower stations to act as a force multiplier.',
    image: '/images/carbonnode.svg'
  },
{
    year: "2017-2024",
    description: 'Researchers continuously refine and validate the FluxMapper software through extensive field campaigns across diverse ecosystems worldwide.',
    image: '/images/paper.svg'
  },
  {
    year: "2023-present",
    description: 'AtmoFacts is founded, FluxMapper is patented, and commercial services are launched to provide greenhouse gas measurement solutions to a broader market.',
    image: '/images/FluxMapComputer.svg'
  }
];

export default function Timeline() {
  return (
    <div className="timeline-container">
      <style>{`
        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin-top: 7rem;
          margin-left: auto;
          margin-right: auto;
          padding: 1rem 0;
        }

        .timeline-track {
          position: relative;
          padding: 0;
        }

        .timeline-track::before {
          content: '';
          position: absolute;
          left: 60px;
          width: 3px;
          height: 100%;
          background-color: #1b1b1b;
          top: 0;
        }

        .timeline-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 3rem;
          position: relative;
          gap: 4rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: 54px;
          width: 12px;
          height: 12px;
          background-color: #1b1b1b;
          border-radius: 50%;
          border: 3px solid #ffffff;
          top: 0;
          z-index: 2;
        }

        .timeline-content {
          flex: 0 0 40%;
          padding-top: 5rem;
          padding-left: 80px;
        }

        .timeline-year {
          font-size: 1.75rem;
          font-weight: 600;
          color: #1b1b1b;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .timeline-year::before {
          content: '';
          display: block;
          width: 4px;
          height: 24px;
          background-color: #ed7124;
        }

        .timeline-text p {
          margin: 0;
          color: #1b1b1b;
          font-size: 1rem;
          line-height: 1.6;
          text-align: left;
        }

        .timeline-image-wrapper {
          flex: 1;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          padding-top: 5rem;
        }

        .timeline-image {
          width: 100%;
          height: 250px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .timeline-image img {
          max-width: 100%;
          max-height: 250px;
          object-fit: contain;
        }

        @media (max-width: 900px) {
          .timeline-item {
            flex-direction: column;
            gap: 2rem;
          }

          .timeline-content {
            flex: 1;
          }

          .timeline-image-wrapper {
            flex: 1;
          }

          .timeline-track::before {
            left: 24px;
          }

          .timeline-item::before {
            left: 18px;
          }

          .timeline-content {
            padding-left: 60px;
          }
        }
      `}</style>

      <div className="timeline-track">
        {timelineData.map((item, index) => (
          <div key={item.year} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-text">
                <p>{item.description}</p>
              </div>
            </div>
            <div className="timeline-image-wrapper">
              <div className="timeline-image">
                <Image src={item.image} alt={`${item.year}`} width={360} height={360} loading="lazy" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
