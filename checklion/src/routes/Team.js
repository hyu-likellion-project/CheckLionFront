import React, { useState,useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import Status from '../components/Status'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft,faUserAlt, faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
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
   border   : 2px solid #ECECEC;
   border-radius : 20px;
   display  : flex;
   flex-direction : column;
`;

const TitleContainer = styled.div`
    width    : 100%;
    height   : 10%;
    display  : flex;
    flex-direction : column;
    justify-content: center;
    align-items : center;
`;

const WeekContainer = styled.div`
    width    : 100%;
    height   : 10%;
    display  : flex;
    justify-content: center;
    align-items : center;
`;

const WeekSpan = styled.span`
    margin-left : 50px;
    margin-right : 50px;
`;

const StatusWrapper = styled.div`
    width    : 100%;
    height   : 80%;
    display  : flex;
    flex-direction : column;
    justify-content: center;
    align-items : center;
`;




const StatusContainer = styled.div`
    width    : 90%;
    height   : 70%;
    display  : flex;
`;

const LeftStatusContainer = styled.div`
    width    : 84%;
    height   : 100%;
    display  : flex;
    flex-direction : column;
`;

const RightStatusContainer = styled.div`
    width    : 16%;
    height   : 100%;
    display  : flex;
    flex-direction : column;
`;

const TableHeaderContainer = styled.div`
    width    : 100%;
    height   : 20%;
    display  : flex;
    justify-content: flex-end;
`;

const RightTableHeaderContainer = styled.div`
    width    : 100%;
    height   : 20%;
    display  : flex;
    justify-content: center;
    align-items : center;
`;

const AdditionPointContainer = styled.div`
    width    : 100%;
    height   : 80%;
    display  : flex;
    justify-content: center;
    align-items : center;
`;



const TableHeader = styled.span`
    width    : 20%;
    height   : 100%;
    display  : flex;
    justify-content: center;
    align-items : center;
`;

const Button = styled.button`
    background-color: white;
    border: 2px solid #e7e7e7; /* Green */
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius : 12px;
  `;

  const SubmitContainer = styled.div`
  width    : 100%;
  display  : flex;
  justify-content: center;
  align-items : center;
  margin-bottom : 20px;
`;

const SubmitButton = styled.button`
    background-color: #555555;
    border: 2px solid #e7e7e7;
    color: white;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius : 12px;
  `;

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


function Team({match}) {

  const [week, setweek] = useState(1);
  const [teamname, setteamname] = useState("");
  const [weekdata, setweekdata] = useState([]);
  const [studentnames, setstudentnames ] = useState([]);
  const [statusdata, setstatusdata] = useState([]);
  const [firststatus, setfirststatus] = useState([]);
  const [secondstatus, setsecondstatus] = useState([]);
  const [thirdstatus, setthirdstatus] = useState([]);
  const [teampoint, setteampoint] = useState([]);

  useEffect( () => {
    getTeam()
    getStudentNames()
  }, [])

  useEffect( () => {
    getWeek();
    getStudentStatus();
    getTeamPoint();
  }, [week])

  const getTeam = async () => {
    const {data: { name } }
     = await api.getTeam(match.params.id)
    setteamname(name)
  }


  const getStudentNames = async () => {
    const result = await api.getStudents(match.params.id)
    const studentnames = result.map((student)=>student.user_name)
    setstudentnames(studentnames)
  }

  const getWeek = async () => {
    const _results = await api.getWeek(week)
   setweekdata(_results.data)
  }

  const getTeamPoint = async () => {
   const _results = await api.getTeamPoint(match.params.id,week);
   setteampoint(_results);
  }

  const getStudentStatus = async () => {
    const result = await api.getStudents(match.params.id)
    const studentids = result.map((student)=>student.id)
    let statuss = []
    for( let index in studentids){
      const statusresult = await api.getStatus(studentids[index],week)
      statuss.push(statusresult)
    }
    setstatusdata(statuss)
    setfirststatus(statuss[0])
    setsecondstatus(statuss[1])
    setthirdstatus(statuss[2])
   }



  const previousWeek = async () => {
    if (week > 0) {
     setweek(week-1)
    }
   }

   const nextWeek = async () => {
    if (week < 8) {
     setweek(week+1)
    }
   }



  return (
    <div className="Team">
      <Sidebar login={true} width={300} height={"100vh"} name="관리자">
        <InnerContainer>
          <CenterContainer>
              <TitleContainer>
                <h1>{teamname}</h1>
              </TitleContainer>
              <WeekContainer>
                <FontAwesomeIcon size="2x" icon={ faChevronLeft }
                  onClick={() => previousWeek()}
                />
                <WeekSpan><h2>{"Week " + weekdata.weeknumber + " : " + weekdata.info}</h2></WeekSpan>
                <FontAwesomeIcon size="2x" icon={ faChevronRight } 
                   onClick={() => nextWeek()}
                />
              </WeekContainer>
              <StatusWrapper>
                <StatusContainer>
                  <LeftStatusContainer>
                    <TableHeaderContainer>
                      <TableHeader><h3>과제</h3></TableHeader>
                      <TableHeader><h3>출석</h3></TableHeader>
                      <TableHeader><h3>강의</h3></TableHeader>
                    </TableHeaderContainer>  

    <Container>
      <InnerStatus>
          <CircleDiv>
             <FontAwesomeIcon color="#555555" size="2x" icon={faUserAlt} />
          </CircleDiv> 
      </InnerStatus>
      <InnerStatus>
          <h3>{studentnames[0]}</h3>
      </InnerStatus>
      <InnerStatus>
        <FontAwesomeIcon color="#FF9E1B" size="3x" icon={ firststatus.assignment ? faToggleOn :faToggleOff} 
        onClick={() => setfirststatus({
          ...firststatus,
          assignment : !firststatus.assignment
        })}
        />
      </InnerStatus>
      <InnerStatus>
      <FontAwesomeIcon color="#FF9E1B" size="3x" icon={ firststatus.attendance ? faToggleOn :faToggleOff} 
        onClick={() => setfirststatus({
        ...firststatus,
        attendance : !firststatus.attendance
      })}
      />
      </InnerStatus>
      <InnerStatus>
      <FontAwesomeIcon color="#FF9E1B" size="3x" icon={ firststatus.lecture ? faToggleOn :faToggleOff} 
      onClick={() => setfirststatus({
        ...firststatus,
        lecture : !firststatus.lecture
      })}
      />
      </InnerStatus>
    </Container>

    <Container>
      <InnerStatus>
          <CircleDiv>
             <FontAwesomeIcon color="#555555" size="2x" icon={faUserAlt} />
          </CircleDiv> 
      </InnerStatus>
      <InnerStatus>
          <h3>{studentnames[1]}</h3>
      </InnerStatus>
      <InnerStatus>
        <FontAwesomeIcon color="#FF9E1B" size="3x" icon={ secondstatus.assignment ? faToggleOn :faToggleOff} 
        onClick={() => setsecondstatus({
          ...secondstatus,
          assignment : !secondstatus.assignment
        })}
        />
      </InnerStatus>
      <InnerStatus>
      <FontAwesomeIcon color="#FF9E1B" size="3x" icon={ secondstatus.attendance ? faToggleOn :faToggleOff} 
        onClick={() => setsecondstatus({
        ...secondstatus,
        attendance : !secondstatus.attendance
      })}
      />
      </InnerStatus>
      <InnerStatus>
      <FontAwesomeIcon color="#FF9E1B" size="3x" icon={ secondstatus.lecture ? faToggleOn :faToggleOff} 
      onClick={() => setsecondstatus({
        ...secondstatus,
        lecture : !secondstatus.lecture
      })}
      />
      </InnerStatus>
    </Container>

    <Container>
      <InnerStatus>
          <CircleDiv>
             <FontAwesomeIcon color="#555555" size="2x" icon={faUserAlt} />
          </CircleDiv> 
      </InnerStatus>
      <InnerStatus>
          <h3>{studentnames[2]}</h3>
      </InnerStatus>
      <InnerStatus>
        <FontAwesomeIcon color="#FF9E1B" size="3x" icon={ thirdstatus.assignment ? faToggleOn :faToggleOff} 
        onClick={() => setthirdstatus({
          ...thirdstatus,
          assignment : !thirdstatus.assignment
        })}
        />
      </InnerStatus>
      <InnerStatus>
      <FontAwesomeIcon color="#FF9E1B" size="3x" icon={ thirdstatus.attendance ? faToggleOn :faToggleOff} 
        onClick={() => setthirdstatus({
        ...thirdstatus,
        attendance : !thirdstatus.attendance
      })}
      />
      </InnerStatus>
      <InnerStatus>
      <FontAwesomeIcon color="#FF9E1B" size="3x" icon={ thirdstatus.lecture ? faToggleOn :faToggleOff} 
      onClick={() => setthirdstatus({
        ...thirdstatus,
        lecture : !thirdstatus.lecture
      })}
      />
      </InnerStatus>
    </Container>
    



  
                  </LeftStatusContainer>
                  <RightStatusContainer>
                    <RightTableHeaderContainer>
                      <h3>추가점수</h3>
                    </RightTableHeaderContainer>
                    <AdditionPointContainer>
                    <Button 
                    onClick={()=> {
                      teampoint.additionalPoint == 3 ?
                      setteampoint({
                        ...teampoint,
                        additionalPoint: 0
                      })
                      :
                      setteampoint({
                        ...teampoint,
                        additionalPoint: teampoint.additionalPoint+1
                      })
                    }}
                    >{teampoint.additionalPoint}</Button>
                    </AdditionPointContainer>
                  </RightStatusContainer>
                </StatusContainer>
              </StatusWrapper>
              <SubmitContainer>
                <SubmitButton>
                    저장하기
                </SubmitButton>
              </SubmitContainer>    
          </CenterContainer>  
        </InnerContainer>
      </Sidebar>
      <button onClick={()=>{console.log(teampoint)}}>상태확인</button>
    </div>
  );
}

export default Team;
