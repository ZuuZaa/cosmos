import { DestinationContent } from "components/DestinationContent";
import { MainLayout } from "components/MainLayout";
import { Destination } from "pages/destination";
import { Home } from "pages/home";
import { Routes, Route, Navigate } from "react-router-dom";

export const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<MainLayout background="home-background" />}>
                <Route index element={<Home />} />
                <Route path="/destination" element={<Destination />}>
                    <Route index element={<Navigate to="/destination/moon" />} />
                    <Route path=":name" element={<DestinationContent />} />
                </Route>
                {/*  <Route path="/completed" element={<CompletesTodos />} /> */}
            </Route>
        </Routes>
    )
} 