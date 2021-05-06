import React from 'react'
import Sidebar from '../components/Sidebar'
import Background from '../components/Background'





function Landing() {
  return (
    <div className="Landing">
      <Sidebar login={true} name="관리자" width={300} height={"100vh"}>
      </Sidebar>
    </div> 
  );
}

export default Landing;
