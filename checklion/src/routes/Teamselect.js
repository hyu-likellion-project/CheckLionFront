import React, { useState,useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import Teamcard from '../components/Teamcard'
import styled from 'styled-components';
import api from '../api';
import '../App.css';

const InnerContainer = styled.div`
   width    : 100%;
   height   : 100%;
   display  : flex;
   justify-content: center;
   align-items: center;
`;

const CenterContainer = styled.div`
   width    : 70%;
   height   : 100%;
   
`;

const TitleContainer = styled.div`
   width    : 100%;
   display  : flex;
   justify-content: center;
   align-items: center;
   font-weight : bold;
   font-size : 1.2rem;
`;

const TeamContainer = styled.div`
   width    : 100%;
   height   : 40%;
   display  : flex;
   justify-content: center;
   align-items: center;
   margin-bottom : 15px;
`;









function Teamselect() {


  const [teamdata, setTeamdata] = useState([]);

  useEffect(() => {
    getTeams()
  }, [])

  const getTeams = async () => {
   const _results = await api.getAllTeams()
   setTeamdata(_results.data)
  }

  return (
    <div className="Teamselect">
      <Sidebar login={true} width={300} height={"100vh"} name="관리자">
        <InnerContainer>
          <CenterContainer>
          <TitleContainer>
             <h2>팀을 선택해주세요</h2>
          </TitleContainer>
          <TeamContainer>
            {
              teamdata.map((team, index)=>          
              index <3 ? <Teamcard id={team.id} name={team.name} />:""
              )
            }
          </TeamContainer>
          <TeamContainer>
          {
              teamdata.map((team, index)=>          
              index >2 ? <Teamcard id={team.id} name={team.name} />:""
              )
            }
          </TeamContainer> 
          </CenterContainer>
        </InnerContainer>
      </Sidebar>
    </div>
  );
}

export default Teamselect;
