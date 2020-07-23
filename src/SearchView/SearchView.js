import React from "react";
import SearchPanel from "./SearchPanel";
import MovieDetail from "./MovieDetail";

import { Container, Col, Row } from "react-bootstrap";

export default class SearchView extends React.Component {
  state = {
    searchHistory: [],
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

  handleNewDetailMovie = (movie) => {
    this.setState({ detailMovie: movie });
  };

  render() {
    if(!this.props.visible) {
      return null;
    }

    return (
      <Container fluid>
          <Row>
            <Col sm={3}>
              <SearchPanel
                handleSelectMovie={this.handleNewDetailMovie}
                handleNewSearch={this.appendSearchHistory}
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
