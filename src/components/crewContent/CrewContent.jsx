import data from "data.json";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import commander from "assets/images/crew/image-douglas-hurley.png";
import specialist from "assets/images/crew/image-mark-shuttleworth.png";
import pilot from "assets/images/crew/image-victor-glover.png";
import engineer from "assets/images/crew/image-anousheh-ansari.png";
import { NavLink } from "react-router-dom"


export const CrewContent = () => {

  const [target, setTarget] = useState({})
  const { role } = useParams()
  const images = { commander, specialist, pilot, engineer }

  useEffect(() => {
    const target = role === "engineer"
      ? data.crew.find(item => item.role === "Flight Engineer")
      : role === "specialist"
        ? data.crew.find(item => item.role === "Mission Specialist")
        : data.crew.find(item => item.role.toLowerCase() === role)
    setTarget(target)
  }, [role])

  return (
    <div className="crew-container">
      <div className="crew-content">
        <div className="info">
          <div className="text">
            <h4 className="role">
              {target?.role}
            </h4>
            <h3 className="name">{target?.name}</h3>
            <p className="bio">{target?.bio}</p>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/crew/commander" activeclassname="active" value="commander" />
              </li>
              <li>
                <NavLink to="/crew/specialist" activeclassname="active" value="specialist" />
              </li>
              <li>
                <NavLink to="/crew/pilot" activeclassname="active" value="pilot" />
              </li>
              <li>
                <NavLink to="/crew/engineer" activeclassname="active" value="engineer" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="image-container">
        <div className="image-wrapper">
          <img src={images[role]} alt={role} />
        </div>
      </div>
    </div>
  )
}

