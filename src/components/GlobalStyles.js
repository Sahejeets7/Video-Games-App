import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
    background: white;
  }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
    font-family: "Montserrat", sans-serif;
    }
    .loader{
        background: #ffffffb8;
        height: 100vh;
        position: fixed;
        left: 0;
        top:0;
        z-index: 9999;
        width: 100%;
        p {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, 0);
            color: black;
        }
        @keyframes spinner {
            0% {
              transform: translate3d(-50%, -50%, 0) rotate(0deg);
            }
            100% {
              transform: translate3d(-50%, -50%, 0) rotate(360deg);
            }
          }
        .spin::before{
            animation: 1.5s linear infinite spinner;
            animation-play-state: inherit;
            border: solid 5px #cfd0d1;
            border-bottom-color: #1c87c9;
            border-radius: 50%;
            content: "";
            height: 40px;
            position: fixed;
            top: 60%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            width: 40px;
            will-change: transform;
        }
    }
`;

export default GlobalStyles;
