import { Toaster } from "react-hot-toast"
import Contact from "./components/Contact"
import Header, { HederPhone } from "./components/Header"
import Home from "./components/Home"
import Services from "./components/Services"
import Testimonial from "./components/Testimonial"
import Timeline from "./components/TimeLine"
import Work from "./components/Work"
import Footer from "./components/Footer"
import { useState } from "react"




function App() {
  const [menuOpen, setmenuOpen] = useState(false)


  return (
    <>
      <HederPhone menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <Toaster />
      <Header menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />


    </>
  )
}

export default App
