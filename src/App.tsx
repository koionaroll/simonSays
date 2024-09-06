import "./App.css";
import styled from "styled-components";
import { useEffect, useState } from "react";

function App() {
  const Layout = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
  `;
  const Title = styled.h1`
    margin: 2rem;
    font-size: 3rem;
  `;
  const Scoreboard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const Pad = styled.h1`
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: repeat(3, 33.33%);
    height: 50rem;
    width: 50rem;
  `;
  const Footer = styled.h1`
    display: flex;
    justify-content: left;
    margin: 1rem;
  `;
  const Button = styled.button`
    background: transparent;
    border-radius: 1rem;
    border-width: 0.25rem;
    border-color: black;
    width: max;
    height: max;
    margin: 1rem;

    &:nth-child(2) {
      background: #214c7a;
      &:hover {
        cursor: pointer;
        background: #3171b5;
      }
    }
    &:nth-child(4) {
      background: #777a21;
      &:hover {
        cursor: pointer;
        background: #a6b531;
      }
    }
    &:nth-child(6) {
      background: #7a2121;
      &:hover {
        cursor: pointer;
        background: #b53131;
      }
    }
    &:nth-child(8) {
      background: #217a34;
      &:hover {
        cursor: pointer;
        background: #33b531;
      }
    }



  `;

const [score, setScore] = useState(0)
const [highscore, setHighscore] = useState(0)

const clicked=() =>{
  setScore(score+1)
} 
  



  return (
    <>
      <Layout>
        <Title>Simon Says</Title>
        <Pad>
          <div></div>
          <Button onClick={clicked}>1</Button>
          <div></div>
          <Button>2</Button>
          <Scoreboard>
            <p>Score: {score}</p>
            <p>Highscore: {highscore}</p>
          </Scoreboard>
          <Button>3</Button>
          <div></div>
          <Button>4</Button>
        </Pad>
        <Footer>By: Khoi</Footer>
      </Layout>
    </>
  );
}

export default App;
