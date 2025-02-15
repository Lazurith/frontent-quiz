// rrd imports
import { Outlet } from "react-router-dom"

// component
import Navbar from "../components/Navbar"


function MainLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            {/* Footer */}
        </>
    )
}

export default MainLayout
