import PropTypes from 'prop-types';

const Screen = ({ total, operation, next }) => (
  <div className="screen" role="show-display">
    {total}
    {operation}
    {next}
  </div>
);

Screen.defaultProps = {
  operation: null,
  next: null,
  total: 0
};

Screen.propTypes = {
  total: PropTypes.number.isRequired,
  operation: PropTypes.string,
  next: PropTypes.string,
};

export default Screen;
