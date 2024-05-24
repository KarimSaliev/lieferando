import React, {useState} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUtensils, faHouse} from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'
function Help() {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `https://www.lieferando.de/en/customerservice/search?query=${value}`;
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <HelpContainer>
        <UpperContainer>
            <UpperCard>
                <h3>Can we help with an order?</h3>
                <p>Sign in for your order status, delivery time or if you need a hand with anything.</p>
                <button>
                    Sign in
                </button>
            </UpperCard>
        
            <UpperCard>
                <h3>Find my order</h3>
                <p>Enter your order details to get help on an order.</p>
                <InputBox>
                <input type="text" placeholder='Order number'/>
                <input type="text" placeholder='Email address' />
                </InputBox>
                <button style={{backgroundColor:'grey', borderRadius:'30px',}}>
                    Find my order
                </button>
            </UpperCard>
        </UpperContainer>
        <FormContainer>
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder='Serch help articles' value={value} onChange={handleChange}/>
                <FontAwesomeIcon icon={faSearch}/>
            </form>
        </FormContainer>
        <TopicsContainer>
            <h2>Browse all topics</h2>
            <TopicCard>
            <FontAwesomeIcon icon={faUtensils}/>
                <h3>General</h3>
                <p>Ratings and reviews</p>
                <p>Feedback</p>
                <p>Show more</p>
            </TopicCard>
            <TopicCard>
            <FontAwesomeIcon icon={faUtensils}/>
                <h3>General</h3>
                <p>Ratings and reviews</p>
                <p>Feedback</p>
                <p>Show more</p>
            </TopicCard>
            <TopicCard>
            <FontAwesomeIcon icon={faUtensils}/>
                <h3>General</h3>
                <p>Ratings and reviews</p>
                <p>Feedback</p>
                <p>Show more</p>
            </TopicCard>
            <TopicCard>
            <FontAwesomeIcon icon={faUtensils}/>
                <h3>General</h3>
                <p>Ratings and reviews</p>
                <p>Feedback</p>
                <p>Show more</p>
            </TopicCard>
            <TopicCard>
            <FontAwesomeIcon icon={faUtensils}/>
                <h3>General</h3>
                <p>Ratings and reviews</p>
                <p>Feedback</p>
                <p>Show more</p>
            </TopicCard>
            <TopicCard>
            <FontAwesomeIcon icon={faUtensils}/>
                <h3>General</h3>
                <p>Ratings and reviews</p>
                <p>Feedback</p>
                <p>Show more</p>
            </TopicCard>
          
        </TopicsContainer>
        <SliderContainer>
        <h2>Browse all topics</h2>
            <Slider {...settings}>
                <>
           
                <TopicCard>
            <FontAwesomeIcon icon={faUtensils}/>
                <h3>General</h3>
                <p>Ratings and reviews</p>
                <p>Feedback</p>
                <p>Show more</p>
            </TopicCard>
         
                </>
                <>
        
                <TopicCard>
            <FontAwesomeIcon icon={faUtensils}/>
                <h3>General</h3>
                <p>Ratings and reviews</p>
                <p>Feedback</p>
                <p>Show more</p>
            </TopicCard>
              
                </>
            </Slider>
        </SliderContainer>
        <OwnerContainer>
            <h3>Are you a restaurant owner?</h3>
            <p>Please visit our dedicated support page with questions and answers for restaurant owners.</p>
            <button> <FontAwesomeIcon icon={faHouse}/>Support for restaurant owners</button>
        </OwnerContainer>
    </HelpContainer>
)}

export default Help

const HelpContainer = styled.div`
    height: auto;
    
    `
const UpperContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-height: 400px;
    height: auto;
    padding: 2rem;
    @media (max-width: 730px) {
        flex-direction: column; 
        
    }
    `

const UpperCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 0.5px solid grey;
    border-radius: 5%;
    padding: 2.5rem;
    margin: 1rem;
    min-width: 200px;
    width: 30vw;
    height: 200px;
    h3,p {
        text-align: flex-start;
        font-family: 'Montserrat';
    }
    p {
        width: 300px;
        
    }
    button {
        font-family: 'Montserrat';
        padding: 1rem;
        border-radius: 30px;
        background-color: orange;
        border: none;
        font-size: 1em;
        margin-top: 1rem;
        font-weight: bold;
        &:hover {
            cursor: pointer;
            box-shadow: 1px 1px 1px black;
        }
    }
    input {
        height: 2rem;
        width: 13.5vw;
        border-radius: 5%;
        border:none;
        outline: 1px solid grey;
        font-family: 'Montserrat';
        padding: 0.5rem;
        font-size: 1em;

    }
    align-items: flex-start;
    justify-content: space-evenly;
    @media (max-width:900px) {
        p {
            width: 30vw;
        }
        input {
            font-size: 0.7em;
        }
    }
    @media (max-width: 730px) {
        border: none;
        width: 90vw;
        align-items: center;
        justify-content: center;
        p,h3 {
            width: 100%;
            font-size: 1.3em;
            text-align: center;
        }
        button {
            width: 50%;
            font-size: 1.3em;
        }
        input {
            width: 30%;
            font-size: 1.2em;
        }
    }
    @media (max-width: 530px) {
        input {
            font-size: 0.8em;
        }
    }
    @media (max-width: 344px) {
        h3,p, button {
            font-size: 1em;
        }
        
    }
    `

const InputBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    @media (max-width: 730px) {
        padding: 1rem;
    }`

const FormContainer = styled.div`
    min-height: 100px;
    width: 100%;
    background-color: beige;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    input {
        width: 80vw;
        height: 40px;
        border: 1px grey solid;
        border-radius: 30px;
        padding: 0.5rem;
        font-size: 1em;
        font-family: 'Montserrat';
        padding-left: 3rem;
        outline: none;
        &:focus {
            box-shadow:  0 0 9px #fc0;
            transition: 0.5s all ease;
        }
    }
    :nth-child(2) {
        position: absolute;
        left: 8%;
        top: 43%;
    }
    @media(max-width:730px) {
        :nth-child(2) {
            left: 14%;       
        }
        input {
            width: 65vw;
            font-size: 0.8em;
        }
    }
    @media(max-width: 300px) {
        :nth-child(2) {
            font-size: 0.8em;
            top: 45%;
        }
        input {
            height: 30px;
            width: 56vw;
        }
    }`

const TopicsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    min-height: 400px;
    gap: 20px;
    position: relative;
    font-family: 'Montserrat';
    padding: 5rem;
    height: auto;
    h2 {
        position: absolute;
        top: 1%;
        margin-left: 5rem;
    }
    @media (max-width: 630px) {
        display: none;
    }`

const TopicCard = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        box-shadow: 3px 3px 10px 2px rgb(0,0,0,0.1);
        * {
            padding-left: 3rem;
        }
        :first-child {
            position: absolute;
            font-size: 2em;
            top: 5%;
            left: -10%;
        }
        @media(max-width:1432px) {
            :first-child {
                left: -5%;
            }
        }
        justify-content: space-evenly;
        height: 250px;
        width: 90%;
        border-radius: 20px;
        padding: 1rem;
        h3 {
            font-size: 1.5em;
        }
 
        @media (max-width: 630px) {
            align-items: center;
            padding: 0;
            width: 100%;
            box-shadow: none;
            
            :first-child {
                position: relative;
                left: 0;
                right:0;
                
                
            }
            * {
                padding-left: 0;
            }
            background-color: beige;
            
    }
`
const OwnerContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-top: 0.5px solid grey;
        position: relative;
        height: 80px;
        justify-content: center;
        * {font-family: 'Montserrat'};
        h3 {
            font-size: 1.2em;
        }
        padding: 1.5rem 0 1.5rem 5rem;
        :nth-child(3) {
            position: absolute;
            right: 3%;
            border: 1px solid grey;
            border-radius: 30px;
            background-color: white;
            color: grey;
            box-shadow: 1px 1px 5px grey;
            padding: 1.2rem;
            font-size: 1em;
            :first-child {
                margin-right: 0.5rem;
            }
            &:hover {
                cursor: pointer;
            }
            
        }
        p {
            width: 50%;
        }
        @media(max-width:800px) {
            :nth-child(3) {
             
                position: relative;
           
            }
            height: 300px;
            align-items: center;
            justify-content: space-evenly;
            padding-left: 0;
            h3 {
                font-size: 2em;
            }
            p {
                font-size: 1.2em;
                width: 80%;
                text-align: center;
            }
        }
        @media(max-width:510px) {
            h3 {
                font-size: 1.5em;

            }
        
        }
        @media(max-width:400px) {
            h3 {
                font-size: 1.3em;

            }
            :nth-child(3) {
                font-size: 0.7em;
            }
        
        }
        @media(max-width:342px) {
            h3 {
                font-size: 5vw;
            }
            p {
                font-size: 4vw;
            }
          
        }
      
        
`
const SliderContainer = styled.div`
    display: none;
    height: auto;
    background-color: #dbdada;
    :first-child {
        text-align: center;
        margin-bottom: 1rem;
    }
    @media (max-width: 630px) {
        display: block;
        padding: 2rem;
        
    }`
