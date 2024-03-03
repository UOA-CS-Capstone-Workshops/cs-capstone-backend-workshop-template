import styles from "./ColorButton.module.css";
import clsx from "clsx";

/**
 * A styled HTML button which gets dimmer if hovered, and even dimmer when active.
 */
export default function ColorButton({ className, children, ...props }) {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {children}
    </button>
  );
}

/**
 * A Blue-ish button
 */
export const PrimaryButton = (props) =>
  ColorButton({ style: { color: "white", backgroundColor: "#2b2bef" }, ...props });

/**
 * A Gray-ish button
 */
export const SecondaryButton = (props) =>
  ColorButton({ style: { color: "white", backgroundColor: "#595959" }, ...props });

/**
 * A Green-ish button
 */
export const SuccessButton = (props) =>
  ColorButton({ style: { color: "white", backgroundColor: "#277939" }, ...props });

/**
 * A Yellow-ish button
 */
export const WarningButton = (props) =>
  ColorButton({ style: { color: "white", backgroundColor: "#f5aa0a" }, ...props });

/**
 * A Red-ish button
 */
export const DangerButton = (props) =>
  ColorButton({ style: { color: "white", backgroundColor: "#ec361b" }, ...props });
