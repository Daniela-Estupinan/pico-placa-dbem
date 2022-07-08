import * as React from "react";

import styles from "./form.module.css";

interface FormProps {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler;
}

function Form(props: FormProps) {
  return (
    <form className={styles.form} onSubmit={props.onSubmit}>
      <h1 className={styles.formHeading}>Pico y Placa Quito</h1>
      <div className={styles.formWrapper}>{props.children}</div>
    </form>
  );
}

export default Form;
