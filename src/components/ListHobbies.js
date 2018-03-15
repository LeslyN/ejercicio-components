import React from 'react';
import PropTypes from 'prop-types';

const ListHobbies = ({datohobbie}) => (
  <ul>
    <li>{datohobbie}</li>
  </ul>
);

ListHobbies.PropTypes = {
  datohobbie: PropTypes.string.isRequired
}

export default ListHobbies;