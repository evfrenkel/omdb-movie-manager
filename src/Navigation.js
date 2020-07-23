import React from "react";

import { Navbar, Nav } from "react-bootstrap";

class Navigation extends React.Component {
  handleSelect = (eventKey, event) => {
    this.props.handleChooseView(eventKey);
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Movie Explorer</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav
            variant="pills"
            activeKey={this.props.viewNow}
            onSelect={this.handleSelect}
          >
            <Nav.Item>
              <Nav.Link eventKey="search"> Search </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="faves"> Favorites </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
