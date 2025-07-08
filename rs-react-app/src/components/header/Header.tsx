import SearchContainer from "../search-container/SearchContainer";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <SearchContainer />
      </header>
    </>
  );
}
