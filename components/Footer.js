import React from 'react';
import FilterLink from '../containers/FilterLink';
import RemainingItem from '../containers/RemainingItem';

const Footer = () => (
  <footer className="footer">
    <RemainingItem />
    <ul className="filters">
      <FilterLink filter="SHOW_ALL">
      All
      </FilterLink>

      <FilterLink filter="SHOW_ACTIVE">
      Active
      </FilterLink>

      <FilterLink filter="SHOW_COMPLETED">
      Completed
      </FilterLink>
    </ul>
  </footer>
);

export default Footer
