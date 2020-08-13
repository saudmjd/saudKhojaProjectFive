import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        searchValue: ""
    }

    //onSearch = (event) => {
        //this.setState({ searchValue: event.target.searchValue });
    //}

    onChange = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.searchValue)
    }

    render() {
        return (
            <form className="searchBar">
                <label htmlFor="search"></label>
                <div className="searchBarWrap">
                    <input 
                        name="search"
                        type="text" 
                        placeholder="Search GIPHY" 
                        onChange = {this.onChange} 
                        value = {this.state.searchValue} //this double binds. if somehow state changes my value wont be left behind 
                    />
                    <button 
                        onClick={ (event) => {
                            this.props.onSearch(event, this.state.searchValue);
                        } }
                        type="submit" id="searchBtn"><i id="icon" className="fa fa-search"></i></button>
                </div>
            </form>
        );
    }
}

export default SearchBar;