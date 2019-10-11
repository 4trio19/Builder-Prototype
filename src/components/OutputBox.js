import React from 'react';
import PreviewBox from './PreviewBox';
import CodeBox from './CodeBox';
export default function OutputBox(props) {
  let {...stripeDetails} = props.details;
  delete stripeDetails.stripes;
  delete stripeDetails.domain;
  delete stripeDetails.esp;
  delete stripeDetails.rows;
  delete stripeDetails.stripeType;
  delete stripeDetails.rows;
  delete stripeDetails.stripeWidth;
  delete stripeDetails.stripeID;
  stripeDetails.articleCount = stripeDetails.columns;
  delete stripeDetails.columns;
  stripeDetails.isOpenRTB = false;
  stripeDetails.dfpConfig = null;
  let stripeOutput = {
    id: props.details.stripeID,
    stripe: {...stripeDetails}
  };
  console.log(stripeDetails);
  return (
    <div className="output-box container">
      <PreviewBox />
      <CodeBox details={stripeOutput} />
    </div>
  )
}
