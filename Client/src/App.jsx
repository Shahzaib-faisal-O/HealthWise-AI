import React from 'react'
import Home from './pages/Home'
import Form from './pages/Form'

import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Algorithm from './pages/Algorithm'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
   <BrowserRouter>
<Nav/>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/algorithm" element={<Algorithm />} />
<Route path="/form" element={<Form />} />
</Routes>
<Footer/>
   </BrowserRouter>
   </>
  )
}

export default App