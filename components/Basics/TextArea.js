import styles from './Input.module.scss';

const TextArea = ({ label, placeholder, id, value, onChange, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <textarea
        className={styles.textArea}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export { TextArea };
