import type { ButtonProps } from "../../types/types";
import Button from "../../utils/button/Button";
import Form from "../../utils/form/Form";
import Input from "../../utils/input/Input";
import SearchContainer from "../search-container/SearchContainer";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <SearchContainer />
        {/* <div className="form-group"> */}
        {/* <label for="email">Company Email</label> */}
        {/* </div> */}

        {/* <button className="form-submit-btn" type="submit">
              Submit
            </button> */}
      </header>
    </>
  );
}
