import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

import { ProgressBar } from 'react-bootstrap';


class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [],
                   searchHistory: [],
                   searchType: 'movie',
                   noResults: false,
                   listLoading: false};

    this.searchTerm = '';
    this.selectedMovieID = null;
    
    this.handleNewSearch = this.handleNewSearch.bind(this);
    this.updateMovies = this.updateMovies.bind(this);
    this.searchTypeChanged = this.searchTypeChanged.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
	}

	searchTypeChanged(type, search) {
		console.log('searchTypeChanged::' + search);
		this.setState(() => ({searchType: type}), this.handleNewSearch(search));
	}

	handleSelect(imdbID) {
		this.selectedMovieID = imdbID; 
    fetch('https://www.omdbapi.com/?i=' + imdbID, {}).then(
      res => {
        res.json().then(result => {
            this.props.handleSelectMovie(result);
          });},
      error => 
        { console.log(error.message) });
	}

	handleNewSearch(str) {
		// add to search history
		if(this.state.searchHistory.indexOf(str) === -1)
		this.setState({searchHistory: [str].concat(this.state.searchHistory) });
		// loading animation state
		this.setState({listLoading: true});
		// load search
		fetch('https://www.omdbapi.com/?s=' + str + '&type=' + this.state.searchType, {})
		.then(res => res.json().then(this.updateMovies));
	}

	updateMovies(r) {
		if(r.Response !== "False") {
		  this.setState({noResults: false, searchResults: r.Search, listLoading: false});
		}
		else {
		  this.setState({noResults: true, searchResults: [], listLoading: false});
		}
	}

	render() {
		return (
			<div>
						<SearchForm newSearch={this.handleNewSearch} 
	          searchTypeChanged={this.searchTypeChanged}
	          searchType={this.state.searchType}
	          searchHistory={this.state.searchHistory}/>
		      	
		      	{this.state.listLoading ? <ProgressBar active now={100} /> : 
	                            <SearchResults movies={this.state.searchResults}
	                                   itemClicked={this.handleSelect}
	                                   selectedMovieID={this.selectedMovieID} />}
		      {this.state.noResults &&
		        <p>No results</p>
		      }
      </div>
		      );
	}
}


export default SearchPanel;