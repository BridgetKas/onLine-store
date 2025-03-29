import DesktopNav from "../NavBar/Desktop"
import { Outlet } from "react-router-dom"
import MobileNav from "../NavBar/Mobile"
import Footer from "../Footer/footer"

function Layout() {
  return (
    <div>
        <MobileNav/>
        <DesktopNav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout