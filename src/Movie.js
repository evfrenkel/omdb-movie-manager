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
            {this.props.movie.Poster !== "N/A" &&
              <Thumbnail src={this.props.movie.Poster} alt="Poster" />}
          </Col>
          <Col sm={12}>

            <h4> {this.props.movie.Title} </h4>
            <h4> {this.props.movie.Year} </h4>
            {button}
          </Col>
        </Row>
      </Panel>
    );
  }
}

export default Movie;

/* 
Country

"Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},
{"Source":"Rotten Tomatoes","Value":"74%"},
{"Source":"Metacritic","Value":"73/100"}],

"Metascore":"73",
"imdbRating":"7.1",
"imdbVotes":"280,472",
"imdbID":"tt0317219",

"Type":"movie",

"BoxOffice":"$244,052,771.00"

"Website":"http://www.carsthemovie.com"

"Response":"True"}

*/
