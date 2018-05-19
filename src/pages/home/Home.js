import React, {Component} from 'react';
import './Home.css';
import Search from './Search.js';
import './Search.css';
import Footer from './Footer.js';
import './Footer.css';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Search default="bbc-news"/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Home;
