import React from "react";

import { ListGroupItem } from "react-bootstrap";

class MovieSmallCard extends React.Component {
	handleClick = () => {
		this.props.itemClicked(this.props.movie.id);
	}

	render() {
		return (
			<ListGroupItem
				onClick={this.handleClick}
				active={this.props.active}
			>
				<strong> {this.props.movie.title} </strong>
				{ '(' + this.props.movie.release_date + ')'}
			</ListGroupItem>
		);
	}
}

export default MovieSmallCard;
