import React  from 'react';
import PropTypes from 'prop-types';
import NavBarItem from './NavBarItem';

const NavBar = ({arrayString}) => (
  <div className="navbar">
    {
      arrayString.map(elem=><NavBarItem datos={elem} key={elem}/>)
    }
  </div>
)

NavBar.PropTypes = {
  arrayString:PropTypes.arrayOf(PropTypes.string)
}

export default NavBar;