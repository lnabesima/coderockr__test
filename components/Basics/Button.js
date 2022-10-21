import styles from './Button.module.scss';

const Button = ({ onClick, label, disabled }) => {
  return (
    <button
      className={
        disabled ? `${styles.button} ${styles.disabled}` : styles.button
      }
      onClick={onClick}>
      <img className={styles.img} src='/send.svg' alt='' /> {label}
    </button>
  );
};

export { Button };
