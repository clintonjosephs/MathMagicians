import PropTypes from 'prop-types';

const Button = ({ text, className, handlerClick }) => (
  <input
    value={text}
    className={`${className || ''}`}
    key={text}
    type="button"
    onClick={handlerClick}
  />
);

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  handlerClick: PropTypes.func.isRequired,
};

export default Button;
