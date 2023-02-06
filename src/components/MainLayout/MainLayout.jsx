import { Header } from "components/Header"
import { Outlet } from "react-router-dom"

export const MainLayout = ({background}) => {
  return (
    <div className={`main-layout ${background}`}>
        <Header/>
        <Outlet/>
    </div>
  )
}