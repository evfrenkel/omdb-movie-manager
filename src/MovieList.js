import React from 'react';

import MovieSmallCard from './MovieSmallCard';

import { ListGroup } from 'react-bootstrap';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selected: 'null'};
    this.rowClicked = this.rowClicked.bind(this);
  }

  rowClicked(imdbID) {
    this.props.itemSelected(imdbID);

    this.setState({selected: imdbID});
  }

  render() {
    var rows = [];

    this.props.movies.forEach(movie => {
          var active = false;
          if(this.state.selected === movie.imdbID) active = true;
          rows.push(<MovieSmallCard  movie={movie} itemClicked={this.rowClicked} key={movie.imdbID}  active={active} /> );
        }
      );

    return (
      <ListGroup>
        {rows}
      </ListGroup>
    );
  }
}

export default MovieList;