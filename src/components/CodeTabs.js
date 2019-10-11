import React, { Component } from 'react'
import StripeTemplate from './StripeTemplate'
import CodeBlock from '@tenon-io/tenon-codeblock';
export default class CodeTabs extends Component {
  state = {
    tabIndex: 0
  }
  
  changeTab = (e) => {
    console.log(e.target.dataset.index);
    e.preventDefault();
    let currentIndex = parseInt(e.target.dataset.index);
    if (currentIndex !== this.state.tabIndex) {
      this.setState({
        tabIndex:currentIndex
      });
    }
    console.log(this.state.tabIndex);
  }
  render(props) {
    console.log(this.props);
    let {...stripeDetails} = this.props.details;
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
      id: this.props.details.stripeID,
      stripe: {...stripeDetails}
    };
    let toPrint = JSON.stringify(stripeOutput, null, 2);
    return (
      <div>
        <div className="container">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-pills card-header-pills">
                <li className="nav-item">
                  <button className={"nav-link code-tab btn " + (this.state.tabIndex === 0 ? 'active': null)} data-index="0" onClick={this.changeTab}>JSON</button>
                </li>
                <li className="nav-item">
                  <button className={"nav-link code-tab btn " + (this.state.tabIndex === 1 ? 'active': null)} data-index="1" onClick={this.changeTab}>HTML</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              {this.state.tabIndex === 0 ? (
                <div>
                  <CodeBlock
                      codeString={toPrint}
                      language="json"
                  />                    
                </div>
              ) : (
                <div>
                  <StripeTemplate details={this.props.details} />
                </div>
              )

              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
