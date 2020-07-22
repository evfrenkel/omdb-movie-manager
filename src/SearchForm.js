import React from "react";

import {
  FormGroup,
  // Radio,
  FormControl,
  FormLabel,
  DropdownButton,
  Dropdown
} from "react-bootstrap";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStr: "",
      loading: false
    };

    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHistoryItem = this.handleHistoryItem.bind(this);
    this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
  }

  handleTextInputChange(e) {
    this.setState({ currentStr: e.target.value });
  }

  handleSearchTypeChange(e) {
    this.props.searchTypeChanged(e.currentTarget.value, this.state.currentStr);
  }

  handleHistoryItem(eventKey) {
    this.setState({ currentStr: eventKey });
    this.props.newSearch(eventKey);
  }

  handleSubmit(e, i) {
    e.preventDefault();
    this.props.newSearch(this.state.currentStr);
  }

  render() {
    let history = this.props.searchHistory.map(str => (
      <Dropdown.Item key={str} eventKey={str} onSelect={this.handleHistoryItem}>
        {str}
      </Dropdown.Item>
    ));

    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="title">
          <FormLabel>Search by Title</FormLabel>
          <FormControl
            type="text"
            value={this.state.currentStr}
            onChange={this.handleTextInputChange}
          />

        </FormGroup>
        <FormGroup>
          {history.length > 0 &&
            <DropdownButton bsSize="small" title="Search History" id="history">
              {history}
            </DropdownButton>}
          {/*{" "}
          <Radio
            name="searchType"
            value="movie"
            checked={this.props.searchType === "movie"}
            onChange={this.handleSearchTypeChange}
          >
            Movies
          </Radio>
          <Radio
            name="searchType"
            checked={this.props.searchType === "tv"}
            value="tv"
            onChange={this.handleSearchTypeChange}
          >
            TV Series
          </Radio>*/}
        </FormGroup>
      </form>
    );
  }
}

export default SearchForm;
