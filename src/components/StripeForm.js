import React from 'react';
import { Form, Input } from 'unform';
export default function StripeForm(props) {
  const initialData = props.details;
  console.log(initialData);
  return (
      <Form id="stripe-form" initialData={initialData}>
        <fieldset>
        <label htmlFor="stripeWidth">
          Width:
        <Input name="stripeWidth" type="number" onChange={props.handleChange} />
        </label>
        <label htmlFor="adCount">
          # of Columns:
        <Input name="adCount" type="number" onChange={props.handleChange} />
        </label>
      </fieldset>
      </Form>
  )
}
