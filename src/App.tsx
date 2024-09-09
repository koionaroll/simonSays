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
  const Button = styled.button<{isLit?:boolean;}>`
    background: transparent;
    border-radius: 1rem;
    border-width: 0.25rem;
    border-color: black;
    width: max;
    height: max;
    margin: 1rem;

    &:nth-child(2) {
      background: #214c7a;
      background : ${props => props.isLit === true? "#3171b5" : "#214c7a"};
      &:hover {
        cursor: pointer;
        background: #3171b5;
      }
    }
    &:nth-child(4) {
      background: #777a21;
      background : ${props => props.isLit === true? "#a6b531" : "#777a21"};
      &:hover {
        cursor: pointer;
        background: #a6b531;
      }
    }
    &:nth-child(6) {
      background: #7a2121;
      background : ${props => props.isLit === true? "#b53131" : "#7a2121"};
      &:hover {
        cursor: pointer;
        background: #b53131;
      }
    }
    &:nth-child(8) {
      background: #217a34;
      background : ${props => props.isLit === true? "#33b531" : "#217a34"};
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
  const [playerTurn, setPlayerTurn] = useState(false);
  const [round, setRound] = useState(0);
  const [randSeq, setRandSeq] = useState<number[]>([]);
  const [isLitOne, setIsLitOne] = useState(false);
  const [isLitTwo, setIsLitTwo] = useState(false);
  const [isLitThree, setIsLitThree] = useState(false);
  const [isLitFour, setIsLitFour] = useState(false);
  // const [playerSeq, setPlayerList] = useState<number[]>([]);


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
    console.log(randSeq);
    setSimonTurn(!simonTurn);
    setRound(round + 4);
  };

  useEffect(() => {
    if (simonTurn) {
      runSimonTurn(simonTurn, round);
    }
  }, [simonTurn, round]);

  useEffect(() => {
    if (playerTurn) {
      runPlayerTurn(playerTurn, round, runSimonTurn(simonTurn, round));
    }
  }, [playerTurn, round]);

  const runSimonTurn = (simonSTurn: boolean, r: number) => {
    const simonSeq = [];
    if (simonSTurn == true) {
      for(let i=0; i<r; i++){
        simonSeq.push(randSeq[i])
        setTimeout(() => {
          if (randSeq[i] === 1) {
            setIsLitOne(true);
            setTimeout(() => setIsLitOne(false), 500);  // Flash duration
          }
          if (randSeq[i] === 2) {
            setIsLitTwo(true);
            setTimeout(() => setIsLitTwo(false), 500);  // Flash duration
          }
          if (randSeq[i] === 3) {
            setIsLitThree(true);
            setTimeout(() => setIsLitThree(false), 500);  // Flash duration
          }
          if (randSeq[i] === 4) {
            setIsLitFour(true);
            setTimeout(() => setIsLitFour(false), 500);  // Flash duration
          }
        }, i * 1000); 
      }
    }
    setPlayerTurn(!playerTurn)
    console.log(simonSeq)
    return simonSeq
  };



  const runPlayerTurn = (playerTurn:boolean, r :number, s:number[])=>{
    if (playerTurn == true) {
    //   for(let i=0; i<r; i++){
        
    // }
  }
}



  const clickedOne = (i: number) => {
    return i
  };

  const clickedTwo = (i: number) => {
    setIsLitTwo((prevState) => !prevState);
    setTimeout(()=>(setIsLitTwo((prevState) => !prevState)),1000);
    return i
  };

  const clickedThree = (i: number) => {
    setIsLitThree((prevState) => !prevState);
    setTimeout(()=>(setIsLitThree((prevState) => !prevState)),1000);
    return i
  };

  const clickedFour = (i: number) => {
    setIsLitFour((prevState) => !prevState);
    setTimeout(()=>(setIsLitFour((prevState) => !prevState)),1000);
    return i
  };

  return (
    <>
      <Layout>
        <Title>Simon Says</Title>
        <Pad>
          <div>
            <p>Highscore: {highscore}</p>
          </div>
          <Button isLit={isLitOne} onClick={() => clickedOne(1)}>1</Button>
          <div></div>
          <Button isLit={isLitTwo} onClick={() => clickedTwo(2)}>2</Button>
          <Scoreboard>
            <p>Score: {score}</p>
            {hideStart && (
              <Start onClick={startGame}>{hideStart ? "Start" : ""}</Start>
            )}
          </Scoreboard>
          <Button isLit={isLitThree} onClick={() => clickedThree(3)}>3</Button>
          <div></div>
          <Button isLit={isLitFour} onClick={() => clickedFour(4)}>4</Button>
        </Pad>
        <Footer>By: Khoi</Footer>
      </Layout>
    </>
  );
}

export default App;
