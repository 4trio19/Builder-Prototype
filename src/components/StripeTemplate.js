import React from 'react'
import CodeBlock from '@tenon-io/tenon-codeblock';
export default function StripeTemplate(props) {
  let { ...details } = props.details;
  let htmlString = `
  <!--POWERINBOX-->
  <div class="${details.stripeID}">
    <table cellpadding="0" cellspacing="0" width="${details.stripeWidth}">
      <tr>
        <td align="center">&nbsp;</td>
      </tr>
    </table>
  </div>
  <!--POWERINBOX-->
  `;
  console.log(details);
  return (
    <CodeBlock
      codeString={htmlString}
      language="html"
    />
  )
}
