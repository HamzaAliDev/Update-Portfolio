import styles from './Button.module.css';

const Button = () => {
  return (
    <div className={styles.contact_button_wrapper}>
      <button className={styles.button}>Get in touch </button>
      
    </div>
  );
};

export default Button;
