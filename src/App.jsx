import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GradientCircle from './components/GradientCircle/GradientCircle.jsx'
import GradientCircleBottom from './components/GradientCircleBottom/GradientCircleBottom.jsx'
import LegalNotice from './pages/LegalNotice/LegalNotice.jsx'
import Home from './pages/Home/Home.jsx'
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Error from "./pages/Error/Error.jsx"
import Project from "./pages/Project/Project.jsx"


function App() {
  const basename = import.meta.env.MODE === "production" ? "/Portfolio" : "" ;
  return (
    <BrowserRouter basename={basename}>
      <GradientCircle />
      <GradientCircleBottom/>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/LegalNotice' element={<LegalNotice />}/>
        <Route path="*" element={<Error />} />
        <Route path="/project/:id" element={<Project />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App