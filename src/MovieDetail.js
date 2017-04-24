import React from 'react';

import { Label, Button, Image, Row, Col, Table, ProgressBar } from 'react-bootstrap';

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleFav = this.handleToggleFav.bind(this);
  }

  handleToggleFav() {
    this.props.toggleFavorite(this.props.movie);
  }

  render() {
    if(this.props.loading) {
      return (<ProgressBar active now={100} />);
    }

    let button = <Button onClick={this.handleToggleFav} bsStyle="warning"> Add to Favorites </Button>;
    if(this.props.isFave)
      button = <Button onClick={this.handleToggleFav} bsStyle="danger"> Remove From Favorites </Button>;

    return (
      <div>
          <Row>
            <Col xs={12} sm={5} md={4}>
              {this.props.movie.Poster !== "N/A" &&
              <p><Image src={this.props.movie.Poster} alt="Poster" responsive/></p>}
            </Col>
            <Col xs={12} sm={7} md={8}>
              {button}
              <h2>{this.props.movie.Title}  </h2>
              <h4> <Label>{this.props.movie.Rated}</Label> {this.props.movie.Year}  </h4>
              <p className="lead">{this.props.movie.Plot}</p> 
            </Col>
          </Row>
          <Table>
            <tbody>
              <tr>
                <th>Actors</th>
                <td>{this.props.movie.Actors}</td>
              </tr>
              <tr>
                <th>Director</th>
                <td>{this.props.movie.Director}</td>
              </tr>
              <tr>
                <th>Writer</th>
                <td>{this.props.movie.Writer}</td>
              </tr>
              <tr>
                <th>Genre</th>
                <td>{this.props.movie.Genre}</td>
              </tr>
              <tr>
                <th>Awards</th>
                <td>{this.props.movie.Awards}</td>
              </tr>
              <tr>
                <th>Runtime</th>
                <td>{this.props.movie.Runtime}</td>
              </tr>
            </tbody>
          </Table>
      </div>
    );
  }
}

export default MovieDetail;


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