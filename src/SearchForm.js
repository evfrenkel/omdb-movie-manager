import React from 'react';

import { FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem } from 'react-bootstrap';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {searchHistory: [],
                  currentStr: '',
                  loading: false };

    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHistoryItem = this.handleHistoryItem.bind(this);
  }
  
  handleTextInputChange(e) {
    this.setState({currentStr : e.target.value});
  }

  handleHistoryItem(eventKey) {
    this.setState({currentStr: eventKey});
    this.props.newSearch(eventKey);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState, props) => ({
      searchHistory: [prevState.currentStr].concat(prevState.searchHistory)
    }));
    this.props.newSearch(this.state.currentStr);
  }
  
  render() {

    let history = this.state.searchHistory.map(str => 
                <MenuItem key={str} eventKey={str} onSelect={this.handleHistoryItem}> {str} </MenuItem> );

    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="title">
          <ControlLabel>Search by Title</ControlLabel>
          <p>  
          <FormControl
            type="text"
            value={this.state.currentStr}
            onChange={this.handleTextInputChange}
          />
          </p>
          { this.state.searchHistory.length > 0 &&
            <DropdownButton bsSize="small" title="Search History" id="history">
            {history}
            </DropdownButton>}

        </FormGroup>
      </form>
    );
  }
}

export default SearchForm;