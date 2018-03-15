import React  from 'react';
import Hobbies from './Hobbies';
// import SectionPerfil from './SectionPerfil';

const hobbies = ['Pintar', 'Bailar', 'jugar'];

const Main = () => (
  <div>
    <Hobbies arrayHobbies = {hobbies}/>
  </div>
)

export default Main;