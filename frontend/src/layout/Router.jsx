import { Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"

function Router() {

    return (
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
    )
}

export default Router