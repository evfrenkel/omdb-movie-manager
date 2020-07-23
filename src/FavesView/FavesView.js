import React from "react";
import Faves from "./Faves";

import { Container } from "react-bootstrap";

export default class FavesView extends React.Component {
  render() {
    if (!this.props.visible) {
      return null;
    }

    return (
      <Container>
        <Faves
          allFaves={this.props.faves}
          toggleFavorite={this.props.toggleFavorite}
        />
      </Container>
    );
  }
}
