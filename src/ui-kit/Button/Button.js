import styles from './Button.module.css';

const Button = ({ children, ...etc }) => {
  return (
    <button className={styles.button} {...etc}>
      {children}
    </button>
  );
};

export default Button;
