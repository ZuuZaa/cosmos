import { useEffect, useState } from "react";
import data from "data.json";
import Moon from "assets/images/destination/image-moon.png"
import Mars from "assets/images/destination/image-mars.png"
import Europa from "assets/images/destination/image-europa.png"
import Titan from "assets/images/destination/image-titan.png"

export const Destination = () => {

  const [destinations, setDestinations] = useState([]);
  const [destinationName, setDestinationName] = useState("Europa");
  
  const targetDestination = destinations.filter(item=> item.name == destinationName)?.[0]
  const images = {Moon,Mars,Europa,Titan}

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
      <div className="page-content">
        <div className="destination-img">
          <img src={images[destinationName]} alt={destinationName}/>
        </div>

      </div>
    </section>
  )
}
