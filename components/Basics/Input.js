import styles from './Input.module.scss';

const Input = ({ type, label, placeholder, id, value, onChange, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export { Input };
