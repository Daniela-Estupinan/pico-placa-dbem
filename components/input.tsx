import * as React from "react";

import styles from "./input.module.css";

interface InputProps {
  placeholder: string;
  pattern: string;
  label: string;
  id: string;
}

function Input(props: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.inputLabel} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={styles.inputField}
        type="text"
        id={props.id}
        name={props.id}
        pattern={props.pattern}
        placeholder={props.placeholder}
        autoComplete="off"
        required
      />
    </div>
  );
}

export default Input;
