import { Header } from "components/Header"

export const MainLayout = ({background}) => {
  return (
    <div className={`main-layout ${background}`}>
        <Header/>
    </div>
  )
}