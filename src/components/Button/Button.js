import styles from './Button.module.scss';

const Button = ({ setStart, setTime }) => {

  return (
    <div>
      <button className={styles.button} onClick={() => setStart(true)}>START</button>
      <button className={styles.button} onClick={() => setStart(false)}>STOP</button>
      <button className={styles.button} onClick={() => setTime(null)}>RESET</button>
    </div>
  );
}

export default Button;