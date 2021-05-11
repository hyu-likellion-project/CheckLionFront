import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import RankingItem from '../components/RankingItem';
import api from '../api';

const Title = styled.p`
  font-size: 1.85rem;
  z-index: 2;
  margin-bottom: 40px;
  font-family: 'nexon-bold';
`;

const Container = styled.div`
  margin-top: 2rem;
  margin-left: 9rem;
`;


const RankingContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  opacity: 0.85;
  width: 700px;
  height: 580px;
  border: 1px solid #ECECEC;
`;



function Home() {

  const [teamdata, setTeamdata] = useState([]);

  useEffect(() => {
    getTeams()
  }, [])

  const getTeams = async () => {
   const _results = await api.getAllTeams()
   setTeamdata(_results.data)
  }

  return (
    <div>
      <Sidebar login={true} width={300} height={"100vh"} name="관리자">
      <Container>
        <Title>Ranking</Title>
        <RankingContainer>
          <RankingItem rank={'순위'} name={"팀명"} score={"점수"}></RankingItem>
          <hr style={{width: '600px'}}></hr>
          {
              teamdata.map((team, index)=>          
              <RankingItem rank={index+1} name={team.name} score={team.totalScore}/>
              )
            }
        </RankingContainer>
      </Container> 
      </Sidebar>
    </div>
  );
  
}

export default Home;