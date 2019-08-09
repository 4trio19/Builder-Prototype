import React from 'react'

export default function CodeBox(props) {
  console.log(props);
  let toPrint = JSON.stringify(props.details, null, 2);
  return (
    // This needs work to make the stripe object properly
    <div className="code-box container">
      <h4>Stripe JSON</h4>
      <pre>
        <code>
          {toPrint}
        </code>
      </pre>
    </div>
  )
}
