import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutProduct from "./components/AboutProduct"
import Store from "./components/Store"
import Pay from "./components/Pay"

const App = () => {
  return (
    <div
      className="
          w-[100vw]
          *:font-poppins
      "
    >

      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/product/:id" element={<AboutProduct />} />
        <Route path="/store" element={<Store />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
