import React, { useState,useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import Status from '../components/Status'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
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


function Team({match}) {

  const [week, setweek] = useState(1);
  const [weekdata, setweekdata] = useState([]);
  const [teamdata, setteamdata] = useState([]);
  const [studentdata, setstudentdata] = useState([]);
  const [studentiddata, setstudentiddata] = useState([]);
  


  useEffect( async () => {
    getWeek()
    getTeam()
    getStudents()
    getStatus()
  }, [week])

  const getWeek = async () => {
   const _results = await api.getWeek(week)
   setweekdata(_results.data)
  }

  const getTeam = async () => {
    const _results = await api.getTeam(match.params.id)
    setteamdata(_results.data)
   }

  const getStudents = async () => {
    const _results = await api.getStudents(match.params.id)
    const students = _results.data.map((student, index)=> student.user_name)
    const studentids = _results.data.map((student, index)=> student.id)
    setstudentiddata(studentids)
    setstudentdata(students)
   }

   const getStatus = async () => {
    const firststatus = await api.getStatus(studentiddata[0],week)
    const secondstatus = await api.getStatus(studentiddata[1],week)
    const thirdstatus = await api.getStatus(studentiddata[2],week)
    const statuss = [firststatus.data,secondstatus.data,thirdstatus.data] 
    console.log(statuss[0])
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
                <h1>{teamdata.name}</h1>
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
                   { studentdata.map((student, index)=>
                    <Status name={studentdata[index]} id={studentiddata[index]} week={weekdata.weeknumber}   />) }
                  </LeftStatusContainer>
                  <RightStatusContainer>
                    <RightTableHeaderContainer>
                      <h3>추가점수</h3>
                    </RightTableHeaderContainer>
                    <AdditionPointContainer>
                    <Button >2</Button>
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
    </div>
  );
}

export default Team;
