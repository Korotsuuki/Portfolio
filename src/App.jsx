import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GradientCircle from './components/GradientCircle/GradientCircle.jsx'
import GradientCircleBottom from './components/GradientCircleBottom/GradientCircleBottom.jsx'
import LegalNotice from './pages/LegalNotice/LegalNotice.jsx'
import Home from './pages/Home/Home.jsx'
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"


function App() {
  const basename = import.meta.env.MODE === "production" ? "/portfolio" : "" ;
  return (
    <BrowserRouter basename={basename}>
      <GradientCircle />
      <GradientCircleBottom/>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='LegalNotice' element={<LegalNotice />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App