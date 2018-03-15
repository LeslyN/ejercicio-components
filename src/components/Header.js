import React  from 'react'
import NavBar from './NavBar'

const spanish = ['Bienvenido', 'Acerca de Mi', 'Contactame'];
const ingles = ['Welcome', 'About me', 'Contact'];

const Header = () => (
  <div>
    <NavBar arrayString = {spanish}/>
  </div>
)

export default Header