import { MainLayout } from "components/MainLayout";
import { Destination } from "pages/destination";
import { Home } from "pages/home";
import { Routes, Route } from "react-router-dom";

export const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<MainLayout background="home-background" />}>
                <Route index element={<Home />} />
                <Route path="/destination" element={<Destination />} />
                {/*  <Route path="/completed" element={<CompletesTodos />} /> */}
            </Route>
        </Routes>
    )
} 