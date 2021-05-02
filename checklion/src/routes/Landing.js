import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import BarIcon from "../components/BarIcon";



function Landing() {
  return (
    <div className="Landing">
      <Sidebar width={300} height={"100vh"}>
          <h2>환영합니다 관리자님 !</h2>
          <h3>Ranking</h3>
          <h3>Team</h3>
        </Sidebar>
    </div>
  );
}

export default Landing;
