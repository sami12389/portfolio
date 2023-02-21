import React, {useState, useEffect} from 'react'
import "./certs.scss"
import {AppWrap, MotionWrap} from "../../wrapper"
import {urlFor, client} from "../../client"


const Certs = () => {
  const [certs, setCerts] = useState([]);

  useEffect(()=>{
    const query = '*[_type == "certs"]'
    client.fetch(query)
    .then((data)=>{
      setCerts(data);
    })
  }, [])

  return (
      <div className = "app__cert-main">
        <h2 className = "head-text">CERTIFICATIONS</h2>
        <div className = "app__main-cert-container">
        {certs?.map((cert)=>(
          <div className =  "app__cert-container">
            <img className = "app__cert-image" src = {urlFor(cert.img)} alt = "cert"/>
            <div className = "app__cert-desc">
              <h3 className = "bold-text">{cert.name}</h3>
              <p className = "p-text">{cert.issuedBy}</p>
              <small className = "p-text">{cert.issueDate}</small>
            </div>
          </div>
        ))}
        </div>
      </div>
  )
}


export default AppWrap(
  MotionWrap(Certs, "app__certs"),
  "certs",
  "app__primarybg"
)


