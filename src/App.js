import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import SearchForm from './SearchForm';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

import { Navbar, Nav, NavItem, Grid, Col, Row, ProgressBar } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [],
                   faves: {},
                   noResults: false,
                   listLoading: false,
                   detailLoading: false };

    this.selectedMovieID = null;
    
    this.handleNewSearch = this.handleNewSearch.bind(this);
    this.updateMovies = this.updateMovies.bind(this);
    this.showMovieDetail = this.showMovieDetail.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }
  
  handleNewSearch(str) {
    this.setState({listLoading: true});
    fetch('https://www.omdbapi.com/?s=' + str, {})
    .then(res => res.json().then(this.updateMovies));
  }

  updateMovies(r) {
    if(r.Response !== "False") {
      this.setState({noResults: false, movies: r.Search, listLoading: false});
    }
    else {
      this.setState({noResults: true, movies: [], listLoading: false});
    }
  }

  showMovieDetail(imdbID) {
    this.selectedMovieID = imdbID;
    this.setState({selectedMovie: undefined, detailLoading: true});
    fetch('https://www.omdbapi.com/?i=' + imdbID, {}).then(
      res => {
        res.json().then(result => {
            this.setState({selectedMovie: result, detailLoading: false});
          });},
      error => 
        { console.log(error.message) });
  }

  toggleFavorite(movie) {
    if (!this.state.faves.hasOwnProperty(movie.imdbID)) {
      let newMovie = {};
      newMovie[movie.imdbID] = movie;

      let newFaves = Object.assign(this.state.faves, newMovie);

      this.setState( { faves: newFaves } );
    }
    else {
      let newFaves = Object.assign({}, this.state.faves);
      delete newFaves[movie.imdbID];

      this.setState( { faves: newFaves} );
    }
  }
    
  render() {
    let movieList = null;
    if (this.state.listLoading) {
      movieList = <ProgressBar active now={100} />;
    } else {
      movieList = <MovieList movies={this.state.movies}
                             itemClicked={this.showMovieDetail}
                             selectedMovieID={this.selectedMovieID} />;
    }
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Movie Finder</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem> Search </NavItem>
            <NavItem> Favorites </NavItem>
          </Nav>
        </Navbar>

        <Grid>
          <Row>
            <Col xs={4}>
              <SearchForm newSearch={this.handleNewSearch} />
              {movieList}
              {this.state.noResults &&
                <p>No results</p>
              }
            </Col>

            <Col xs={8}>
              <MovieDetail movie={this.state.selectedMovie} loading={this.state.detailLoading}
                            allFaves={this.state.faves}
                            toggleFavorite={this.toggleFavorite} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
