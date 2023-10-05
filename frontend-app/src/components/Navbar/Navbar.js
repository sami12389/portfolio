import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import { motion } from 'framer-motion';
// import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navList = ['home', 'about', 'work', 'skills', 'contact']
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
       <h2 className  = "logo-name">
           SAMSON LEMMA
        </h2>
      </div>
      <ul className="app__navbar-links">
        {navList.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}
             rel="noopener noreferrer"


             >{item}</a>
          </li>
        ))}
      </ul>

      <div className = "social-icons">
        <a 
      href = "https://drive.google.com/file/d/1s2LLG7dY7D1Vgmuoa9VHor0qQknP7uVU/view?usp=sharing"
      target = "_black"
      rel="noopener noreferrer"
      className = "nav-icons"
      >
      RESUME
      </a>
      <a href = "https://www.linkedin.com/in/samson-lemma-7ab722215/"
      target= "_blank"
      rel="noopener noreferrer">
        <AiFillLinkedin className = "nav-icons" size = {24}/>
      </a>
      </div>
     
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            className = "menuBg"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navList.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} 
                  onClick={() => setToggle(false)}
                  rel="noopener noreferrer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
