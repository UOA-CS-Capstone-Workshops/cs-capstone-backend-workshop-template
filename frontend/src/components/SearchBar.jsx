import Input from "./Input";
import styles from "./SearchBar.module.css";

/**
 * Allows searches to take place.
 */
export default function SearchBar({ onChange }) {
  return (
    <div className={styles.container}>
      <Input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        placeholder="🔍 Search for todos here"
      />
    </div>
  );
}
