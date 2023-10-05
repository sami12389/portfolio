import React, {useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub} from "react-icons/ai"
import {motion} from "framer-motion"
import {AppWrap, MotionWrap} from "../../wrapper"
import {urlFor, client} from "../../client"
import "./Work.scss"


const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  
  useEffect(()=>{
   const query = '*[_type == "works"]';
   client.fetch(query)
   .then((data)=>{
    setWorks(data);
    setFilterWork(data)
    console.log(works)
   })
  },[])
  
  
  const handleWorkFilter = (item)=>{
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity: 0}])
    setTimeout(()=>{
      setAnimateCard([{y:0, opacity: 1}])
      if(item === "All"){
        setFilterWork(works)
      }else{
        setFilterWork(works.filter((work)=>work.tags.includes(item)));
      }
    }, 500)
  }
  return (
    <>
    <h2 className = "head-text">
     <span>Portfolio</span> section.
    </h2>
    <div className = 'app__work-filter'>
      {["All", "MERN", "React", "NextJS", "Node", "Sanity CMS", "MongoDB", "UI/UX", "MaterialUI", "Tailwind CSS", "AWS"].map((item, index)=>(
        <div
        className = {`app__work-filter-item app__flex p-text ${activeFilter === item ? "items-active": ""}`}
        key = {index}
        onClick = {()=>handleWorkFilter(item)}
        >
        {item}
        </div>
      ))}
    </div>
    <motion.div
    animate = {animateCard}
    transition = {{duration: 0.5, delayChildren: 0.5}}
    className = "app__work-portfolio"
    >
      {filterWork.map((work, index)=>(
        <div className = "app__work-item app__flex"
        key = {index}>
          <div className = "app__work-img app__flex">
            <img src = {urlFor(work.imgUrl)} alt = {work.name}/>
            <motion.div
            transition = {{duration: 0.25, ease: "easeInOut", staggerChildren: 0.5}}
            className = "app__work-hover app__flex"
            >
              <a href = {work.projectLink} 
              target = "_blank"
              rel="noopener noreferrer">
                <div>
                   <AiFillEye className = "linkIcons" size = {30}/>
                </div>
              </a>
               <a href = {work.codeLink} 
              target = "_blank"
              rel="noopener noreferrer">
                <div>
                   <AiFillGithub className = "linkIcons" size = {30}/>
                </div>
              </a>
            </motion.div>
          </div>

          <div className = "app__work-content app__flex">
            <h4 className = "bold-text">{work.title}</h4>
            <p className = "p-text app__work-text" style = {{marginTop:10}}>
              {work.description}
              <div className = "app__work-tag app__flex">
                <p>{work.tags[0]}</p>
              </div>
            </p>
          </div>
        </div>
      ))}
    </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
)

