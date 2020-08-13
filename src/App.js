import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import DisplayGifs from './DisplayGifs';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      gifs: []
    }
  }

  performSearch = (event, searchQuery) => { //or componentDidMount()??
    event.preventDefault();
    axios({
      url: `http://api.giphy.com/v1/gifs/search`,
      method: `GET`,
      responseType: `json`,
      params: {
        api_key: `eXvQjN8uvGbrhm7fuMlAGjG1deihdFcj`,
        q: searchQuery,
        limit: `100`,
        rating: `g`,
        lang:  `en`,
        random_id: ``
      }
    }).then((response) => {
      console.log(response); //.data.data.url?
      response = response.data.data
      this.setState({
        gifs: response
      })
    })
  }

  render() {
    //console.log(this.state.gifs)
    return (
      <div className="App">
        <div className="wrapper">
          <SearchBar onSearch={this.performSearch} /> 
          <DisplayGifs data={this.state.gifs} />
          <footer>Powered By GIPHY</footer>
        </div>
      </div>
    );
  }
}

export default App;
