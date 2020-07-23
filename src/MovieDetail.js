import React from "react";

import {
  Badge,
  Button,
  Image,
  Row,
  Col,
  Table,
  ProgressBar,
  Container,
} from "react-bootstrap";

class MovieDetail extends React.Component {
  handleToggleFav = () => {
    this.props.toggleFavorite(this.props.movie);
  }

  render() {
    if (this.props.loading) {
      return <ProgressBar active now={100} />;
    }

    let button = (
      <Button onClick={this.handleToggleFav}>
        Add to Favorites
      </Button>
    );
    if (this.props.isFave)
      button = (
        <Button onClick={this.handleToggleFav}>
          Remove From Favorites
        </Button>
      );

    return (
      <>
        <Container fluid>
          <Row>
            <Col xs={4}>
              {this.props.movie.poster_path !== null && (
                  <Image
                    src={
                      "https://image.tmdb.org/t/p/w500/" +
                      this.props.movie.poster_path
                    }
                    alt="Poster"
                    fluid
                  />
              )}
            </Col>
            <Col>
              {button}
              <h2> {this.props.movie.title} </h2>
              <h4>
                {" "}
                <Badge>{this.props.movie.vote_average}</Badge>{" "}
                {this.props.movie.release_date}{" "}
              </h4>
              <p className="lead">{this.props.movie.overview}</p>
            </Col>
          </Row>
        </Container>
        <Table>
          <tbody>
            <tr>
              <th>Runtime</th>
              <td>{this.props.movie.runtime}</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export default MovieDetail;
