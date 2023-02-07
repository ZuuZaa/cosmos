import { Outlet } from "react-router-dom";

export const Destination = () => {

  return (
    <section className="destination-page">
      <div className="subheading-1">
        <span className="muted">01</span>
        Pick your destination
      </div>
      <Outlet />
    </section>
  )
}
