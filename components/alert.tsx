import * as React from "react";

import styles from "./alert.module.css";

type AlertType = "allowed" | "restricted";

interface AlertProps {
  label: string;
  type: AlertType;
}

function Alert(props: AlertProps) {
  return (
    <div className={`${styles.alert} ${styles[props.type]}`} role="alert">
      <p>{props.label}</p>
    </div>
  );
}

export default Alert;
