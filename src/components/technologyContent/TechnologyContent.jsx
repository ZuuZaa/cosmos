import data from "data.json";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import launchPortrait from "assets/images/technology/image-launch-vehicle-portrait.jpg";
import portPortrait from "assets/images/technology/image-spaceport-portrait.jpg";
import capsulePortrait from "assets/images/technology/image-space-capsule-portrait.jpg";
import launchLandscape from "assets/images/technology/image-launch-vehicle-landscape.jpg";
import portLandscape from "assets/images/technology/image-spaceport-landscape.jpg";
import capsuleLandscape from "assets/images/technology/image-space-capsule-landscape.jpg";
import { NavLink } from "react-router-dom"


export const TechnologyContent = () => {

  const [target, setTarget] = useState({})
  const { id } = useParams()
  const images = { 
    launch: {
    landscape: launchLandscape,
    portrait: launchPortrait
  }, 
  port : {
    landscape: portLandscape,
    portrait: portPortrait
  }, 
  capsule: {
    landscape: capsuleLandscape,
    portrait: capsulePortrait
  }
}



  useEffect(() => {
    setTarget(data.technology.filter(item => item.id === id)[0])
    console.log(target, data.technology, id)
  }, [id])

  return (
    <div className="tech-container">
      <div className="tech-content">

        <div className="tech-card">
          <nav>
            <ul>
              <li className="tech-link">
                <NavLink to="/technology/launch" activeclassname="active">1</NavLink>
              </li>
              <li className="tech-link">
                <NavLink to="/technology/port" activeclassname="active">2</NavLink>
              </li>
              <li className="tech-link">
                <NavLink to="/technology/capsule" activeclassname="active">3</NavLink>
              </li>
            </ul>
          </nav>
          <div className="card-content">
            <h5>THE TERMINOLOGY…</h5>
            <h3 className="tech-name">{target.name}</h3>
            <p className="tech-decsription">{target.description}</p>
          </div>
        </div>
        <div className="tech-img">
          <div className="img-wrapper">
            <img src={images[id].landscape} alt={id} />
          </div>
        </div>
      </div>
    </div>
  )
}

