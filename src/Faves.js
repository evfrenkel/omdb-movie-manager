import React from "react";
import Movie from "./Movie";

import { Row, Col } from "react-bootstrap";

class Faves extends React.Component {
	render() {
		let allFavesComponents = Object.keys(this.props.allFaves).map(ID => (
			<Col sm={4} md={3} key={ID}>
				<Movie
					movie={this.props.allFaves[ID]}
					loading={false}
					isFave={true}
					toggleFavorite={this.props.toggleFavorite}
				/>
			</Col>
		));
		return (
			<Row>
				{allFavesComponents}
			</Row>
		);
	}
}

export default Faves;
