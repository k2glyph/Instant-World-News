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
  // This code is ran when the component mounts
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  
  // an outer div for styling purposes
  // changed class to ClassName
  // changed style from string to an object

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
{/* <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Text Ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2288962802360795"
     data-ad-slot="6290912191"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script> */}