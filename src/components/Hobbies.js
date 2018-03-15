import React from 'react';
import PropTypes from 'prop-types';
import ListHobbies from './ListHobbies';

const Hobbies = ({arrayHobbies}) => (
  <div>
    <h3>Hobbies</h3>
    {
      arrayHobbies.map(elem=><ListHobbies datohobbie={elem} key={elem}/>)
    }
  </div>
);

Hobbies.PropTypes = {
  arrayHobbies: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Hobbies;