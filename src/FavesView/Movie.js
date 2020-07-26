import React from "react";
import { MoviePoster } from "shared-components";

import { Card, Button, Row, Col, ProgressBar } from "react-bootstrap";

class Movie extends React.Component {
  handleToggleFav = () => {
    this.props.toggleFavorite(this.props.movie);
  };

  render() {
    if (this.props.loading) return <ProgressBar active now={100} />;

    let button = (
      <Button onClick={this.handleToggleFav}>Add to Favorites</Button>
    );
    if (this.props.isFave)
      button = (
        <Button onClick={this.handleToggleFav}>Remove From Favorites</Button>
      );

    return (
      <Card>
        <Card.Body>
          <Row>
            <Col sm={12}>
              {this.props.movie.poster_path !== null && (
                <MoviePoster path={this.props.movie.poster_path} />
              )}
            </Col>
            <Col sm={12}>
              <h4> {this.props.movie.title} </h4>
              <h4> {this.props.movie.release_date} </h4>
              {button}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default Movie;

/* 


*/
