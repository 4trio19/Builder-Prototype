import React, { Component } from 'react'

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
    console.log(props);
    let toPrint = JSON.stringify(this.props.details, null, 2);
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
                  <pre>
                    <code>
                      {toPrint}
                    </code>
                  </pre>
                </div>
              ) : (
                <div>HTML</div>
              )

              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
