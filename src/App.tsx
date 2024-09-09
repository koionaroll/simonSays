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
  const Start = styled.h1`
    cursor: pointer;
  `;
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [hideStart, setHideStart] = useState(true);
  const [simonTurn, setSimonTurn] = useState(false);
  const [round, setRound] = useState(0);
  const [randSeq, setRandSeq] = useState<number[]>([]);

  useEffect(() => {
    const generateSeed = Array.from(
      { length: 100 },
      () => Math.floor(Math.random() * 4) + 1
    );
    setRandSeq(generateSeed);
  }, []);

  const startGame = () => {
    setHideStart(!hideStart);
    console.log(randSeq);
    setSimonTurn(!simonTurn);
    setRound(round + 1);
  };

  useEffect(() => {
    if (simonTurn) {
      runSimonTurn(simonTurn, round);
    }
  }, [simonTurn, round]);

  const runSimonTurn = (simonSTurn: boolean, r: number) => {
    if (simonSTurn == true) {
      for(let i=0; i<r; i++){

        console.log(randSeq[r]);
      }
    }
  };

  const clickedOne = (i: number) => {
    console.log(i);
  };

  const clickedTwo = (i: number) => {
    console.log(i);
  };

  const clickedThree = (i: number) => {
    console.log(i);
  };

  const clickedFour = (i: number) => {
    console.log(i);
  };

  return (
    <>
      <Layout>
        <Title>Simon Says</Title>
        <Pad>
          <div>
            <p>Highscore: {highscore}</p>
          </div>
          <Button onClick={() => clickedOne(1)}>1</Button>
          <div></div>
          <Button onClick={() => clickedTwo(2)}>2</Button>
          <Scoreboard>
            <p>Score: {score}</p>
            {hideStart && (
              <Start onClick={startGame}>{hideStart ? "Start" : ""}</Start>
            )}
          </Scoreboard>
          <Button onClick={() => clickedThree(3)}>3</Button>
          <div></div>
          <Button onClick={() => clickedFour(4)}>4</Button>
        </Pad>
        <Footer>By: Khoi</Footer>
      </Layout>
    </>
  );
}

export default App;
