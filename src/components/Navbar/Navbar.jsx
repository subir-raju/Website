import React from 'react';

import logo1 from '../../assets/logo1.png';


const Navbar = () => {
  return (
    <nav>
        <div>
            <img src = {logo1} alt ="" />
        </div>
        <ul>
            {['Home', 'About Me', 'Work', 'Skills', 'Contact'].map((item) => (
                <li key = {`link-${item}`}>
                    <div />
                    <a href = {`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar