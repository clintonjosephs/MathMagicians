import PropTypes from 'prop-types';

const Screen = ({ total, operation, next }) => (
  <div className="screen" data-testid="screen">
    {total}
    {operation}
    {next}
  </div>
);

Screen.defaultProps = {
  operation: null,
  next: null,
  total: '0',
};

Screen.propTypes = {
  operation: PropTypes.string,
  next: PropTypes.string,
  total: PropTypes.string,
};

export default Screen;
