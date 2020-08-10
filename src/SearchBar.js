import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        searchValue: ''
    }

    onSearchChange = e => {
        this.setState({ searchValue: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.state.searchValue)
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="searchBar" onSubmit={this.handleSubmit}>
                <label htmlFor="search"></label>
                <input 
                    name="search"
                    type="search" 
                    placeholder="Search GIPHY" 
                    onChange = {this.onSearchChange} 
                />
                <button type="submit" id="searchBtn"><i id="icon" className="fa fa-search"></i></button>
            </form>
        );
    }
}

export default SearchBar;