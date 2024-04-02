import { Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import IntBar from "../Shows/IntBar"
import CiaOffice from "../Shows/CiaOffice"
import H20Drone from "../Shows/H20Drone"
import Proton from "../Shows/Proton"

function Router() {

    return (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Int-Bar" element={<IntBar />} />
          <Route path="/CIA-Office" element={<CiaOffice />}/>
          <Route path="/H20-Drone" element={<H20Drone />}/>
          <Route path="/Proton-Accelerator" element={<Proton />}/>
        </Routes>
    )
}

export default Router