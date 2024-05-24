import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Courier from './Courier'
import Help from './Help'
function Page() {
  return (
    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path='/courier' element={<Courier/>}/>
        <Route path='/question' element={<Help/>}/>
    </Routes>
  )
}

export default Page
