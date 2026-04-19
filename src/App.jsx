import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cocktails from "./components/Coctails"

gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
    <main>
      <Navbar /> 
      <Hero/>
      <Cocktails/>
    </main>
  )
}

export default App

// 1:15:18
