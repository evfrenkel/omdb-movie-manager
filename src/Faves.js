import React from 'react';
import MovieDetail from './MovieDetail';

import { Row, Col } from 'react-bootstrap';

class Faves extends React.Component {
	// constructor(props) {
	// 	super(props);

 //    this.handleToggleFav = this.handleToggleFav.bind(this);
 //  }

  // handleToggleFav() {

  //   this.props.toggleFavorite(this.props.movie);
  // }


	render() {
		let allFavesComponents = Object.keys(this.props.allFaves).map(ID => 
			<Col sm={4} key={ID}>
				<MovieDetail movie={this.props.allFaves[ID]} loading={false}
                            isFave={true}
                            toggleFavorite={this.props.toggleFavorite} />
      </Col>);
		return(

	    <Row>
	    {allFavesComponents}
      </Row>

    )
	}
}

export default Faves;