import styles from "./Input.module.css";

/**
 * A styled HTML input component.
 */
export default function Input(props) {
  return <input className={styles.input} {...props} />;
}
