import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Aboutus from './Pages/Aboutus/Aboutus'
import Home from './Pages/Home'
import Donation from './Pages/Donation/Donation'
import Events from './Pages/Events/Events'
import Registration from './Pages/registration/Registration'
import Members from './Pages/members/Members'
import Report from './Pages/Report/Report'
import Paymentqr from './Pages/QR/Paymentqr'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Donation" element={<Donation />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/paymentqr" element={<Paymentqr />} />
          {/* <Route path={`/PostPage/:page/:cardID/`} element={<PostPage darkMode={darkMode} />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
