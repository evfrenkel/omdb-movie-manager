import React from "react";
import Movie from "./Movie";

import { Row, Col } from "react-bootstrap";

class Faves extends React.Component {
  render() {
    const allFavesComponents = Object.keys(this.props.allFaves).map((ID) => (
      <Col sm={4} md={3} key={ID}>
        <Movie
          movie={this.props.allFaves[ID]}
          loading={false}
          isFave={true}
          toggleFavorite={this.props.toggleFavorite}
        />
      </Col>
    ));
    return <Row className="mt-4 mx-3">{allFavesComponents}</Row>;
  }
}

export default Faves;
