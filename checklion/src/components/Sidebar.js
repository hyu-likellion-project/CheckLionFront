import './Sidebar.css';
import React from "react";
import BarIcon from './BarIcon'
import { HashRouter, Link } from 'react-router-dom';

const Sidebar = ({ width, height, children }) => {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(0);
  }, []);


  return (
    <React.Fragment>
      <div className="page">
        <div className="toggle-menu"
        onClick={() => toggleMenu()}>
        <BarIcon  />
        </div>
      <div
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height
        }}
      >
        <div className="content">
          <div className="userInfo">
            환영합니다 관리자님!
          </div>
          <ul>
          <Link to="/login"><li>Login</li></Link>
          <Link to="/"><li>Ranking</li></Link>
          <Link to="/teamselect"><li>Team</li></Link>
          </ul>
          </div>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;