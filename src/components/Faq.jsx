import React from 'react'
import FaqList from './FaqList'
import styled from 'styled-components'
function Faq() {
  return (
    <FaqContainer>
        <h2>Frequently Asked Questions</h2>
        <FaqList text='How old do I need to be to work as a courier?' subtext='You need to be at least 18 years old.'/>
        <FaqList text='Do you pay per hour?' subtext='Yes! We believe in a fair system in which you get paid even in your waiting time. Of course, you will receive a proper and unlimited work contract.'/>
        <FaqList text='My city is not listed but I would like to work for you. What can I do?' subtext="If your city is not listed that means that we don't have Lieferando couriers there, but that the restaurants deliver the food themselves. Keep an eye on our page! Maybe your city will be listed soon."/>
        <FaqList text='I have other questions. How can I reach out?' subtext='You can send an email to driver-recruitment-de@takeaway.com.'/>
        <FaqList text='What is the order bonus?' subtext='The order bonus pays out as follows:' list = {['€ 0 extra per delivery when completing 0 - 25 deliveries per month','€ 0.25 extra per delivery when completing 26 - 100 deliveries per month','€ 1 extra per delivery when completing 101 - 200 deliveries per month']
          
        }/>
        

    </FaqContainer>
     
  )
}

export default Faq

const FaqContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 200px;
    height: auto;
    align-items: center;
    background-color: lightgrey;
    font-family: 'Montserrat';
    padding: 3%;
    h2{
        margin-bottom: 3%;
    }
    @media (max-width:740px) {
      h2 {
        font-size: 3.4vw;
      }
    }`