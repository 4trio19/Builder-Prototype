import React from 'react';
import PreviewBox from './PreviewBox';
import CodeBox from './CodeBox';
export default function OutputBox(props) {
  return (
    <div className="output-box container">
      <PreviewBox />
      <CodeBox details={props.details} />
    </div>
  )
}
