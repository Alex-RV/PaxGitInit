import React, { Component } from 'react';
import './styles.css';

export default class ExampleCss extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  handleClick() {
    const wrapper = this.wrapperRef.current;
    wrapper.classList.toggle('is-nav-open')
  }

  render() {
    return (
      <div ref={this.wrapperRef} className="wrapper" >
        <div className="nav">
          <div className="nav__body">
          </div>
        </div>
      </div>
    );
  }
}