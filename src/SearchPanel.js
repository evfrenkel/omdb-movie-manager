import React from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

import { ProgressBar } from "react-bootstrap";

class SearchPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
			// searchType: "movie",
			noResults: false,
			listLoading: false
		};

		this.selectedMovieID = null;

		this.handleNewSearch = this.handleNewSearch.bind(this);
		this.updateMovies = this.updateMovies.bind(this);
		// this.searchTypeChanged = this.searchTypeChanged.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}

	// searchTypeChanged(type, search) {
	// 	this.setState({ searchType: type }, () => this.handleNewSearch(search));
	// }

	handleSelect(id) {
		this.selectedMovieID = id;
		fetch("https://api.themoviedb.org/3/movie/" + id + 
			"?api_key=3058e041b6c8b665ff6e7c489a63e9d8&language=en-US", {}).then(
			res => {
				res.json().then(result => {
					this.props.handleSelectMovie(result);
				});
			},
			error => {
				console.log(error.message);
			}
		);
	}

	handleNewSearch(str) {
		this.props.handleNewSearch(str);
		// loading animation state
		this.setState({ listLoading: true });
		// load search
		fetch(
			"https://api.themoviedb.org/3/search/movie?query=" + str + 
			"&api_key=3058e041b6c8b665ff6e7c489a63e9d8&language=en-US&page=1&include_adult=false",
			{}
		).then(res => res.json().then(this.updateMovies));
	}

	updateMovies(r) {
		if (r.Response !== "False") {
			this.setState({
				noResults: false,
				searchResults: r.results,
				listLoading: false
			});
		} else {
			this.setState({ noResults: true, searchResults: [], listLoading: false });
		}
	}

	render() {
		return (
			<div>
				<SearchForm
					newSearch={this.handleNewSearch}
					searchTypeChanged={this.searchTypeChanged}
					searchType={this.state.searchType}
					searchHistory={this.props.searchHistory}
				/>

				{this.state.listLoading
					? <ProgressBar active now={100} />
					: <SearchResults
							movies={this.state.searchResults}
							itemClicked={this.handleSelect}
							selectedMovieID={this.selectedMovieID}
						/>}
				{this.state.noResults && <p>No results</p>}
			</div>
		);
	}
}

export default SearchPanel;
