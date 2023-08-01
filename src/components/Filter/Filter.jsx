import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterForm, FilterLabel, FilterInput } from './Filter.styled';

export class Filter extends Component {
  handleChange = event => {
    this.props.onFilterChange(event.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <FilterForm>
        <FilterLabel htmlFor="search">Find contacts by name</FilterLabel>
        <FilterInput
          type="text"
          id="search"
          value={filter}
          onChange={this.handleChange}
        />
      </FilterForm>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
