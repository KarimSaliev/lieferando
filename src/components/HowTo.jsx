import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faBurger, faBellConcierge} from '@fortawesome/free-solid-svg-icons'
import styled, {keyframes} from 'styled-components'
import Slider from "react-slick";
function HowTo() {
        const items = [{icon:faLocationDot, h3:'Tell us where you are', h4:'We\'ll show you stores and restaurants nearby you can order from.'},
        {icon:faBurger, h3:'Find what you want', h4:'Search for items or dishes, businesses or cuisines.'},
        {icon:faBellConcierge, h3:'Order for delivery or collection', h4:'Order for delivery or collection.'}]

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          };
        return (

                <HowToContainer>
                    <p>How to order?</p>
                    <h1>It's easy as this</h1>
                    <RowContainer>
                        {items.map((item,index)=>{
                            return (
                                <IconColumn key={index}>
                                <FontAwesomeIcon icon={item.icon} style={IconStyle} />
                                <h3>{item.h3}</h3>
                                <h4>{item.h4}</h4>
                            </IconColumn>
                            )
                        })}
                
                </RowContainer> 
                        <SliderContainer>
                        <Slider {...settings}>
                        {items.map((item,index)=>(
                            <div key={index}>
                                <SliderComponent>
                                <FontAwesomeIcon icon={item.icon} style={IconStyle} />
                            <h3>{item.h3}</h3>
                            <h4>{item.h4}</h4>
                                </SliderComponent>
                            
                        </div>
                        )
                          
                                
                            
                            
                        )}
                        
                 </Slider>
                        </SliderContainer>
                </HowToContainer>
                    

        )
}
const neonEffect = keyframes`
  0% {
    text-shadow: 0 0 9px #fc0;
  }
  50% {
    text-shadow: 0 0 20px #fc0;
  }
  100% {
    text-shadow: 0 0 9px #fc0;
  }
`;
const HowToContainer = styled.div`
    text-align: center;
    height: 500px;
    margin-top: 3rem;
    margin-bottom: 4%;

    h1 {
        color: orange;
        font-size: 3rem;
        animation: ${neonEffect} 1.5s ease-in-out infinite alternate;
    }
    p {
        font-size: 1.5rem;
    }
`
const IconColumn = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 13em;
    h4 {
        font-weight: 50;
        font-family: sans-serif;
        height: 20em;
    }
    h3 {
        width: 15em;
        font-weight: 100;
        height: 2em;
    
    }
 
    `
const IconStyle = {
    fontSize: '4rem',
    color: 'orange'
}


const RowContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    width: 100vw;
    height: 40vh;
    margin-top: 3rem;
    padding-top: 7rem;
    @media (max-width: 780px) {
        display: none;
    }
   `
const SliderContainer = styled.div`
    display: none;
    @media (max-width: 780px) {
        display: block;
    }`
const SliderComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    height: 16rem;
    h4 {
        font-weight: 50;
        font-family: sans-serif;
        height: 20em;
        width: 10em;
    }
    h3 {
        width: 10em;
        font-weight: 100;
        height: 4em;
        margin-top: 1em;
    
    }
    `
export default HowTo
