import * as React from "react";

import Validator, { FormFields } from "../controller";
import Alert from "../components/alert";
import Input from "../components/input";
import Form from "../components/form";
import SubmitButton from "../components/submit-button";

function App() {
  const [submitted, setSubmited] = React.useState(false);
  const [hasRestriction, setHasRestriction] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmited(true);

    const validator = new Validator();
    const formData = Object.fromEntries(
      new FormData(event.target as HTMLFormElement)
    );

    setHasRestriction(
      validator.hasRestriction((formData as unknown) as FormFields)
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id="model"
        pattern=""
        label="Modelo del Vehiculo"
        placeholder="Chevrolet"
      />
      <Input
        id="plate"
        pattern="\D{3,4}-\d{3,4}"
        label="Placa (XXX-999, XXXX-9999)"
        placeholder=" "
      />
      <Input
        id="date"
        pattern="\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])"
        label="Día (AAAA-MM-DD)"
        placeholder="2022-11-14"
      />
      <Input
        id="time"
        pattern="([0-1]?[0-9]|2[0-3]):[0-5][0-9]"
        label="Hora (HH:MM) 24h"
        placeholder=" "
      />
      <SubmitButton label="Consultar" />
      {submitted &&
        (hasRestriction ? (
          <Alert label="No puede circular" type="restricted" />
        ) : (
          <Alert label="Si puede circular" type="allowed" />
        ))}
    </Form>
  );
}

export default App;
