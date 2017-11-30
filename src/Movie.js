import React from "react";

import {
  Panel,
  Button,
  Thumbnail,
  Row,
  Col,
  ProgressBar
} from "react-bootstrap";

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleFav = this.handleToggleFav.bind(this);
  }

  handleToggleFav() {
    this.props.toggleFavorite(this.props.movie);
  }

  render() {
    if (this.props.loading) return <ProgressBar active now={100} />;

    let button = (
      <Button onClick={this.handleToggleFav} bsStyle="warning">
        Add to Favorites
      </Button>
    );
    if (this.props.isFave)
      button = (
        <Button onClick={this.handleToggleFav} bsStyle="danger">
          Remove From Favorites
        </Button>
      );

    return (
      <Panel>
        <Row>
          <Col sm={12}>
            {this.props.movie.poster_path !== null &&
              <Thumbnail src={"https://image.tmdb.org/t/p/w500/" + this.props.movie.poster_path} alt="Poster" />}
          </Col>
          <Col sm={12}>

            <h4> {this.props.movie.title} </h4>
            <h4> {this.props.movie.release_date} </h4>
            {button}
          </Col>
        </Row>
      </Panel>
    );
  }
}

export default Movie;

/* 


*/
