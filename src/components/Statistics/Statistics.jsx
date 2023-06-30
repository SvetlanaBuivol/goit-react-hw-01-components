import PropTypes from 'prop-types';
import { Section, Title, StatsItem, StatsList, getRandomColor } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem key={id} color={getRandomColor()}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </StatsItem>
          );
        })}
      </StatsList>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
