import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import Imprint from "./Imprint"
import AboutMe from "./AboutMe"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/aboutme" element={<AboutMe />} />


        </Routes>
    );
}

export default App;
