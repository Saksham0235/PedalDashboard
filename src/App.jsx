import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Home/Hero'
import About from './components/About/About'
import AboutUs from './components/About/AboutUs'
import Offer from './components/Offerings/Offer'
// import Accordion from './components/Accordion/Accordion'

function App() {


  return (
    <>
    <BrowserRouter>
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <AboutUs/>
    <Offer/>
    {/* <Accordion/> */}
    </div>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
