import type { JSX } from "react";
import type { ButtonProps } from "../../types/types";
import Button from "../../utils/button/Button";
import Form from "../../utils/form/Form";
import Input from "../../utils/input/Input";
import styles from "./SearchContainer.module.scss"


export default function SearchContainer():JSX.Element {

  const btnProps: ButtonProps = {
    name: "Submit",
    className: "form-submit-btn",
    type: "submit",
  };
  const children = [
    <Input />,
    <Button{...btnProps} />
  ]

  return (
    <div className={styles.container}>
      <Form  children={ children} />

    </div>
  )
}