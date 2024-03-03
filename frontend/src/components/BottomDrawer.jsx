import styles from "./BottomDrawer.module.css";

export default function BottomDrawer({ children }) {
  return <footer className={styles.container}>{children}</footer>;
}
