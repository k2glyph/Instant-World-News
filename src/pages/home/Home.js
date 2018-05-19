import React, {Component} from 'react';
import './Home.css';
import Search from './Search.js';
import './Search.css';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Search default="bbc-news" store={this.props.store}/>
      </React.Fragment>
    );
  }
}

export default Home;
