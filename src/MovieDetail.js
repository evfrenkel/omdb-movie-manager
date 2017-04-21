import React from 'react';

import { Panel, Label, Button, Thumbnail, Row, Col, Table } from 'react-bootstrap';

class MovieDetail extends React.Component {

  render() {
    if(this.props.movie === undefined) 
      return (<div></div>);
    return (
      <Panel>

          <Row>
            <Col xs={4}>
              <Thumbnail src={this.props.movie.Poster} alt="Poster" />
            </Col>
            <Col xs={8}>
              <Table bordered striped>
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
            </Col>
          </Row>

        <h2>{this.props.movie.Title}  </h2>
        <h4> <Label>{this.props.movie.Rated}</Label> {this.props.movie.Year}  </h4>
        <p className="lead">{this.props.movie.Plot}</p> 
        
        <Button>Add to Favorites</Button>

      </Panel>
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