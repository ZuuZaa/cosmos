import { MainLayout } from "components/MainLayout";
import { Routes, Route } from "react-router-dom";

export const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<MainLayout background="home-background"/>}>
                {/* <Route index element={<AllTodos />} />
                <Route path="/active" element={<ActiveTodos />} />
                <Route path="/completed" element={<CompletesTodos />} /> */}
            </Route>
        </Routes>
    )
} 