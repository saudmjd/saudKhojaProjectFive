import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './SearchBar';
import GifList from './GifList';


class App extends Component {

  constructor(){
    super();
    this.state = {
      gifs: []
    }
  }

  performSearch(query = '') {
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=vprTsokUFbIv0VBPjw5XYpUlAi2UfgtV&q=${query}&limit=50&offset=0&rating=g&lang=en`)
      .then(res => {
        this.setState({
          gifs: res.data.data
        });
      })
      .catch(error => {
        console.log('ERROR', error);
      });
  }

  render() {
    console.log(this.state.gifs)
    return (
        <div className="App">
          <div>
            <SearchBar onSearch={this.performSearch}/> 
          </div>

          <div className="content">
            <GifList data={this.state.gifs} />
          </div>
        </div>
    );
  }
}


export default App;
