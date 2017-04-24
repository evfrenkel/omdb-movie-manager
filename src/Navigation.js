import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(eventKey, event) {

		this.props.handleChooseView(eventKey);
	}

	render() {
		return(
	        <Navbar>
	          <Navbar.Header>
	            <Navbar.Brand>
	              Movie Finder
	            </Navbar.Brand>
	          </Navbar.Header>
	          <Nav activeKey={this.props.viewNow} onSelect={this.handleSelect} >
	            <NavItem eventKey="search"> Search </NavItem>
	            <NavItem eventKey="faves"> Favorites </NavItem>
	          </Nav>
	        </Navbar>
        )
	}
}

export default Navigation;