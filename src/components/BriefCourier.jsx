import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faEuro, faPeopleGroup, faBicycle, faClock, faSmile, faStreetView} from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'
function BriefCourier() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
     <CourierBriefContainer>
        <TextContainer>
            <h2>Become a Lieferando courier</h2>
            <h3>Become a courier and earn an average of 14.60 per hour, pls tips</h3>
              <button>Apply now</button>
            <p>*This amount includes base wage of € 12.50 per hour and the average order bonus per hour for a full-time courier
            </p>
        </TextContainer>
        <ImageContainer>
        <img src="https://takeaway-recruitment-api.k.elnino-production.com/images/salary_calculator.jpg" alt="" />
        </ImageContainer>
        </CourierBriefContainer>
        <ComponentContainer>
        <ComponentS>
          <FontAwesomeIcon icon={faSun}/>
          <h2>Life's brighter in orange</h2>
          <p>A stable and secure work environment and a range of great benefits. Your career journey starts here.</p>
        </ComponentS>
        <ComponentS>
        <FontAwesomeIcon icon={faEuro}/>
          <h2>What are you waiting for?</h2>
          <p>Work on a permanent contract that suits you best, earn an hourly wage with bonuses on top, and we'll even pay while you wait for the orders being prepared.</p>
        </ComponentS>
        <ComponentS>
        <FontAwesomeIcon icon={faPeopleGroup}/>
          <h2>We're here for you</h2>
          <p>The right shifts, insurance, on-demand support and guaranteed monthly payment. We've got exactly what you need, when you need it.</p>
        </ComponentS>
        </ComponentContainer>
        <Header>
          <h2>Before you become a courier, you'll need</h2>
        </Header>
        <Requirements>
          
          <Items>
            <Item>
              <FontAwesomeIcon icon={faBicycle}/>
              <p>Proof of identification, insurance and your drivers licence (if you plan on riding a moped)</p>
            </Item>
            <Item>
              <FontAwesomeIcon icon={faClock}/>
              <p>Proof you’re at least 18 years old</p>
            </Item>
            <Item>
              <FontAwesomeIcon icon={faSmile}/>
              <p>To be self-reliant with a positive, can-do attitude</p>
            </Item>
            <Item>
              <FontAwesomeIcon icon={faStreetView}/>
              <p>A passion for the outdoors!</p>
            </Item>
          </Items>
          
          
          <Overlay>
          <img src="https://thumbor.takeaway-recruitment-api.k.elnino-production.com/YySnHQsmJV46JPtU0L1PY6AU9SI=/534x800/smart/https%3A%2F%2Ftakeaway-recruitment-api.k.elnino-production.com%2Fimages%2Fwhat_you_need_2_resize.webp" alt="" />
          </Overlay>
        </Requirements>
        <RecruitmentContainer>
          <h2>The recruitment process</h2>
          <RecruitmentComponentContainer>
            <RecruitmentComponent>
                  <Circle style={{backgroundColor:'lightblue'}}>
                    <FontAwesomeIcon icon={faBicycle}/>
                  </Circle>
                  <p>
                  First things first, we need to know how you’d like to work. So, we’ll need some documents from you and then there will be a phone interview. 
                  </p>
            </RecruitmentComponent>
            <RecruitmentComponent>
                  <Circle style={{backgroundColor:'#FFED5F'}}>
                    <FontAwesomeIcon icon={faBicycle}/>
                  </Circle>
                  <p>
                  First things first, we need to know how you’d like to work. So, we’ll need some documents from you and then there will be a phone interview. 
                  </p>
            </RecruitmentComponent>
            <RecruitmentComponent>
                  <Circle style={{backgroundColor:'#bf6b99'}}>
                    <FontAwesomeIcon icon={faBicycle}/>
                  </Circle>
                  <p>
                  First things first, we need to know how you’d like to work. So, we’ll need some documents from you and then there will be a phone interview. 
                  </p>
            </RecruitmentComponent>
          
          </RecruitmentComponentContainer>
          <SliderContainer>
            <Slider {...settings}>
              <>
              <SliderComponent>
                  <Circle style={{backgroundColor:'lightblue'}}>
                    <FontAwesomeIcon icon={faBicycle}/>
                  </Circle>
                  <p>
                  First things first, we need to know how you’d like to work. So, we’ll need some documents from you and then there will be a phone interview. 
                  </p>
            </SliderComponent>
              </>
              <>
              <SliderComponent>
                  <Circle style={{backgroundColor:'lightblue'}}>
                    <FontAwesomeIcon icon={faBicycle}/>
                  </Circle>
                  <p>
                  First things first, we need to know how you’d like to work. So, we’ll need some documents from you and then there will be a phone interview. 
                  </p>
            </SliderComponent>
              </>
           
           
              
             
            </Slider>
          </SliderContainer>
        </RecruitmentContainer>

    </>
   
  )
}

