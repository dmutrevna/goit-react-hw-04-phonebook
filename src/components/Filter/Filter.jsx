import React from 'react';
import PropTypes from 'prop-types';
import { FilterForm, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ filter, onFilterChange }) => {
  const handleChange = event => {
    onFilterChange(event.target.value);
  };

  return (
    <FilterForm>
      <FilterLabel htmlFor="search">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id="search"
        value={filter}
        onChange={handleChange}
      />
    </FilterForm>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
