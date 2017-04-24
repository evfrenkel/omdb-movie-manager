import React from 'react';

import { ListGroupItem } from 'react-bootstrap';

class MovieSmallCard extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.itemClicked(this.props.movie.imdbID);
	}

  render() {
    return (
      <ListGroupItem onClick={this.handleClick} active={this.props.active}>
            <strong> {this.props.movie.Title} </strong> ({this.props.movie.Year})
      </ListGroupItem>
    );
  }
}

export default MovieSmallCard;