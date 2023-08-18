import { Label, Percentage } from './Stats.styled';
import PropTypes from 'prop-types';

export const Stats = ({ item: { label, percentage } }) => {
  return (
    <>
      <Label>{label}</Label>
      <Percentage> {percentage}% </Percentage>
    </>
  );
};

Stats.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
