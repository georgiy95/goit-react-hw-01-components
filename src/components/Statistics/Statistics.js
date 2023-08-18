import { Container, Item, StatsList, Title } from './Statistics.styled';
import { Stats } from './Stats';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(item => (
          <Item key={item.id} label={item.label}>
            <Stats item={item} />
          </Item>
        ))}
      </StatsList>
    </Container>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
