import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faStar, faThumbsUp, faCheck} from '@fortawesome/free-solid-svg-icons';
function Brief() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
    <BriefContainer>
    <BriefComponent>
        <FontAwesomeIcon icon={faCertificate}/>
        <h3>Loyalty programs</h3>
        <p><FontAwesomeIcon icon={faCheck}/>The Punkte programme: collect points and redeem them for great offers</p>
        <p><FontAwesomeIcon icon={faCheck}/>Receive stamps, promotions, discounts, news, and more via our newsletters and social channels</p>
        <p></p>
    </BriefComponent>
    <BriefComponent>
    <FontAwesomeIcon icon={faStar}/>
        <h3>Our promise</h3>
        <p><FontAwesomeIcon icon={faCheck}/>Excellent service</p>
        <p><FontAwesomeIcon icon={faCheck}/>Authentic user reviews</p>
        <p><FontAwesomeIcon icon={faCheck}/>Our price guarantee - pay the same, whether you're in the restaurant or at home</p>
    </BriefComponent>
    <BriefComponent>
    <FontAwesomeIcon icon={faThumbsUp}/>
        <h3>Your Benefits</h3>
        <p><FontAwesomeIcon icon={faCheck}/>35.000+ places to choose from</p>
        <p><FontAwesomeIcon icon={faCheck}/>Pay online or with cash</p>
        <p><FontAwesomeIcon icon={faCheck}/>Order any time, anywhere, and on any device</p>
    </BriefComponent>
    </BriefContainer>
    <SliderContainer>
        <Slider {...settings}>
        <SliderComponent>
        <FontAwesomeIcon icon={faCertificate}/>
        <h3>Loyalty programs</h3>
        <p><FontAwesomeIcon icon={faCheck}/>The Punkte programme: collect points and redeem them for great offers</p>
        <p><FontAwesomeIcon icon={faCheck}/>Receive stamps, promotions, discounts, news, and more via our newsletters and social channels</p>
        <p></p>
    </SliderComponent>
        <SliderComponent>
        <FontAwesomeIcon icon={faStar}/>
        <h3>Our promise</h3>
        <p><FontAwesomeIcon icon={faCheck}/>Excellent service</p>
        <p><FontAwesomeIcon icon={faCheck}/>Authentic user reviews</p>
        <p><FontAwesomeIcon icon={faCheck}/>Our price guarantee - pay the same, whether you're in the restaurant or at home</p>
    </SliderComponent>
    <SliderComponent>
    <FontAwesomeIcon icon={faThumbsUp}/>
        <h3>Your Benefits</h3>
        <p><FontAwesomeIcon icon={faCheck}/>35.000+ places to choose from</p>
        <p><FontAwesomeIcon icon={faCheck}/>Pay online or with cash</p>
        <p><FontAwesomeIcon icon={faCheck}/>Order any time, anywhere, and on any device</p>
    </SliderComponent>
        </Slider>
    </SliderContainer>
    </div>
  )
}
const BriefContainer = styled.div`
    min-width: 100vw;
    height: 450px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: lightgrey;
    @media (max-width: 990px) {
        display: none;
    }`

const BriefComponent = styled.div`
    background-color: white;
    color: black;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 20rem;
    width: 20rem;
    font-family: sans-serif;
    : first-child {
        font-size: 3rem;
        color: orange;
    }
    h3 {
        font-weight: 500;
        text-align: center;

    }
    p { 
        line-height: 2em;
        height: 2rem;
        padding: 1em;
        font-weight: 100;
        margin-left: 1rem;
        font-size: 0.8rem;
        :first-child {
            font-size: 1.5rem;
            padding-right: 1rem;
            
        }
    }`

const SliderContainer = styled.div`
    padding-top: 5rem;
    min-width: 100vw;
    height: 450px;
    background-color: lightgrey;
    display: none;
    @media (max-width: 990px) {
        display: block;
    }`
const SliderComponent = styled.div`
background-color: white;
color: black;
border-radius: 5%;
height: 20rem;
width: 20rem;
font-family: sans-serif;
: first-child {
    font-size: 2.5rem;
    color: orange;
    margin: 0.2em;
}
h3 {
    font-weight: 500;
    text-align: center;

}
p { 
    line-height: 2em;
    height: 2rem;
    padding: 1em;
    font-weight: 100;
    margin-left: 1rem;
    font-size: 0.8rem;
    :first-child {
        font-size: 1.5rem;
        padding-right: 1rem;
        
    }
}
@media(max-width:300px) {
    h3 {
        font-size: 5vw;
    }
    :first-child {
        font-size: 15vw;
    }
    p {
        font-size: 4.5vw;
        :first-child {
            font-size: 5vw;
        }
    }
}
    `
export default Brief
