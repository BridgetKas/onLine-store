import DesktopNav from "../NavBar/Desktop"
import { Outlet } from "react-router-dom"
import MobileNav from "../NavBar/Mobile"

function Layout() {
  return (
    <div>
        <MobileNav/>
        <DesktopNav/>
        <Outlet/>
        <p>This is the footer</p>
    </div>
  )
}

export default Layout