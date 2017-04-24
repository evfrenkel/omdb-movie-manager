import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import React from "react";
import Navigation from "./Navigation";
import SearchPanel from "./SearchPanel";
import MovieDetail from "./MovieDetail";
import Faves from "./Faves";

import { Grid, Col, Row } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faves: {},
      searchHistory: [],
      view: "search",
      detailMovie: null,
      detailLoading: false
    };

    this.handleChooseView = this.handleChooseView.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.handleNewDetailMovie = this.handleNewDetailMovie.bind(this);
    this.appendSearchHistory = this.appendSearchHistory.bind(this);
  }

  appendSearchHistory(search) {
    let formal = search.trim();
    if (this.state.searchHistory.indexOf(formal) === -1 && formal.length > 0)
      this.setState({
        searchHistory: [formal].concat(this.state.searchHistory)
      });
  }

  handleNewDetailMovie(movie) {
    this.setState({ detailMovie: movie });
  }

  toggleFavorite(movie) {
    if (!this.state.faves.hasOwnProperty(movie.imdbID)) {
      let newMovie = {};
      newMovie[movie.imdbID] = movie;
      let newFaves = Object.assign(this.state.faves, newMovie);
      this.setState({ faves: newFaves });
    } else {
      let newFaves = Object.assign({}, this.state.faves);
      delete newFaves[movie.imdbID];
      this.setState({ faves: newFaves });
    }
  }

  handleChooseView(newViewIdentifier) {
    this.setState({
      view: newViewIdentifier,
      detailMovie: null
    });
  }

  render() {
    if (this.state.view === "faves") {
      return (
        <div>
          <Navigation
            handleChooseView={this.handleChooseView}
            viewNow={this.state.view}
          />
          <Grid>
            <Faves
              allFaves={this.state.faves}
              toggleFavorite={this.toggleFavorite}
            />
          </Grid>
        </div>
      );
    }

    return (
      <div>
        <Navigation
          handleChooseView={this.handleChooseView}
          viewNow={this.state.view}
        />
        <Grid>
          <Row>
            <Col sm={8} smPush={4} xs={10}>
              {this.state.detailMovie !== null &&
                <MovieDetail
                  movie={this.state.detailMovie}
                  loading={this.state.detailLoading}
                  isFave={this.state.faves.hasOwnProperty(
                    this.state.detailMovie.imdbID
                  )}
                  toggleFavorite={this.toggleFavorite}
                />}
            </Col>
            <Col sm={4} smPull={8} xs={12}>
              <SearchPanel
                handleSelectMovie={this.handleNewDetailMovie}
                handleNewSearch={this.appendSearchHistory}
                searchHistory={this.state.searchHistory}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
