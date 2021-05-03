import React from "react";
import Header from './Header'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
    width: 90%;
    max-width: 300px;
    margin-top: 70px;
    height: 100%;
    width: 100%;
    position: absolute;
    border-top-right-radius: 40px;
    background-color:#ececec;
    font-weight: 600;
    letter-spacing: .03em;
`;

const UserInfo = styled.div`
     margin-top : 60px;
     padding-left : 30px;
     margin-bottom : 60px;
`;

const Navi  = styled.div`
    transition: 0.3s ease;
    width: 100%;
    position: fixed;
    height: 100vh;
    width: width,
    minHeight: height
`;

const Menu = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const MenuList = styled.li`
    padding: 10px 5px;
    display: block;
    text-transform: uppercase;
    transition: color .1s;
`;

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
        <div className="toggle-menu"
        onClick={() => toggleMenu()}>
        <Header  />
        </div>
      <Navi
        style={{
          transform: `translatex(${xPosition}px)`,
        }}
      >
        <Content>
          <UserInfo>
            환영합니다 관리자님!
          </UserInfo>
          <Menu>
          <Link to="/login"><MenuList>Login</MenuList></Link>
          <Link to="/"><MenuList>Ranking</MenuList></Link>
          <Link to="/teamselect"><MenuList>Team</MenuList></Link>
          </Menu>
          </Content>
      </Navi>
    </React.Fragment>
  );
};

export default Sidebar;