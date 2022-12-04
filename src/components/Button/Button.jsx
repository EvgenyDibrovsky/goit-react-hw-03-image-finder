import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ children, onClick }) => (
  <button className={css.Button} type="button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
