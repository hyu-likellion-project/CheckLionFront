import React from "react";
import { Link } from 'react-router-dom';
import Background from "../components/Background";
import logo from '../logo.png';
import styled from 'styled-components';
import Ranking from '../components/Ranking';



const Title = styled.p`
  font-size: 2.3rem;
  z-index: 2;
  top: 4rem;
  left: 3rem;
  font-family: 'nexon-bold';
`;
const Logo = styled.img`
  display: inline-block;
  vertical-align: center;

  z-index: 4;
  margin-top: 1.7rem;
  margin-left: 2rem;
  width: 309px;
  height: 43px;
`;

const RankingContainer = styled.div`
  position: absolute;
  z-index: 3;
  top: 6.5rem;
  left: 6rem;

`;

const Button = styled.button`
  z-index: 2;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 20px;
  border: none;
  background: none;
  cursor: pointer;
  font-family: 'nexon-bold';
  &:hover {
    color: #ff9e1b;
  }
`;

function Home() {
  return (
    <div>
      Home
    </div>
  );
  
}

export default Home;