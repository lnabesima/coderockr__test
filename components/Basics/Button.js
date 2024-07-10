import styles from './Button.module.scss';

const Button = ({ onClick, label, disabled, newPost }) => {
  return (
    <button
      className={
        disabled ? `${styles.button} ${styles.disabled}` : styles.button
      }
      onClick={onClick}>
      <img
        className={styles.img}
        src={newPost ? '/post.svg' : '/send.svg'}
        alt=''
      />{' '}
      {label}
    </button>
  );
};

export { Button };
