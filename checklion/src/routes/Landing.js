import React from 'react'
import Sidebar from '../components/Sidebar'



function Landing() {
  return (
    <div className="Landing">
      <Sidebar login={true} width={300} height={"100vh"}>
        </Sidebar>
    </div>
  );
}

export default Landing;
