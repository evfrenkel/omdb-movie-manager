import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import Navigation from './Navigation';
import SearchForm from './SearchForm';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import Faves from './Faves';

import { Grid, Col, Row, ProgressBar } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [],
                   faves: {},
                   view: 'search',
                   noResults: false,
                   listLoading: false,
                   detailLoading: false };

    this.selectedMovieID = null;
    
    this.handleChooseView = this.handleChooseView.bind(this);
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

      var newFaves = Object.assign(this.state.faves, newMovie);

      this.setState((prevState, props) => ({ faves: newFaves }));
    }
    else {
      let newFaves = Object.assign({}, this.state.faves);
      delete newFaves[movie.imdbID];

      this.setState( { faves: newFaves} );
    }
  }
  
  handleChooseView(newView) {
    this.setState({view : newView});
  }
  render() {

    if(this.state.view === "faves") {
      return (
        <div>
        <Navigation handleChooseView={this.handleChooseView} viewNow={this.state.view}/>
        <Grid>
        <Faves allFaves={this.state.faves}  toggleFavorite={this.toggleFavorite}/>
        </Grid>
        </div>
        )
    }

    return (
      <div>
        <Navigation handleChooseView={this.handleChooseView} viewNow={this.state.view}/>
        <Grid>
          <Row>
            <Col xs={4}>
              <SearchForm newSearch={this.handleNewSearch} />
              {this.state.listLoading ? <ProgressBar active now={100} /> : 
                                        <MovieList movies={this.state.movies}
                                               itemClicked={this.showMovieDetail}
                                               selectedMovieID={this.selectedMovieID} />}
              {this.state.noResults &&
                <p>No results</p>
              }
            </Col>

            <Col xs={8}>
            { this.selectedMovieID !== null &&
              <MovieDetail movie={this.state.selectedMovie} loading={this.state.detailLoading}
                            isFave={this.state.faves.hasOwnProperty(this.selectedMovieID)}
                            toggleFavorite={this.toggleFavorite} />}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