const CourierBriefContainer = styled.div`
    display: flex;
    min-height: 800px;
    height: auto;
    @media(max-width: 400px) {
      min-height: 700px;
    }
    `
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    width: 50%;
    h2 {
      font-size: 3em;
      color: orange;
      width: 70%;
    }
    h3 {
      font-weight: 100;
      width: 70%;
    }
    p {
      font-size: 0.7em;
      color: grey;
      width: 70%;
    }
    button {
      &:hover {
        cursor: pointer;
      }
      width: 13rem;
      font-size: 1.7em;
      border-radius: 2%;
      box-shadow: 2px 1px 1px 1px black;
      border: none;
      background-color: darkred;
      padding: 2%;
    }
    background-color: white;
    @media(max-width: 610px) {
      justify-content: center;
      align-items: center;
      h2 {
        font-size: 7vw;

      }
      h3 {
        margin: 1em;
        font-size: 4vw;
      }
      button {
        margin-bottom: 1em;
        width: 40vw;
        font-size: 7vw;
      }
    }
 
  
    `
const ImageContainer = styled.div`
  position: absolute;
  z-index: 999;
  height: 700px;
  top: 2%;
  right: 0%;
  background-color: darkorange;
  width: 50%;
  border-top-left-radius: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    height: 800px;
  }
  @media(max-width: 600px) {
    height: 600px;
  }
  `

const ComponentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 500px;
  height: auto;
  :nth-child(2):not(h2) {
    background-color: orange;
  }
  :nth-child(3):not(p) {
    background-color: lightpink;
  }
  @media(max-width:1000px) {
    flex-direction: column;

  }


  `
const ComponentS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 25rem;
  width: 20rem;
  font-family: 'Montserrat';
  background-color: lightblue;
  border-radius: 5%;
  :first-child {
    font-size: 4rem;
  }
  h2 {
    text-align: center;
    font-size: 1.3rem;
  }
  p {
    height: 150px;
    text-align: center;
    padding: 1rem;
  }
  @media(max-width:1000px) {
    margin: 1rem;
  }
  @media(max-width: 350px) {
    height: 20rem;
    width: 15rem;
    :first-child {
      font-size: 3.2rem;
    }
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
   
    }
  }
  
  `
const Requirements = styled.div`
  height: auto;
  min-height: 800px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    max-height: 600px;
    height: 45vw;
    position: absolute;
    right: 0%;
    z-index: 1;
    border-top-left-radius: 50%;

  }
  @media(max-width: 860px) {
    img {
      display: none;
    }
  }

`
const Items = styled.div`
  display: grid;
  grid-template-columns: 150px 150px;
  gap: 100px;
  width: 500px;
  min-height: 500px;
  height: auto;
  justify-content: center;
  font-family: sans serif;
  position: relative;
  @media(max-width: 535px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
  }

  `
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  :first-child {
    font-size: 3rem;
  }
  p {
    line-height: 2em;
    font-size: 1em;
    width: 200px;
    height: 30px;
    font-family: 'Montserrat';
  }
  @media(max-width: 535px) {
    :first-child {
      font-size: 3.5rem;
      margin-bottom: 0.2em;
    }
    p {
      line-height: 1.5em;

    }
    
  }`
const Overlay = styled.div`
  background-color: orange;
  position: relative;
  max-height: 600px;
  height: 45vw;
  width: 400px;
  border-radius: 30px;
  @media(max-width: 860px) {

      display: none;

  }
  `
const Header = styled.div`
  height: 5px;
  padding-top: 50px;
  h2 {
    text-align: center;
    font-family: 'Montserrat';
  }
  @media(max-width: 500px) {
    h2 {
      font-size: 1.2em;
    }
    
  }
  `
const RecruitmentContainer = styled.div`
  min-height: 400px;
  height: a;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  background-color: beige;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Montserrat';
  p {
    width: 15rem;
    text-align: center;
  }
  @media(max-width:350px) {
    h2 {
      font-size: 1.2em;
    }
  }
  @media(max-width: 279px) {
    h2 {
      text-align: center;

    }
  }


`
const RecruitmentComponentContainer = styled.div`
  display: flex;
  @media(max-width: 900px) {
      display: none; 
  }
  
  `
const RecruitmentComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 20rem;
  :first-child {
    font-size: 1.6em;
  }`
const Circle = styled.div`
  padding: 2.5rem;
  border-radius: 100%;
  margin: 2.5rem;
  `
const SliderContainer = styled.div`
  display: none;
  @media (max-width: 900px) {
      display: block;
        width: 70%;
        margin-bottom: 2rem;
  }`
const SliderComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    width: 100%;
  }
  :first-child {
    height: 3rem;
  }
  `
export default BriefCourier
