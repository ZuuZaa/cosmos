import { MainLayout } from "components/MainLayout";
import { Home } from "pages/home";
import { Routes, Route } from "react-router-dom";

export const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<MainLayout background="home-background"/>}>
                 <Route index element={<Home/>} />
               {/* <Route path="/active" element={<ActiveTodos />} />
                <Route path="/completed" element={<CompletesTodos />} /> */}
            </Route>
        </Routes>
    )
} 