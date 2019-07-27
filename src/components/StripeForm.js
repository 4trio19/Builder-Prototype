import React from 'react';
import { Form, Input } from 'unform';
export default function StripeForm(props) {
  console.log(props);
  return (
      <Form>
        <Input name="width" value={props.details.stripeWidth} readOnly />
      </Form>
  )
}
