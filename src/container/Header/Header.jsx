import React from 'react'
import pro from "../../assets/center.png";
import './Header.scss';

const Header = () => {
  return (
    <section id ="profile">
      <div className="section__pic-container">
        <img src={pro} alt="profile pic" />
      </div>
      <div className="section__text">
        <p className="section__text-p1">Hello, I'm</p>
        <h1 className="title">Subir Dey Raju</h1>
        <p className="section__text-p2">Data Analyst</p>
      </div>
    </section>
  )
}

export default Header