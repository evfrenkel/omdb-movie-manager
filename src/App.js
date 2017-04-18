import React from 'react';
import MovieSmallCard from './MovieSmallCard';
import './App.css';


class MovieDetail extends React.Component {

  render() {
    if(this.props.movie === undefined) 
      return (<div></div>);
    return (
      <div>
      <h1>{this.props.movie.Title}</h1> 
      <h2>{this.props.movie.Plot}</h2> 
      <h1>{this.props.movie.Title}</h1> 
      <h1>{this.props.movie.Title}</h1> 
      <h1>{this.props.movie.Title}</h1> 
      </div>
    );
  }
}

class MovieTable extends React.Component {

  render() {
    var rows = this.props.movies.map(movie => 
      <article className="hover-bg-yellow bg-animate grow"  key={movie.imdbID} >
        <MovieSmallCard  movie={movie} itemClicked={this.props.itemSelected} /> 
      </article> )

    return (
      <main className="mw6">
      {rows}
      </main>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
  }
  
  handleTextInputChange(e) {
    this.props.onTextInput(e.target.value);
  }
  
  render() {
    return (
      <form className="pa4 black-80">
      
        <label htmlFor="title" className="f6 b db mb2">Title</label>
        <input id="title" className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text" 
          placeholder="There Will Be Blood" 
          onChange={this.handleTextInputChange}/>
        <p>
          <input type="checkbox" />
          {' '}
          Only show movies
        </p>
        
      </form>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
    
    this.handleNewSearch = this.handleNewSearch.bind(this);
    this.showMovieDetail = this.showMovieDetail.bind(this);
  }
  
  handleNewSearch(str) {
     fetch('http://www.omdbapi.com/?s=' + str, {}).then(
      res => {
        res.json().then(result => {
            this.setState({movies: result.Search});
          });},
      error => 
        { console.log(error.message) });
  }

  showMovieDetail(imdbID) {
    fetch('http://www.omdbapi.com/?i=' + imdbID, {}).then(
      res => {
        res.json().then(result => {
            this.setState({selectedMovie: result});
            console.log(result);
          });},
      error => 
        { console.log(error.message) });
    }
    
  
  
  render() {
          
    
    return (
      <div>
        <div className="measure-narrow">
          <SearchBar onTextInput={this.handleNewSearch} />
          <MovieTable movies={this.state.movies} itemSelected={this.showMovieDetail} />
        </div>
        <MovieDetail movie={this.state.selectedMovie} />
      </div>
      
      
    );
  }
}


export default App;
