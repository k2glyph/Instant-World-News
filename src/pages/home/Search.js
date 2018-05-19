import React, { Component } from 'react';
import axios from 'axios';
import Display from './Display.js';
import './Display.css';
import Outlet from './Outlet.js';
import './Outlet.css';
import { observer } from 'mobx-react';

@observer
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: 'espn-cric-info'
    };
    this.handleChange = this.handleChange.bind(this);

    this.apiUrl =
      'https://newsapi.org/v2/sources?language=en&apiKey=ef90a7354e49437abcd71a8748c9cfd7';
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  componentWillMount() {
    this.props.store.filter=this.state.value;
    axios.get(this.apiUrl).then(res => {
      this.props.store.news=res.data.sources;
      this.props.store.count=res.data.sources.length;
    });
  }

  render() {
    const { news, count, filter } = this.props.store;
    
    return (
      <div className="">
        {/* <h4>Select from {count} News Outlets</h4> */}
        <Outlet default={filter} />
        <Display default={filter} />
      </div>
    );
  }
}

export default Search;
