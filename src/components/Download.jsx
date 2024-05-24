import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faApple, faGooglePlay} from '@fortawesome/free-brands-svg-icons'
function Download() {
  return (
    <DownloadContainer>
    <h2>Download our app</h2>
        <ButtonContainer>
            <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://apps.apple.com/de/app/lieferando-de/id419724490&ved=2ahUKEwi2jIzJkYyGAxVFR_EDHaPcAPcQFnoECBUQAQ&usg=AOvVaw3B1hTsZlip2VYGyyCvilRh">
            <ButtonComponent>
                <FontAwesomeIcon icon={faApple}/>
                <p>Download on the</p>
                <h4>AppStore</h4>
            </ButtonComponent>
            </a>
            <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://play.google.com/store/apps/details%3Fid%3Dcom.yopeso.lieferando%26hl%3Dde&ved=2ahUKEwim79aukoyGAxXEAtsEHT4WDrEQFnoECBoQAQ&usg=AOvVaw3ryCA2SGlwbutWF7OIcgF3">
            <ButtonComponent>
            <FontAwesomeIcon icon={faGooglePlay}/>
                <p>Download on the</p>
                <h4>AppStore</h4>
            </ButtonComponent>
            </a>
            

        
        </ButtonContainer>
        <ImageContainer>
            <img src="https://github.com/KarimSaliev/lieferando/blob/main/src/assets/phoneapp.png?raw=true" alt="" />
        </ImageContainer>
    </DownloadContainer>
  
    
  )
}

const DownloadContainer = styled.div`
    height: 90vh;
    width: 100vw;
    background-color: lightblue;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    h2 {
       font-family: sans-serif; 
       font-size: 2em;
       text-align: center;
    
    }
    @media (max-width: 600px) {
        padding-top: 10rem;
        flex-direction: column;
    }`
const ButtonContainer = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    a {
        text-decoration: none;
    }
    @media (max-width:780px) {
        flex-direction: column;
    }
    @media (max-width: 600px) {
        flex-direction: row;
        
    }
    `

const ButtonComponent = styled.div`
    margin: 1rem;
    padding: 0.5em;
    background-color: black;
    color: white;
    border-radius: 15%;
    width: 10em;
    font-family: sans-serif;
    :first-child {
        font-size: 4em;
    }
    &:hover{
        text-shadow: #fc0 1px 0 10px;
        box-shadow: -2px -2px 6px rgba(255, 165, 0, 0.9),
                 2px 2px 6px rgba(255, 165, 0, 0.9);
        }

    @media (max-width:500px) {
        :first-child {
            font-size: 8vw;
           }
        width: 30vw;
        p,h4 {
            font-size: 3vw;
        }
    }

   
`
const ImageContainer = styled.div`
    img {
        height: 100vh;
    }

    @media (max-width:500px) {
        img {
            height: 80vh;
            
        }
       
    }
    `
export default Download
