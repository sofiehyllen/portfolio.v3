
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import PageHome from "./pages/PageHome"
import PageTanken from "./pages/PageTanken"
import PageMedova from "./pages/PageMedova"
import PageHamanns from "./pages/PageHamanns"
import PageIllustrations from "./pages/PageIllustrations"
import PageSkills from "./pages/PageSkills"
import ScrollToTop from "./components/ScrollToTop"


function App() {
  return (

<div className="body">
    <div className="grid"></div>
    <Routes className="routes">
        <Route path="/" element={<PageHome/>} />
        <Route path="/tanken" element={<PageTanken/>} />
        <Route path="/medova" element={<PageMedova/>} />
        <Route path="/hamanns" element={<PageHamanns/>} />
        <Route path="/illustrations" element={<div><ScrollToTop/><PageIllustrations/></div>} />
        <Route path="/skills" element={<div><ScrollToTop/><PageSkills/></div>}/>
    </Routes>
</div>
  )
}

export default App
