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
    let history = this.state.searchHistory.map((str,i) => 
                <MenuItem key={i} eventKey={str} onSelect={this.handleHistoryItem}> {str} </MenuItem> );

    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="title">
          <ControlLabel>Title</ControlLabel>  
          <FormControl
            type="text"
            value={this.state.currentStr}
            onChange={this.handleTextInputChange}
          />

          <DropdownButton bsSize="small" title="History" id="history">
          {history}
          </DropdownButton>
        </FormGroup>
      </form>
    );
  }
}

export default SearchForm;