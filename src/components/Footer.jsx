import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube, } from '@fortawesome/free-brands-svg-icons'
import Droplist from './Droplist/Droplist'

function Footer() {
  const date = new Date();

  return (
    <FooterContainer>
      <LogoFooterContainer>
        <img src="https://github.com/KarimSaliev/lieferando/blob/main/src/assets/logo.png?raw=true" alt="" />
        <h3>Follow us</h3>
        <Socials>
        <FontAwesomeIcon icon ={faFacebook}/>
        <FontAwesomeIcon icon ={faInstagram}/>
        <FontAwesomeIcon icon ={faTwitter}/>
        <FontAwesomeIcon icon ={faYoutube}/>
        </Socials>
      </LogoFooterContainer>
      <DropDownContainer>
        <DropDownComponent1>
          <Droplist name='Lieferando.de' list={["Lieferando for Business", "Customer service", "Recommend a business", "List your business", "Become an affiliate", "Become a courier", "Jobs", "StampCard", "Points", "Terms of use", "Privacy statement", "Colophon", "Cookie statement"
]}/>
        </DropDownComponent1>
        <DropDownComponent2>
        <Droplist name='lieferando' list={['value1','value2']}/>
        <hr />
        <Droplist name='lieferando' list={['value1','value2']}/>
        <hr />
        <Droplist name='lieferando' list={['value1','value2']}/>
        <hr />
        <Droplist name='lieferando' list={['value1','value2']}/>
        <hr />
        <Droplist name='lieferando' list={['value1','value2']}/>
        <hr />
        <Droplist name='lieferando' list={['value1','value2']}/>
        <hr />
        <Droplist name='lieferando' list={['value1','value2']}/>
        </DropDownComponent2>
       

      </DropDownContainer>

      <LinksContainer>
      <p>Recommend a restaurant</p>
      <p>Sign up a restaurant</p>
      <p>Jobs</p>
      <p>Terms of service</p>
      <p>Colophon</p>
      <p>Cookie Statement</p>
      <p>Bug Bounty</p>
      <p>Ethics hotline</p>
      </LinksContainer>
       <p>©{date.getFullYear()}Lieferando.de</p>
    </FooterContainer>
  )
}
const LogoFooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        height: 5rem;
        width: 16rem;
    }
    @media(max-width:300px) {
      img {
        height: 3.7rem;
        width: 13rem;
      }
    }
    h3 {
        font-weight: 100;
    }`
const Socials = styled.div`
    display: flex;
    * {
        color: orange;
        font-size: 2rem;
        padding: 1rem;
    }
    @media (max-width:210px) {
      * {
        font-size: 1rem;
      }
    }
    `

const FooterContainer= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: beige;
    flex-direction: column;
    height: auto;
    overflow-y: auto;
    padding-bottom: 1rem;
    p {
      font-family: sans-serif;
      color: grey;
      font-size: 1.2vw;
    }
    @media(max-width: 500px) {
      p {
        font-size: 1.7vw;
      }
    }
    @media(max-width: 300px) {
      p {
        font-size: 3vw;
      }
    }

    
    `

const DropDownContainer = styled.div`
    display: flex;
    padding-bottom: 1rem;
    @media (max-width: 700px) {
      flex-direction: column;

    }`
const DropDownComponent1 = styled.div`
   margin-right: 10vw; 
   @media(max-width: 700px) {
    margin-right: 0;
    margin-bottom: 1em;
  }
    `
const DropDownComponent2 = styled.div`

    margin-left: 10vw;
    @media(max-width: 700px) {
      margin-left: 0;
    }
    *{
      margin-bottom: 1em;
    }
    `
const LinksContainer = styled.div`
  border-top: grey solid 1px;  
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;
  width: 100%;
  height: 30px;
  p {
    font-family: sans-serif;


  }
  @media(max-width: 300px) {
    p {
      font-size: 2.4vw;
    }
  }
  `
export default Footer
