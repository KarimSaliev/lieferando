import React from 'react'
import styled from 'styled-components'
import BriefCourier from '../components/BriefCourier'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
function Courier() {
  return (
    <CourierContainer>
        <BriefCourier/>
        <Testimonials/>
        <Faq/>
    </CourierContainer>
    
  )
}
const CourierContainer = styled.div`
    `
export default Courier
