import React from 'react';

import MovieSmallCard from './MovieSmallCard';

import { ListGroup } from 'react-bootstrap';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selected: this.props.selectedMovieID};
    this.rowClicked = this.rowClicked.bind(this);
  }

  rowClicked(imdbID) {
    this.props.itemClicked(imdbID);

    this.setState({selected: imdbID});
  }

  render() {

    var rows = this.props.movies.map(movie => 
          <MovieSmallCard movie={movie} 
                          itemClicked={this.rowClicked}
                          key={movie.imdbID + movie.Title + movie.Year}  
                          active={this.state.selected === movie.imdbID} />);

    return (
      <ListGroup>
        {rows}
      </ListGroup>
    );
  }
}

export default MovieList;