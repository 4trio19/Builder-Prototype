import React from 'react';
import StripeForm from './StripeForm';
export default function InputBox(props) {
  return (
    <div className="input-box container">
      <StripeForm details={props.details} handleChange={props.handleChange} />
    </div>
  )
}
