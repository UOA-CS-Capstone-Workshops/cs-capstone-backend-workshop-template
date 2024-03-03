import styles from "./AddButton.module.css";
import { PrimaryButton } from "./ColorButton";

/**
 * A big circular "+" button
 */
export default function AddButton({ onClick }) {
  return (
    <PrimaryButton className={styles.button} onClick={onClick}>
      +
    </PrimaryButton>
  );
}
