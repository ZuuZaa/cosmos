import { Header } from "components/Header"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
  return (
    <div className="main-layout">
        <Header/>
        <Outlet/>
    </div>
  )
}