import React from "react";

import {
  Label,
  Button,
  Image,
  Row,
  Col,
  Table,
  ProgressBar
} from "react-bootstrap";

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleFav = this.handleToggleFav.bind(this);
  }

  handleToggleFav() {
    this.props.toggleFavorite(this.props.movie);
  }

  render() {
    if (this.props.loading) {
      return <ProgressBar active now={100} />;
    }

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
      <div>
        <Row>
          <Col xs={12} sm={5} md={4}>
            {this.props.movie.poster_path !== null &&
              <p>
                <Image src={"https://image.tmdb.org/t/p/w500/" + this.props.movie.poster_path} alt="Poster" responsive />
              </p>}
          </Col>
          <Col xs={12} sm={7} md={8}>
            {button}
            <h2> {this.props.movie.title} </h2>
            <h4>
              {" "}
              <Label>{this.props.movie.vote_average}</Label>
              {" "}
              {this.props.movie.release_date}
              {" "}
            </h4>
            <p className="lead">{this.props.movie.overview}</p>
          </Col>
        </Row>
        <Table>
          <tbody>
            <tr>
              <th>Runtime</th>
              <td>{this.props.movie.runtime}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default MovieDetail;

/* 

*/
