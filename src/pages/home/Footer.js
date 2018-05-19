import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footerSection">
        <a className="smoothScroll" href="#">
          Top <i className="fa fa-2x fa-arrow-up" aria-hidden="true" />
        </a>

        <span className="coffee">
          Made with
          <i className="fa fa-coffee" aria-hidden="true" />
        </span>
      </div>
    );
  }
}

export default Footer;
