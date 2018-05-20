import React, {Component} from 'react';
import './Home.css';
import Search from './Search.js';
import './Search.css';

class Home extends Component {
  render() {
    console.log(this.props.match.params.value);
    return (
      <React.Fragment>
        <Search default="bbc-news" store={this.props.store} value={this.props.match.params.value}/>
      </React.Fragment>
    );
  }
}

export default Home;
