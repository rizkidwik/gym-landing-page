import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Equipments from './components/Equipments/Equipments'
import BgImage from "./assets/bg.png"

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
    </div>
  )
}

export default App
