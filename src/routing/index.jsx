import { CrewContent } from "components/crewContent";
import { DestinationContent } from "components/destinationContent";
import { MainLayout } from "components/mainLayout";
import { TechnologyContent } from "components/technologyContent";
import { Crew } from "pages/crew";
import { Destination } from "pages/destination";
import { Home } from "pages/home";
import { Technology } from "pages/technology";
import { Routes, Route, Navigate } from "react-router-dom";

export const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<MainLayout background="home-background" />}>
                <Route index element={<Home />} />
                <Route path="destination" element={<Destination />}>
                    <Route index element={<Navigate to="moon" />} />
                    <Route path=":name" element={<DestinationContent />} />
                </Route>
                <Route path="crew" element={<Crew />}>
                    <Route index element={<Navigate to="commander" />} />
                    <Route path=":role" element={<CrewContent />} />
                </Route>
                <Route path="technology" element={<Technology />}>
                    <Route index element={<Navigate to="launch" />} />
                    <Route path=":id" element={<TechnologyContent />} />
                </Route>
            </Route>
        </Routes>
    )
} 