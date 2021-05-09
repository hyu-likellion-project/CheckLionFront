import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import api from '../api';




const Container = styled.div`
   width: 100%;
   height: 25%;
   display : flex;

`;

const InnerStatus = styled.div`
    width: 20%;
    height: 100%;
    display : flex;
    justify-content: center;
    align-items : center;
`;

const CircleDiv = styled.span`
    width: 40%;
    height: 70%;
    border-radius : 50%;
    background-color : #ececec;
    display : flex;
    justify-content: center;
    align-items : center;
`;







function Status({name, id, week}) {

  const [statusdata, setstatusdata] = useState([]);

  useEffect( async () => {
    getStatus()
  }, [])


  const getStatus = async () => {
    const status = await api.getStatus(id,1)
    setfirstToggle(status.data.assignment)
    setsecondToggle(status.data.assignment)
    setthirdToggle(status.data.assignment)
    setstatusdata(status.data)
   }

  const [firstToggle, setfirstToggle] = useState();
  const [secondToggle, setsecondToggle] = useState(true);
  const [thirdToggle, setthirdToggle] = useState(true);
  

  

  

  return (
    <Container>
      <InnerStatus>
          <CircleDiv>
             <FontAwesomeIcon color="#555555" size="2x" icon={faUserAlt} />
          </CircleDiv> 
      </InnerStatus>
      <InnerStatus>
          <h3>{name}</h3>
      </InnerStatus>
      <InnerStatus>
        <FontAwesomeIcon color="#FF9E1B" size="3x" icon={ firstToggle ? faToggleOn :faToggleOff} 
        onClick={() => setfirstToggle(!firstToggle)}
        />
      </InnerStatus>
      <InnerStatus>
      <FontAwesomeIcon color="#FF9E1B" size="3x" icon={ secondToggle ? faToggleOn :faToggleOff} 
        onClick={() => setsecondToggle(!secondToggle)}
      />
      </InnerStatus>
      <InnerStatus>
      <FontAwesomeIcon color="#FF9E1B" size="3x" icon={ thirdToggle ? faToggleOn :faToggleOff} 
        onClick={() => setthirdToggle(!thirdToggle)}
      />
      </InnerStatus>
    </Container>  
  );
}

export default Status;
