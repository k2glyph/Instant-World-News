import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Ad extends Component {
  static propTypes = {
    client: PropTypes.string,
    slot: PropTypes.string,
    format: PropTypes.string,
    wrapperDivStyle: PropTypes.object
  }
  static defaultProps = {
    client: "ca-pub-2288962802360795",
    slot: "6290912191",
    format: "auto",
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // (window.adsbygoogle = window.adsbygoogle || []).push({});
    window.onload = function() {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  }

  render() {
    return (
      <div style={this.props.wrapperDivStyle} > 
        <ins className="adsbygoogle"  
          style={{'display': 'block'}}
          data-ad-client={this.props.client}
          data-ad-slot={this.props.slot}
          data-ad-format={this.props.format}>
        </ins>
      </div>
    );
  }
}
