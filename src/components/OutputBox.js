import React from 'react';
import PreviewBox from './PreviewBox';
import CodeBox from './CodeBox';
export default function OutputBox() {
  return (
    <div className="output-box container">
      <PreviewBox />
      <CodeBox />
    </div>
  )
}
