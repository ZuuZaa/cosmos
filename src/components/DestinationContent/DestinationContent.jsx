import data from "data.json";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import moon from "assets/images/destination/image-moon.png"
import mars from "assets/images/destination/image-mars.png"
import europa from "assets/images/destination/image-europa.png"
import titan from "assets/images/destination/image-titan.png"
import { NavLink } from "react-router-dom"


export const DestinationContent = () => {

  const [target, setTarget] = useState({})
  const { name } = useParams()
  const images = { moon, mars, europa, titan }

  useEffect(() => {
    setTarget(data.destinations.filter(item => item.name.toLowerCase() === name)[0])
  }, [name, target])

  return (
    <div className="destination-container">
      <div className="destination-content">
        <div className="destination-img">
          <img src={images[name]} alt={name} />
        </div>
        <div className="destination-card">
          <nav>
            <ul>
              <li className="nav-link">
                <NavLink to="/destination/moon" activeclassname="active" value="Moon">Moon</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/destination/mars" activeclassname="active" value="Mars">Mars</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/destination/europa" activeclassname="active" value="Europe">Europe</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/destination/titan" activeclassname="active" value="Titan">Titan</NavLink>
              </li>
            </ul>
          </nav>
          <h2 className="destination-name">{target.name}</h2>
          <p className="destination-decsription">{target.description}</p>
          <hr />
          <div className="card-footer">
            <div className="distance">
              <p className="subheading-2">
                AVG. DISTANCE
              </p>
              <p className="text">{target.distance}</p>
            </div>
            <div className="time">
              <p className="subheading-2">
                Est. travel time
              </p>
              <p className="text">{target.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

