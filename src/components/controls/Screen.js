import PropTypes from 'prop-types';

const Screen = ({ total, operation, next }) => (
  <div className="screen">
    {total}
    {operation}
    {next}
  </div>
);

Screen.defaultProps = {
  operation: null,
  next: null,
};

Screen.propTypes = {
  total: PropTypes.string.isRequired,
  operation: PropTypes.string,
  next: PropTypes.string,
};

export default Screen;
