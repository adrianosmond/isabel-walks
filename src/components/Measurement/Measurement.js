import './Measurement.css';

const Measurement = ({ sections }) => (
  <p className="measurement">
    {sections.map((section, idx) => (
      <span key={idx} className="measurement__section">
        {section.pre}{' '}
        <span className="measurement__number">{section.number}</span>{' '}
        {section.post}
      </span>
    ))}
  </p>
);

export default Measurement;
