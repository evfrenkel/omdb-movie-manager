import React from "react";
import SearchPanel from "./SearchPanel";
import MovieDetail from "./MovieDetail";

import { Container, Col, Row } from "react-bootstrap";

export default class SearchView extends React.Component {
  state = {
    searchHistory: [],
    searchResults: [],
    detailMovie: null,
    detailLoading: false,
  };

  appendSearchHistory = (search) => {
    const formal = search.trim();
    if (this.state.searchHistory.indexOf(formal) === -1 && formal.length > 0)
      this.setState({
        searchHistory: [formal].concat(this.state.searchHistory),
      });
  };

  handleNewResults = (searchResults) => {
    this.setState({ searchResults });
  };

  handleNewDetailMovie = (movie) => {
    this.setState({ detailMovie: movie });
  };

  render() {
    if (!this.props.visible) {
      return null;
    }

    return (
      <Container fluid>
        <Row className="mt-4 mx-3">
          <Col sm={3}>
            <SearchPanel
              handleSelectMovie={this.handleNewDetailMovie}
              handleNewSearch={this.appendSearchHistory}
              handleNewResults={this.handleNewResults}
              initialResults={this.state.searchResults}
              searchHistory={this.state.searchHistory}
            />
          </Col>
          <Col>
            {this.state.detailMovie !== null && (
              <MovieDetail
                movie={this.state.detailMovie}
                loading={this.state.detailLoading}
                isFave={this.props.faves.hasOwnProperty(
                  this.state.detailMovie.id
                )}
                toggleFavorite={this.props.toggleFavorite}
              />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
