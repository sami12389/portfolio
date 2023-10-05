import React from 'react'
import {AppWrap} from "../../wrapper"
import {motion} from "framer-motion"
import {images} from "../../constants"
import { TypeAnimation } from 'react-type-animation';
import "./Header.scss"

const scaleVariants = {
  whileInView:{
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}


const Header = () => {
  return (
    <div className = "app__header app__flex">
      <motion.img whileInView={{scale: [0, 1]}}
      transition = {{duration: 1, ease: "easeInOut"}}
      src = {images.jupiter}
      alt = "profile_circle"
      className = "overlay_jupiter"/>
       <motion.img whileInView={{scale: [0, 1]}}
      transition = {{duration: 1, ease: "easeInOut"}}
      src = {images.spaceship}
      alt = "profile_circle"
      className = "overlay_spaceship"
      />
      <motion.div
      whileInView={{x: [-100, 0], opacity: [0, 1]}}
      transition = {{duration: 0.5}}
      className = "app__header-info">
        <div className = "app__header-badge">
          <div style = {{backgroundColor: "rgba(255, 255, 255, 0.1)"}} className = "badge-cmp app__flex">
            <span>👋</span>
            <div style = {{marginLeft: 20}}>
              <p className = "p-text">Hello I'm</p>
              <h1 className =  "head-text">Samson</h1>
            </div>
          </div>
          <div style = {{backgroundColor: "rgba(255, 255, 255, 0.1)"}} className = "tag-cmp app__flex">
          <TypeAnimation
      sequence={[
        'React', // Types 'One'
        2000, // Waits 1s
        'Express', // Deletes 'One' and types 'Two'
        2000,
        'NodeJS', // Types 'One'
        2000, // Waits 1s
        'MongoDB', // Deletes 'One' and types 'Two'
        2000,
        'AWS Cloud', // Types 'One'
        2000, // Waits 1s
        'Redux', // Deletes 'One' and types 'Two'
        2000,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '20px', color: "white" }}
    />
          </div>
        </div>
      </motion.div>

      <motion.div  whileInView={{opacity: [0, 1]}}
      transition = {{duration: 0.5, delayChildren: 0.5}}
      className = "app__header-img">
        <img src = {images.profile} alt = "profile_bg" className = "profileImage"/>
        <motion.img whileInView={{scale: [0, 1]}}
      transition = {{duration: 1, ease: "easeInOut"}}
      src = {images.circle}
      alt = "profile_circle"
      className = "overlay_circle"/>
      </motion.div>

      <motion.div
      variant = {scaleVariants}
      whileInView = {scaleVariants.whileInView}
      className = "app__header-circles">
     {[images.mongo, images.react, images.node].map((circle, index)=>(
      <div className = "circle-cmp app__flex" key = {`circle-${index}`}>
        <img src = {circle} alt = "circle"/>
      </div>
     ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, "home")