import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBuilding, faCar, faBagShopping, faHeart, faGift, faStamp,
faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const [active, setActive] = useState(false);
    const toggleAction =()=>{
        setActive(!active);
    }
    const [textHighlight, setHighlight] = useState('');
    const navigate = useNavigate();
    const handleNav = (e) =>{
        e.preventDefault();
        navigate(`/${e.currentTarget.id}`)
        active? setActive(!active): '';
        setSelected(e.currentTarget.getAttribute('data-index'));
    }
    const [selected, setSelected] = useState(null);
    const navItems = [{icon: faBuilding, id: 'business', text: 'Lieferando for business'},
    {icon: faCar, id: 'courier', text: 'Become a courier'},
    {icon: faBagShopping, id: 'orders', text: 'Orders'},
    {icon: faHeart, id: 'favourites', text: 'Favourites', },
    {icon: faQuestionCircle, id: 'question', text: 'Need Help?'},
    {icon: faStamp, id: 'stampcards', text: 'Stamp Cards'},
    {icon: faGift, id: 'Gift Cards', text: 'Gift Cards', }
]
    return (
        
            <NavbarContainer className = {active? 'active':''}>
                 
                <ul className = {active? 'active': ''}>
                    <li>
                        <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon>
                    </li>
                    {navItems.map((item, index)=>(
                        <li key={index} id={item.id} data-index={index} onClick={handleNav} style={{
                            color: selected === String(index) ? 'yellow' : '',
                            textShadow: selected === String(index) ? '#fc0 1px 0 10px' : '',
                        }}><FontAwesomeIcon icon={item.icon}/> {item.text}</li>
                    ))}
                 
                </ul>
                <Hamburger onClick = {toggleAction} className = {active? 'active' : ''}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Hamburger>
            </NavbarContainer>
        
    );
}


const NavbarContainer = styled.div`
    position: fixed;
    z-index: 1000;
    width: 100vw;
    background-color: orange;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x:hidden;
    height: auto;
    min-height: 70px;
    max-height: 600px;
    &.active {
        justify-content: center;
        align-items: flex-start;
        overflow-y: auto;
        ul {
            display: block;
            font-size: 2rem;
            text-align: center;
            :first-child {
                :first-child{
                position: absolute;
                left: 0;
                font-size: 0.5em;
                padding-left: 15px;
                }
               
            }
        }
        @media (max-width: 500px) {
            ul {
                font-size: 1.2rem;
            }

        }
        li {
            width: 100%;
            
         
        }
    }

    ul {
        display: flex;
        list-style: none;
        padding-left: 0;
        align-items: center;
        @media (max-width: 1280px) {
            :not(:first-child) {
                opacity: 0;
            }
            
        }

        &.active {
            padding-top: 30px;
            line-height: 3em;
            :not(:first-child) {
                opacity: 1;
        }
    }

    li {
        margin-right: 5rem;
        &:not(:first-child):hover {
            color: yellow;
            transition: transform 0.5s ease;
            transform: scale(1.2);
            text-shadow: #fc0 1px 0 10px;
            cursor: pointer
        }
        &:first-child {
            font-size: 3em;
            padding-left: 2rem;
            @media(max-width:330px) {
                font-size: 2.2em;
            }
          
            
        }

           
        }
    }
`;

const Hamburger = styled.div`
    margin-right: 1rem;
    width: 1rem;
    height: 70%;
    display: flex;
    justify-content: space-around;
    flex-direction: column; 
    z-index: 10;
    display: none;
    margin-top: 1rem;
    position: absolute;
    right: 0;
    padding-right: 3rem;

    @media (max-width: 1280px) {
        @media(max-width: 330px) {
            padding-right: 2em;
            div {
                &:nth-child(1) {
                    width: 1.5rem;
                }
                &:nth-child(2) {
                    width: 1.5rem;

                }
                &:nth-child(3) {
                    width: 1.5rem;
                }
            }
        }
        display: block;
        &.active {
            height: 20%;
           div {
            &:nth-child(1) {
                transform: translateY(8px) rotate(33deg);
                position: relative;
                width: 2.1rem;

            }
            &:nth-child(2) {
                opacity: 0;
            }
            &:nth-child(3) {
                position: absolute;
                transform: translateY(-8px) rotate(-33deg);
                width: 2.1rem;
            }
            @media (max-width:350px) {
                &:nth-child(1) {
                    width: 1.5rem;
                    transform: translateY(8px) rotate(50deg);
                }

                &:nth-child(3) {
                    width: 1.5rem;
                    transform: translateY(-8px) rotate(-50deg);
                }
            }
            
            
           }
        }
    }
   
    div {
        width: 2rem; 
        height: 0.25rem;
        border-radius: 10px;
        background-color: white;
        transform-origin: 1px;
        transition: all 0.3s linear;
        margin: 0.5rem;
    }
    &:hover {
        transition: transform 0.3s ease;
        cursor: pointer;
    }
`;

export default Navbar;
