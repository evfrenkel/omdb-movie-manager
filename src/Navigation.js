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
	        <Navbar inverse collapseOnSelect staticTop>
	          <Navbar.Header>
	            <Navbar.Brand>
	              Movie Explorer
	            </Navbar.Brand>
	            <Navbar.Toggle />
	          </Navbar.Header>
	          <Navbar.Collapse>
	          <Nav activeKey={this.props.viewNow} onSelect={this.handleSelect} pullRight>
	            <NavItem eventKey="search"> Search </NavItem>
	            <NavItem eventKey="faves"> Favorites </NavItem>
	          </Nav>
	          </Navbar.Collapse>
	        </Navbar>
        )
	}
}

export default Navigation;