import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import Men from "./pages/Men"
import Women from "./pages/Women"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>} >
          <Route path='men' element={<Men/>} />
          <Route path='women' element={<Women/>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App