import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Equipments from './components/Equipments/Equipments'
import Banner from './components/Banner/Banner'
import Tab from './components/Tab/Tab'
import Testimonials from './components/Testimonials/Testimonials'
import BgImage from "./assets/bg.png"

import { BannerData, Banner2Data } from './mockData/data'


const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
}
function App() {

  return (
    <div className="overflow-x-hidden">
        <div style={bgStyle}>
            <Navbar/>
            <Hero/>
        </div>
        <Equipments/>
        <Banner {...BannerData} />
        <Tab/>
        <Banner {...Banner2Data} />
        <Testimonials/>
    </div>
  )
}

export default App
