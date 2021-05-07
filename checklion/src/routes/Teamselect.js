import React from "react";
import Sidebar from '../components/Sidebar'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


const InnerContainer = styled.div`
   border   : 1px solid black;
   width    : 100%;
   height   : 100%;
   display  : flex;
   justify-content: center;
   align-items: center;
`;

const CenterContainer = styled.div`
   border   : 1px solid black;
   width    : 70%;
   height   : 80%;
   
`;

const WeekContainer = styled.div`
   border   : 1px solid black;
   width    : 100%;
   height   : 20%;
   display  : flex;
   justify-content: center;
   align-items: center;
`;

const TeamContainer = styled.div`
   border   : 1px solid black;
   width    : 100%;
   height   : 35%;
   display  : flex;
`;







function Teamselect() {
  return (
    <div className="Teamselect">
      <Sidebar login={false} width={300} height={"100vh"}>
        <InnerContainer>
          <CenterContainer>
          <WeekContainer>       
          </WeekContainer>
          <TeamContainer>
            </TeamContainer>
            <TeamContainer>
            </TeamContainer> 
          </CenterContainer>
        </InnerContainer>
      </Sidebar>
    </div>
  );
}

export default Teamselect;
