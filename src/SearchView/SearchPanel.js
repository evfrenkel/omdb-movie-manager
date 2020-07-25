import React from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

import { ProgressBar } from "react-bootstrap";

import movieAPI from "../movieAPI";

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: props.initialResults,
      noResults: false,
      listLoading: false,
    };

    this.selectedMovieID = null;
  }

  handleSelect = (id) => {
    this.selectedMovieID = id;

    movieAPI.getTitleDetails(id).then(this.props.handleSelectMovie);
  };

  handleNewSearch = (str) => {
    this.props.handleNewSearch(str);
    this.setState({ listLoading: true });
    movieAPI.searchTitle(str).then(this.updateMovies);
  };

  updateMovies = (r) => {
    console.log(r);
    if (r.Response !== "False") {
      this.setState({
        noResults: false,
        searchResults: r.results,
        listLoading: false,
      });
      this.props.handleNewResults(r.results);
    } else {
      this.setState({ noResults: true, searchResults: [], listLoading: false });
    }
  };

  render() {
    return (
      <div>
        <SearchForm
          newSearch={this.handleNewSearch}
          searchTypeChanged={this.searchTypeChanged}
          searchType={this.state.searchType}
          searchHistory={this.props.searchHistory}
        />

        {this.state.listLoading ? (
          <ProgressBar animated now={100} />
        ) : (
          <SearchResults
            movies={this.state.searchResults}
            itemClicked={this.handleSelect}
            selectedMovieID={this.selectedMovieID}
          />
        )}
        {this.state.noResults && <p>No results</p>}
      </div>
    );
  }
}

export default SearchPanel;
