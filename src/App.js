import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import SearchForm from './SearchForm';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

import { Navbar, Nav, NavItem, Grid, Col, Row, Panel, ProgressBar } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [],
                   listLoading: false,
                   detailLoading: false };
    
    this.handleNewSearch = this.handleNewSearch.bind(this);
    this.showMovieDetail = this.showMovieDetail.bind(this);
  }
  
  handleNewSearch(str) {
    this.setState({listLoading: true});
     fetch('https://www.omdbapi.com/?s=' + str, {}).then(
      res => {
        res.json().then(
          res => {
            if(res.Response !== "False") {
              this.setState({noResults: false,
                              movies: res.Search,
                             listLoading: false});
            }
            else {
              this.setState({noResults: true,
                              movies: [],
                              listLoading: false});
            }
          }
        );
      },
      error => 
        { console.log(error.message) });
  }

  showMovieDetail(imdbID) {
    this.setState({selectedMovie: undefined, detailLoading: true});
    fetch('https://www.omdbapi.com/?i=' + imdbID, {}).then(
      res => {
        res.json().then(result => {
            this.setState({selectedMovie: result, detailLoading: false});
          });},
      error => 
        { console.log(error.message) });
    }
    
  render() {
    let movieList = null;
    if (this.state.listLoading) {
      movieList = <ProgressBar active now={100} />;
    } else {
      movieList = <MovieList movies={this.state.movies} itemSelected={this.showMovieDetail} />;
    }

    let detailedInfo = null;
    if (this.state.detailLoading) {
      detailedInfo = <ProgressBar active now={100} />;
    } else {
      detailedInfo = <MovieDetail movie={this.state.selectedMovie} />;
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
              {detailedInfo}
            </Col>
          </Row>
        </Grid>
      </div>
      
    );
  }
}

export default App;
