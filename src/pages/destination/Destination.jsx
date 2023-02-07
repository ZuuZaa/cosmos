import { useEffect, useState } from "react";
import data from "data.json";
import Moon from "assets/images/destination/image-moon.png"
import Mars from "assets/images/destination/image-mars.png"
import Europa from "assets/images/destination/image-europa.png"
import Titan from "assets/images/destination/image-titan.png"
import { NavLink } from "react-router-dom";

export const Destination = () => {

  const [destinations, setDestinations] = useState([]);
  const [destinationName, setDestinationName] = useState("Moon");

  const targetDestination = destinations.filter(item => item.name === destinationName)?.[0]
  const images = { Moon, Mars, Europa, Titan }

  useEffect(() => {
    setDestinations(data.destinations);
  }, [])

  console.log(targetDestination)


  //console.log(destinations, targetDestination.images.png);
  return (
    <section className="destination-page">
      <div className="subheading-1">
        <span className="muted">01</span>
        Pick your destination
      </div>
      <div className="destination-container">
        <div className="destination-content">
          <div className="destination-img">
            <img src={images[destinationName]} alt={destinationName} />
          </div>
          <div className="destination-card">
            <nav>
              <ul>
                <li className="nav-link">
                  <NavLink exact="true" to="/destination" activeclassname="active" value="Moon">Moon</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/" activeclassname="active" value="Mars">Mars</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/" activeclassname="active" value="Europe">Europe</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/" activeclassname="active" value="Titan">Titan</NavLink>
                </li>
              </ul>
            </nav>
            <h2 className="destination-name">{targetDestination?.name}</h2>
            <p className="destination-decsription">{targetDestination?.description}</p>
            <hr />
            <div className="card-footer">
              <div className="distance">
                <p className="subheading-2">
                  AVG. DISTANCE
                </p>
                <p className="text">{targetDestination?.distance}</p>
              </div>
              <div className="time">
                <p className="subheading-2">
                  Est. travel time
                </p>
                <p className="text">{targetDestination?.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
