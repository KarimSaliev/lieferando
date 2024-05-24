import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
function Testimonials() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <TestimonialsContainer>
        <h3>Testimonials</h3>
        <Slider {...settings}>
            <>
            <SliderComponent>
            <Overlay>
            <FontAwesomeIcon icon={faBicycle}/>
                <img src="https://thumbor.takeaway-recruitment-api.k.elnino-production.com/F-nd1vVgPSqkkOUttJgCFW_4ruo=/600x600/smart/https%3A%2F%2Ftakeaway-recruitment-api.k.elnino-production.com%2Fstorage%2Favatars%2F2yLeqfVrbJppjRKpejWhkfKiuvJO7VhjrQ8uCefj.jpeg" alt="" />
                </Overlay>
            <TextWrapper>
            <p>I like the access to fresh air and sportiness of the job. It's the ideal combination of keeping fit and earning money!</p>
            <p>Fabian</p>
            </TextWrapper>
            
        </SliderComponent>
            </>
            <>
            <SliderComponent>
                <Overlay>
                    <FontAwesomeIcon icon={faBicycle}/>
                <img src="https://thumbor.takeaway-recruitment-api.k.elnino-production.com/F-nd1vVgPSqkkOUttJgCFW_4ruo=/600x600/smart/https%3A%2F%2Ftakeaway-recruitment-api.k.elnino-production.com%2Fstorage%2Favatars%2F2yLeqfVrbJppjRKpejWhkfKiuvJO7VhjrQ8uCefj.jpeg" alt="" />
                </Overlay>

            <TextWrapper>
            <p>I like the access to fresh air and sportiness of the job. It's the ideal combination of keeping fit and earning money!</p>
            <p>Fabian</p>
            </TextWrapper>   
        </SliderComponent>
            </>

       
        
        </Slider>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    min-height: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
    padding: 1.5rem;
    h3 {
        text-align: center;
        font-size: 2em;
        font-family: 'Montserrat';
    }
    @media(max-width: 330px ) {
        h3 {
            font-size: 8vw;
        }
    }`
const SliderComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        height: 100%;
        width: 100%;
        border-top-left-radius: 200px;
    }
    p {
        width: 400px;
        font-family: 'Montserrat';
        text-align: center;
    }
    @media(max-width: 820px) {
        flex-direction: column;
        p {
            width: 300px;
            font-size: 0.8em;
        }
    }
    @media(max-width: 330px) {
        p {
            width: 200px;
        }
    }
    @media(max-width: 400px) {
        img {
            border-top-left-radius: 150px;
        }
    }
    @media(max-width: 300px) {
        img {
            border-top-left-radius: 100px;
        }
    }

    `
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
`
const Overlay = styled.div`
    background-color: orange;
    margin: 1.5rem;
    height: 400px;
    width: 400px;
    :first-child {
        position: absolute;
        font-size: 3rem;
        margin-left: 0.2%;
        color: white;
    }
    @media(max-width: 820px) {
        height: 300px;
        width: 300px;
        :first-child {
            font-size: 2.5rem;
        }
    }
    @media(max-width: 400px) {
        height: 200px;
        width: 200px;
        :first-child {
            font-size: 2rem;
        }
    }
    @media(max-width: 300px) {
        height: 150px;
        width: 150px;
        :first-child {
            font-size: 1.5rem;
        }
    }
    `
