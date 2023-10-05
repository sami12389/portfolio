import React, {useState} from 'react'
import {motion} from "framer-motion"
import {images} from "../../constants"
import {AppWrap, MotionWrap} from "../../wrapper"
import {client} from "../../client"
import "./Footer.scss"


const Footer = () => {
  const [formData, setFormData] = useState({name: "", email: "", message: ""});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const {name, email, message} = formData;
  const handleChangeInput = (e)=>{
    e.preventDefault();
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = ()=>{
    setLoading(true);
    
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    }
    client.create(contact)
    .then(()=>{
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((err)=>console.log(err))
  }
  return (
    <>
    <h2 className = "head-text">Leave a message.</h2>
    <div className = "app__footer-cards">
      <div className = "app__footer-card">
        <img src = {images.email} alt = "email"/>
        <a href = "mailto:samseifu974@gmail.com"
        className = "p-text">samseifu974@gmail.com</a>
      </div>
      <div className = "app__footer-card">
        <img src = {images.mobile} alt = "email"/>
        <a href = "tel: +1 240-797-6088"
        className = "p-text">+1 240-797-6088</a>
      </div>
    </div>

    {!isFormSubmitted ? (
    <div className = "app__footer-form app__flex">
      <div className = "app__flex">
        <input 
        className = "p-text" 
        type = "text" 
        placeholder = "Your Name"
        name = "name" 
        defaultValue = {name} 
        onClick = {handleChangeInput}/>
      </div>
      <div className = "app__flex">
        <input
        className = "p-text" 
        type = "text" 
        placeholder = "Your Email"
        name = "email" 
        defaultValue = {email} 
        onClick = {handleChangeInput}/>
      </div>
      <div>
        <textarea
        className = "p-text"
        placeholder='Your Message'
         name = "message"
        defaultValue = {message}
        onChange = {handleChangeInput}/>
      </div>
      <button type = "button"
      className = "p-text"
      onClick = {handleSubmit}>
      {loading ? "Sending" : "Send Message"}
      </button>
      {isFormSubmitted ? "" : <img src = {images.satellite} alt = "" className = "satellite-overlay"/> }
      {/* satellite image */}
    </div>) : (
    <div>
      <h3 className = "head-text">Thank you for getting in touch! I'll get back to you ASAP.</h3>
    </div>)}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
)