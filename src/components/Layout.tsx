import { Outlet } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
