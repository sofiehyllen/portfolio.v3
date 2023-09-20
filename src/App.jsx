
import React from "react"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import PageHome from "./pages/PageHome"
import PageTanken from "./pages/PageTanken"
import PageMedova from "./pages/PageMedova"
import PageHamanns from "./pages/PageHamanns"



function App() {
  return (

<div className="body">
    <div className="grid"></div>



    <Routes className="routes" >
        <Route path="/" element={<PageHome/>} />
        <Route path="/tanken" element={<PageTanken/>} />
        <Route path="/medova" element={<PageMedova/>} />
        <Route path="/hamanns" element={<PageHamanns/>} />
    </Routes>
</div>
  )
}

export default App
