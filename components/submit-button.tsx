import * as React from "react";

import styles from "./submit-button.module.css";

interface SubmitButtonProps {
  label: string;
}

function SubmitButton(props: SubmitButtonProps) {
  return (
    <button className={styles.submitButton} type="submit">
      {props.label}
    </button>
  );
}

export default SubmitButton;
