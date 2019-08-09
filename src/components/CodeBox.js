import React from 'react'
import CodeTabs from './CodeTabs';
export default function CodeBox(props) {
  return (
    // This needs work to make the stripe object properly
    <div className="code-box container">
      <CodeTabs details={props.details} />
    </div>
  )
}
