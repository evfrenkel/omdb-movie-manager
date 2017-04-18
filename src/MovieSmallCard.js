import React from 'react';

class MovieSmallCard extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.itemClicked(this.props.movie.imdbID);
	}

  render() {
    return (
      <a className="link dt w-100 bb b--black-20 pb2 pt2 pl3" href="#0" onClick={this.handleClick} >
        <div className="dtc w3">
          {this.props.movie.Poster !== "N/A" && 
            <img src={this.props.movie.Poster} className="db w-100" alt="Poster" />
          }
        </div>
        <div className="dtc v-top pl2">
          <h1 className="f6 f5-ns fw6 lh-title black mv0">{this.props.movie.Title}</h1>
          <h2 className="f6 fw4 mt2 mb0 black-60">{this.props.movie.Year}</h2>
        </div>
        </a>
    );
  }
}

export default MovieSmallCard;