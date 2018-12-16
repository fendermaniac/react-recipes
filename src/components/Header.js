import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    exact
    className="p1 mx2 black rounded text-decoration-none"
    activeClassName="bg-white"
    {...props}
  >
    {children}
  </NavLink>
);

const Header = () => (
  <header className="flex items-center justity-between px4">
    <h1 className="h1">
      <span role="img" aria-label="plate">
        {'🍽️'}
      </span>
      {'MyRecipes'}
    </h1>
    <nav>
      <HeaderLink to="/">{'Home'}</HeaderLink>
      <HeaderLink to="/favorites">{'Favorites'}</HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
};

export default Header;
