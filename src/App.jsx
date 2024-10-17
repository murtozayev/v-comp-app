import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutProduct from "./components/AboutProduct"
import Store from "./components/Store"
import Pay from "./components/Pay"
import Cart from "./components/Cart"
import { useState } from "react"
import SearchResult from "./components/SearchResult"

const App = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div
      className={`w-[100vw] *:font-poppins`}
    >

      <Navbar setShow={setShowModal} />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/product/:id" element={<AboutProduct />} />
        <Route path="/store" element={<Store />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>

      <Footer />

      <Cart show={showModal} setShow={setShowModal} />

    </div>
  )
}

export default App
