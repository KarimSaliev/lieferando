import React from 'react'
import styled from 'styled-components'

function Blog() {
  return (
    <div>
      <BlogContainer>
        <Info>
            <h3>Check out exciting news about food and lifestyle on our blog.</h3>
            <a href="https://www.lieferando.de/foodwiki/"><button>Visit Our Blog</button></a>
        </Info>
        <img src="https://www.lieferando.de/consumer-web/images/blog.ecfe8be5.png" alt="" />
      </BlogContainer>
    </div>
  )
}
const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 200px;
    font-family: sans-serif;
    flex-wrap: wrap;
    button {
        font-family: sans-serif;
        height: 3rem;
        width: 8rem;
        border-radius: 40%;
        border: 1px grey solid;
        background: transparent;
        font-size: 0.8em;
        color: grey;
        &:hover {
            color: black;
            transform: scale(1.2);
            box-shadow: -2px -2px 6px orange,
                 2px 2px 6px orange;
            transition: transform 0.3s ease;
        }

    }
    h3 {
        color: darkblue;
        line-height: 2.5em;
    }

  `
const BlogContainer = styled.div`
    padding-top: 5rem;
    display: flex;
    justify-content: space-evenly;
    width: 100vw;
    height: 400px;
    img {
        height: 80%;
    }
    @media(max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-top: 0;

        h3 {
            font-size: 0.9rem;
        }
        img {
            height: 40%;
        }
        button {
            height: 3rem;
            width: 6rem;
            font-size: 0.8em;
            margin-top: 2rem;
        }

    

    }`
export default Blog
