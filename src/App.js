import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";
import React from "react";
import Navigation from "./Navigation";
import FavesView from "./FavesView/FavesView";
import SearchView from "./SearchView/SearchView";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faves: {},
      searchHistory: [],
      view: "search",
      detailMovie: null,
      detailLoading: false,
    };
  }

  toggleFavorite = (movie) => {
    if (!this.state.faves.hasOwnProperty(movie.id)) {
      const newMovie = {};
      newMovie[movie.id] = movie;
      const newFaves = Object.assign(this.state.faves, newMovie);
      this.setState({ faves: newFaves });
    } else {
      const newFaves = Object.assign({}, this.state.faves);
      delete newFaves[movie.id];
      this.setState({ faves: newFaves });
    }
  };

  handleChooseView = (newViewIdentifier) => {
    this.setState({
      view: newViewIdentifier,
      detailMovie: null,
    });
  };

  render() {
    return (
      <div>
        <Navigation
          handleChooseView={this.handleChooseView}
          viewNow={this.state.view}
        />

        <SearchView
          visible={this.state.view === "search"}
          toggleFavorite={this.toggleFavorite}
          faves={this.state.faves}
        />

        <FavesView
          visible={this.state.view === "faves"}
          toggleFavorite={this.toggleFavorite}
          faves={this.state.faves}
        />
      </div>
    );
  }
}

export default App;
