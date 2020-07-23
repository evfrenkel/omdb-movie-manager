import React from "react";

import MovieSmallCard from "./MovieSmallCard";

import { ListGroup } from "react-bootstrap";

class SearchResults extends React.Component {
  state = { selected: this.props.selectedMovieID };

  rowClicked = (movieID) => {
    this.props.itemClicked(movieID);
    this.setState({ selected: movieID });
  }

  render() {
    const movies = this.props.movies.map(movie => (
      <MovieSmallCard
        movie={movie}
        itemClicked={this.rowClicked}
        key={movie.id}
        active={this.state.selected === movie.id}
      />
    ));

    return (
      <ListGroup>
        {movies}
      </ListGroup>
    );
  }
}

export default SearchResults;
