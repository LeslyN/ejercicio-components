import React from 'react';
import PropTypes from 'prop-types';

const NavBarItem = ({datos}) => (
  <a>{datos}</a>
);

NavBarItem.PropTypes = {
  datos:PropTypes.string.isRequerid
}

export default NavBarItem;