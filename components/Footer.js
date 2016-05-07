import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
  <footer className="footer">
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
