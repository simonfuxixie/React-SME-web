import React, { Component } from 'react';

class SocItem extends Component {
  render () {
    return (
      <div className="soc-item">
        <a href={this.props.href} target="_blank" rel="noopener noreferrer">
          <span className={`${this.props.class} socicon mbr-iconfont mbr-iconfont-social`}></span>
        </a>
      </div>
    );
  }
}

export default SocItem;
