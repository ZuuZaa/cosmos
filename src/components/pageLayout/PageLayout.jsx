import { Outlet } from "react-router-dom";

export const PageLayout = ({id, order, text}) => {
  return (
    <section className="page-layout" id={id}>
    <div className="subheading-1">
      <span className="muted">{order}</span>
      {text}
    </div>
    <Outlet />
  </section>
  )
}
