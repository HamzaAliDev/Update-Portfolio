import styles from './Button.module.css';

const GradientButton = () => {
    return (
        <div className={styles.styled_btn_wrapper}>
            <button className={styles.btn}>About me</button>
        </div>
    )
}

export default GradientButton
