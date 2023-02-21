import Particles from "react-tsparticles"
import {loadFull} from "tsparticles"
import particlesConfig from "./config/particlesConfig"

const ParticlesBg = () => {
  const particlesInit = async (main)=>{
    console.log(main);
    await loadFull(main);
  }

   const particlesLoaded = (container)=>{
    console.log(container);
  }

  return (
    <div>
        <Particles
        id = "tsparticles"
        init={particlesInit}
        loaded = {particlesLoaded}
         options = {particlesConfig}/>
    </div>
  )
}

export default ParticlesBg