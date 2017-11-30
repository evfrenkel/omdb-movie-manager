import React from "react";

import MovieSmallCard from "./MovieSmallCard";

import { ListGroup } from "react-bootstrap";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selected: this.props.selectedMovieID };
    this.rowClicked = this.rowClicked.bind(this);
  }

  rowClicked(movieID) {
    this.props.itemClicked(movieID);
    this.setState({ selected: movieID });
  }

  render() {
    let movies = this.props.movies.map(movie => (
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
