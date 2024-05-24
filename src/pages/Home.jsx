import React from 'react'
import styled from 'styled-components'
import HowTo from '../components/HowTo'
import Download from '../components/Download'
import Brief from '../components/Brief'
import Blog from '../components/Blog'
function Home() {

  return (
    <>
   
    <MainContainer>
    <Auth>
        <button>
            Sign in
        </button>
        <button>
            Register
        </button>
    </Auth>
        <Overlay/>
        
        <HomeContent>
            
            <img src='https://assets-global.website-files.com/5c501ae6db60122ed1395b19/637625c473596011eaaf3229_FWB.gif' alt="" />
            <InputContainer>
            <input type="text" />
            <button>
                <h4>
                Search
                </h4>
                
            </button>
            </InputContainer>
        </HomeContent>
    </MainContainer>
    <HowTo/>
    <Download/>
    <Brief/>
    <Blog/>

    
    </>
    
  )
}


const MainContainer = styled.div`
    background-image: url("https://i.giphy.com/7kl4EOFp4N3dSeKW6f.webp");
    background-repeat:no-repeat;
    background-size: cover;
    padding: 5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    @media (max-width: 300px) {
        height: 300px;
    }
`
const InputContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    z-index: 0;
    @media (max-width:600px) {
        input {
            width: 50vw;
        }
    }
    input {
        z-index: 1;
        border-radius: 4%;
        border: none;
        font-size: 2rem;
        box-shadow: -2px -2px 6px rgba(0, 0, 0, 0.5),
                 2px 2px 6px rgba(0, 0, 0, 0.5);

        &:focus {
            height: 10vh;
            transform: scale(1.1);
            transition-property: transform;
            transition-duration: 1s;
            border-radius: 10%;
            box-shadow: -2px -2px 6px rgba(255, 165, 0, 0.9),
                 2px 2px 6px rgba(255, 165, 0, 0.9);
            outline: none;
            
        }
    }

    button {
        margin: 1rem;
        width: 10rem;
        height: 3rem;
        border: none;
        border-radius: 5%;
        background-color: orange;
        h4 {
            font-size: 1.2em;
        }

        &:hover {
            transition: transform 1s ease;
            transform: scale(1.2);
            box-shadow: -2px -2px 6px rgba(255, 165, 0, 0.9),
                 2px 2px 6px rgba(255, 165, 0, 0.9);
        }
    }`
const HomeContent = styled.div`
    border-radius: 5%;
    height: 400px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        position: relative;
        height: 80%;
        object-fit: cover;
        overflow-x: hidden;
    }
    @media (max-width:530px) {
        img {
            height: 60vw;
        }
        button {
            height: 2em;
            width: 6em;
            font-size: 0.7em;
        }
    }`


const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(169, 85, 0, 0.5); 
`;

const Auth = styled.div`
    display: flex;
    flex-direction: column;

    background: transparent;
    position: fixed;
    z-index: 1000;
    box-shadow: -2px -2px 6px rgba(0, 0, 0, 0.5),
                 2px 2px 6px rgba(0, 0, 0, 0.5);
    right: 0;
    flex-wrap: wrap;
    button {
        margin: 0.2em;
        overflow: hidden;
        border: none;
        font-size: 1em;
        padding: 0.5rem;
        width: 100px;
        &:first-child {
            background-color: orange;
        }
        &:nth-child(2) {
            background-color: darkred;
        }
    }`

export default Home
