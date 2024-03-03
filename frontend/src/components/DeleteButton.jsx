import { SecondaryButton } from "./ColorButton";
import styles from "./DeleteButton.module.css";

/**
 * A small round gray button marked with an X.
 */
export default function DeleteButton(props) {
  return (
    <SecondaryButton className={styles.button} {...props}>
      X
    </SecondaryButton>
  );
}
