import Image from 'next/image';

const timelineData = [
  {
    year: '2013',
    description:
      'Founder Dr. Stefan Metzger invents the FluxMapper software to address the need for accurate greenhouse gas measurements from aerial platforms.',
    image: '/images/aircraft.svg'
  },
  {
    year: '2017',
    description: 'FluxMapper is extended to tower-based flux stations to act as a force multiplier.',
    image: '/images/carbonnode.svg'
  },
  {
    year: '2017-2024',
    description:
      'Researchers continuously refine and validate the FluxMapper software through extensive field campaigns across diverse ecosystems worldwide.',
    image: '/images/paper.svg'
  },
  {
    year: '2023-present',
    description:
      'AtmoFacts is founded, FluxMapper is patented, and commercial services are launched to bring direct measurement to a broader market.',
    image: '/images/FluxMapComputer.svg'
  }
];

export default function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline-track">
        {timelineData.map((item) => (
          <div key={item.year} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-text">
                <p>{item.description}</p>
              </div>
            </div>
            <div className="timeline-image-wrapper">
              <div className="timeline-image">
                <Image src={item.image} alt="" width={320} height={180} loading="lazy" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
