import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Page from './pages/Page'
import styled from 'styled-components'
import Footer from './components/Footer'
function App() {

  return (
    <Main>
      <BrowserRouter basename="/lieferando/">
      <Navbar/>
      <Page />
      <Footer/>
      </BrowserRouter>
      
    </Main>
  )
}
const Main = styled.div`
  overflow: hidden;`
export default App
