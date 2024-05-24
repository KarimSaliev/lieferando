import React, {useState} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
function FaqList(props) {
    const [active, setActive] = useState(false)

  return (
    <>
    <MainBlock onClick ={()=>{setActive(!active)}}>
    <FontAwesomeIcon icon={faPlus}/>
        <p className = {active? 'active':''}>{props.text}</p>
        
    </MainBlock>
    <SubBlock className={active? 'active': ''}>
        <p>{props.subtext}</p>

       {props.list? props.list.map((item,index)=>
       {
        return(
            <ul>
                <li>
                {item}
                </li>
               
            </ul>
        )
       }): ''}
    </SubBlock>
    </>
    
   
  )
}

export default FaqList

const MainBlock = styled.div`
    background-color: white;
    outline: none;
    border: 2px solid orange;
    width: 90vw;
    height: 30px;
    padding: 0.5rem;
    margin: 0.3rem;
    position: relative;
    display: flex;
    font-family: 'Montserrat';
    justify-content: space-between;
    align-items: center;
    p {
        width: 90%;
        font-size: 1.2em;
        &.active {
            color: orange;
            font-weight: bold;
        }
    }
    @media(max-width: 740px) {
        p {
            font-size: 2.5vw;
        }
        height: 20px;

    }
    :first-child {
        position: absolute;
        right: 1%;
        color: orange;
        &:hover {
            transition: transform 0.3s ease;
            transform: scale(1.2)
        }
    }`
const SubBlock = styled.div`
    border: 1px solid orange;
    background-color: white;
    font-family: 'Montserrat';
    outline: none;
    display: none;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    font-size: 0.8em;
    &.active {
        display: flex;
    }
    p {
        margin-left: 0.5em;
    }
    @media(max-width: 740px) {
        p,li {
            font-size: 2.4vw;
        }    
    }
    width: 90vw;
    min-height: 25px;
    height: auto;
    padding: 0.2rem;
    margin: 0.1rem;`
